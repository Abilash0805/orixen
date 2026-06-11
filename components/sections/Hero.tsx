"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { CONTACT, MARQUEE_ITEMS } from "@/lib/data";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" aria-hidden="true" />,
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 1.9 } },
};

const item = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* 3D universe */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <HeroScene />
      </div>

      {/* aurora glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
        <div className="aurora-blob animate-aurora absolute -top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-electric-600/25" />
        <div className="aurora-blob animate-aurora absolute bottom-0 right-0 w-[34rem] h-[34rem] rounded-full bg-cyan-500/10 [animation-delay:-9s]" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-void to-transparent" />
      </div>

      {/* content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 text-center pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass holo-border text-xs font-mono tracking-[0.3em] text-electric-300 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-300" />
            </span>
            Designing Solutions · Creating Impact
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 font-display font-bold tracking-tight leading-[0.95] text-5xl sm:text-7xl lg:text-8xl"
        >
          <span className="block text-gradient-chrome">Digital Experiences</span>
          <span className="block text-gradient">From The Future</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-base md:text-xl text-chrome-500 leading-relaxed"
        >
          Orixen Digital builds immersive websites, digital products and
          creative experiences engineered to feel impossible — and convert like
          crazy.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href={CONTACT.whatsappLink} ariaLabel="Launch your project on WhatsApp">
            Launch Your Project
            <span aria-hidden="true">→</span>
          </MagneticButton>
          <MagneticButton href="#services" variant="ghost" ariaLabel="Explore services">
            Explore Services
          </MagneticButton>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          variants={item}
          className="mt-20 flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <span className="text-[0.6rem] font-mono tracking-[0.5em] text-chrome-500 uppercase">
            Scroll to explore
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-electric-400 to-transparent relative overflow-hidden">
            <motion.span
              className="absolute top-0 w-full h-4 bg-electric-300"
              animate={{ y: [0, 48] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* marquee strip */}
      <div className="relative z-10 border-y border-white/5 bg-void/40 backdrop-blur-sm py-4 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((label, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-sm tracking-[0.4em] text-chrome-500/70"
            >
              {label}
              <span className="text-electric-400" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
