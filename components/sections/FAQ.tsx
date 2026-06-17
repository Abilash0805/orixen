"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora-blob animate-aurora absolute top-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-electric-500/12" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        <SectionHeading
          kicker="Answers"
          title="Questions,"
          highlight="decoded."
        />

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 0.06}>
                <div
                  className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                    isOpen ? "glass-strong holo-border" : "glass"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  >
                    <span
                      className={`font-display font-medium transition-colors duration-300 ${
                        isOpen ? "text-gradient" : "text-chrome-100 group-hover:text-white"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full border text-lg transition-colors duration-300 ${
                        isOpen
                          ? "border-electric-400/60 text-electric-300"
                          : "border-white/15 text-chrome-500"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-chrome-500">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
