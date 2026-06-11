"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <motion.figure
      whileHover={{ y: -6 }}
      className="glass holo-border rounded-3xl p-7 w-[20rem] md:w-[24rem] shrink-0"
    >
      <div className="flex gap-1 text-electric-300" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} aria-hidden="true">★</span>
        ))}
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-chrome-300">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-electric-600 font-display font-bold text-white text-sm">
          {t.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-chrome-100">
            {t.name}
          </span>
          <span className="block text-xs text-chrome-500">{t.role}</span>
        </span>
      </figcaption>
    </motion.figure>
  );
}

export default function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="relative py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="Signal"
          title="Loved by people who"
          highlight="demand more."
        />
      </div>

      {/* infinite marquee row */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-24 md:w-48 z-10 bg-gradient-to-r from-void to-transparent pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-24 md:w-48 z-10 bg-gradient-to-l from-void to-transparent pointer-events-none"
        />
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] px-6">
          {doubled.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
