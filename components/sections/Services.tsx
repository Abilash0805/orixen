"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/data";

function TiltCard({
  service,
}: {
  service: (typeof SERVICES)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [9, -9]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-9, 9]), {
    stiffness: 200,
    damping: 20,
  });
  const glowX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(my, [0, 1], ["0%", "100%"]);

  const onMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="relative h-full glass holo-border rounded-3xl p-8 group overflow-hidden [perspective:1000px]"
    >
      {/* pointer-tracked glow */}
      <motion.div
        aria-hidden="true"
        className="absolute w-72 h-72 rounded-full bg-electric-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ left: glowX, top: glowY, x: "-50%", y: "-50%" }}
      />

      <div style={{ transform: "translateZ(36px)" }}>
        <div className="flex items-start justify-between">
          <span className="text-4xl" aria-hidden="true">
            {service.icon}
          </span>
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-electric-300/70 px-3 py-1 rounded-full border border-electric-500/20">
            {service.tag}
          </span>
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-chrome-100 group-hover:text-gradient transition-all duration-300">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-chrome-500">
          {service.description}
        </p>
        <ul className="mt-6 space-y-2.5">
          {service.points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2.5 text-sm text-chrome-300"
            >
              <span
                className="w-1 h-1 rounded-full bg-electric-400 shadow-[0_0_6px_rgba(59,130,246,0.9)]"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora-blob animate-aurora absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full bg-electric-500/10 [animation-delay:-5s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="Capabilities"
          title="Everything digital,"
          highlight="done beautifully."
          description="Seven verticals, one obsession: shipping work that makes people stop and stare."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.tag}
              variant="flip"
              delay={(i % 3) * 0.12}
              className="h-full"
            >
              <TiltCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
