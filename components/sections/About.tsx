"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { STATS, PROCESS } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1600;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="aurora-blob animate-aurora absolute top-1/3 -left-40 w-[30rem] h-[30rem] rounded-full bg-electric-600/15" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="The Studio"
          title="One studio."
          highlight="Infinite output."
          description="Orixen Digital is a creative-tech studio obsessed with detail. We merge engineering precision with cinematic design to ship work that looks expensive — because attention to detail is expensive, and we pay it on every pixel."
        />

        {/* stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="glass holo-border rounded-3xl p-7 md:p-9 text-center group"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs md:text-sm tracking-[0.2em] uppercase text-chrome-500 group-hover:text-chrome-300 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* process timeline */}
        <div className="mt-24 grid md:grid-cols-4 gap-5">
          {PROCESS.map((phase, i) => (
            <Reveal key={phase.step} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative glass rounded-3xl p-7 h-full overflow-hidden group"
              >
                <span className="absolute -top-4 -right-2 font-display text-7xl font-bold text-white/[0.04] group-hover:text-electric-500/10 transition-colors duration-500">
                  {phase.step}
                </span>
                <span className="font-mono text-xs text-electric-400 tracking-[0.3em]">
                  PHASE {phase.step}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-chrome-100">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-chrome-500">
                  {phase.description}
                </p>
                <span className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-electric-400/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
