"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const TABS = [
  { id: "menu", label: "🍽️ Digital Menu" },
  { id: "portfolio", label: "🎨 Portfolio" },
  { id: "website", label: "🌐 Website" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const MENU_ITEMS = [
  { name: "Truffle Mushroom Pizza", price: "₹449", tag: "Chef's pick" },
  { name: "Smoked Paneer Tikka", price: "₹329", tag: "Bestseller" },
  { name: "Belgian Chocolate Shake", price: "₹249", tag: "New" },
];

function MenuDemo() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <span className="font-display font-semibold text-chrome-100">
          Café Nova — Live Menu
        </span>
        <span className="font-mono text-[0.6rem] px-2.5 py-1 rounded-full bg-green-500/15 text-green-400 tracking-widest">
          ● LIVE
        </span>
      </div>
      {MENU_ITEMS.map((dish, i) => (
        <motion.button
          key={dish.name}
          onClick={() => setSelected(selected === i ? null : i)}
          whileHover={{ x: 6 }}
          className={`w-full flex items-center justify-between rounded-2xl px-4 py-3.5 text-left transition-colors duration-300 ${
            selected === i
              ? "bg-electric-500/15 border border-electric-400/40"
              : "bg-white/[0.03] border border-white/5 hover:border-white/15"
          }`}
        >
          <span>
            <span className="block text-sm font-medium text-chrome-100">
              {dish.name}
            </span>
            <span className="text-[0.65rem] font-mono tracking-widest text-electric-300 uppercase">
              {dish.tag}
            </span>
          </span>
          <span className="font-display font-semibold text-gradient">
            {dish.price}
          </span>
        </motion.button>
      ))}
      <p className="pt-2 text-xs text-chrome-500 text-center">
        Tap a dish — updates push live to every table&apos;s QR menu.
      </p>
    </div>
  );
}

function PortfolioDemo() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {["from-blue-500/40 to-indigo-600/40", "from-cyan-400/40 to-blue-600/40", "from-indigo-400/40 to-violet-600/40", "from-sky-400/40 to-blue-500/40", "from-blue-600/40 to-slate-500/40", "from-violet-500/40 to-blue-500/40"].map(
        (gradient, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06, rotate: i % 2 ? 1.5 : -1.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className={`aspect-square rounded-2xl bg-gradient-to-br ${gradient} border border-white/10 flex items-end p-3`}
          >
            <span className="font-mono text-[0.55rem] tracking-widest text-white/70">
              WORK_{String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
        )
      )}
      <p className="col-span-3 pt-2 text-xs text-chrome-500 text-center">
        Hover the grid — portfolios that respond to every gesture.
      </p>
    </div>
  );
}

function WebsiteDemo() {
  const [dark, setDark] = useState(true);
  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-colors duration-500 ${
        dark ? "bg-[#0a0a14] border-white/10" : "bg-slate-100 border-slate-300"
      }`}
    >
      <div
        className={`flex items-center gap-1.5 px-4 py-2.5 border-b ${
          dark ? "border-white/10" : "border-slate-300"
        }`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <span
          className={`ml-3 font-mono text-[0.6rem] tracking-widest ${
            dark ? "text-chrome-500" : "text-slate-500"
          }`}
        >
          yourbrand.com
        </span>
      </div>
      <div className="p-6 text-center">
        <motion.h4
          layout
          className={`font-display text-xl font-bold ${
            dark ? "text-gradient" : "text-blue-700"
          }`}
        >
          Your Brand, Reimagined
        </motion.h4>
        <p
          className={`mt-2 text-xs ${
            dark ? "text-chrome-500" : "text-slate-600"
          }`}
        >
          Pixel-perfect across every device and theme.
        </p>
        <button
          onClick={() => setDark(!dark)}
          className={`mt-5 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
            dark
              ? "bg-gradient-to-r from-electric-600 to-electric-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]"
              : "bg-slate-900 text-white"
          }`}
        >
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}

export default function Demo() {
  const [active, setActive] = useState<TabId>("menu");

  return (
    <section id="demo" className="relative py-28 md:py-40">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora-blob animate-aurora absolute bottom-0 left-1/3 w-[32rem] h-[32rem] rounded-full bg-electric-600/12 [animation-delay:-12s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="Live Playground"
          title="Don't imagine it."
          highlight="Touch it."
          description="Interactive previews of what we ship — try them right here."
        />

        <Reveal>
          <div className="mx-auto max-w-2xl">
            {/* tab switcher */}
            <div
              className="flex gap-2 p-1.5 glass rounded-full mb-8"
              role="tablist"
              aria-label="Product demos"
            >
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={active === tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`relative flex-1 px-4 py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-300 ${
                    active === tab.id
                      ? "text-white"
                      : "text-chrome-500 hover:text-chrome-300"
                  }`}
                >
                  {active === tab.id && (
                    <motion.span
                      layoutId="demo-tab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-600 to-electric-400 shadow-[0_0_24px_rgba(37,99,235,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* demo stage */}
            <div className="glass-strong holo-border rounded-[2rem] p-6 md:p-8 min-h-[22rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.985 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  {active === "menu" && <MenuDemo />}
                  {active === "portfolio" && <PortfolioDemo />}
                  {active === "website" && <WebsiteDemo />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
