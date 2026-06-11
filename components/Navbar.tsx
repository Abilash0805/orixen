"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import MagneticButton from "./ui/MagneticButton";
import { CONTACT } from "@/lib/data";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Showcase", href: "#showcase" },
  { label: "Demo", href: "#demo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-0 inset-x-0 z-[90]"
    >
      <div
        className={`mx-auto mt-4 max-w-7xl px-5 transition-all duration-500 ${
          scrolled ? "md:px-4" : "md:px-8"
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong holo-border" : "bg-transparent"
          }`}
          aria-label="Main navigation"
        >
          <a href="#hero" aria-label="Orixen Digital home">
            <Logo size={34} />
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm text-chrome-300 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-electric-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton href={CONTACT.whatsappLink} ariaLabel="Start a project on WhatsApp">
              Start a Project
            </MagneticButton>
          </div>

          {/* mobile toggle */}
          <button
            className="lg:hidden relative w-10 h-10 glass rounded-xl flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white"
            />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:hidden mx-5 mt-2 rounded-2xl glass-strong holo-border p-6"
          >
            <ul className="flex flex-col gap-4">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-display text-chrome-100 hover:text-electric-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6">
              <MagneticButton href={CONTACT.whatsappLink} ariaLabel="Start a project on WhatsApp">
                Start a Project
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
