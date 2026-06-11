"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
  {
    code: "ORX://NEURAL-DESIGN",
    title: "AI-Accelerated Design",
    description:
      "We pair human taste with AI tooling to explore hundreds of directions in hours, not weeks — then hand-polish the winner until it gleams.",
    metrics: [
      ["10x", "Faster concepting"],
      ["∞", "Iterations explored"],
    ],
  },
  {
    code: "ORX://MOTION-ENGINE",
    title: "Cinematic Motion Systems",
    description:
      "Scroll-driven storytelling, WebGL shaders and physics-based micro-interactions — every Orixen build moves like a film, not a webpage.",
    metrics: [
      ["60fps", "Target framerate"],
      ["100%", "GPU-accelerated"],
    ],
  },
  {
    code: "ORX://PERF-CORE",
    title: "Performance Obsessed",
    description:
      "Lazy-loaded assets, adaptive rendering and ruthless optimization. Beautiful is worthless if it's slow — ours is both.",
    metrics: [
      ["<1s", "First paint goal"],
      ["A+", "Core Web Vitals"],
    ],
  },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="showcase" ref={sectionRef} className="relative overflow-hidden">
      <div className="pt-28 md:pt-40 pb-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="The Orixen Engine"
          title="Powered by"
          highlight="intelligence."
          align="left"
        />
      </div>

      {/* horizontal cinematic track (vertical stack on mobile) */}
      <div
        ref={trackRef}
        className="flex flex-col md:flex-row gap-6 md:gap-10 px-6 md:px-[10vw] pb-28 md:pb-40 md:w-max"
      >
        {SLIDES.map((slide) => (
          <article
            key={slide.code}
            className="relative glass-strong holo-border rounded-[2rem] p-8 md:p-14 md:w-[62vw] lg:w-[46vw] shrink-0 overflow-hidden group"
          >
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-electric-500/15 blur-3xl group-hover:bg-electric-400/25 transition-colors duration-700"
            />
            <span className="font-mono text-xs tracking-[0.3em] text-electric-300">
              {slide.code}
            </span>
            <h3 className="mt-5 font-display text-3xl md:text-5xl font-bold text-gradient-chrome">
              {slide.title}
            </h3>
            <p className="mt-5 max-w-xl text-base md:text-lg text-chrome-500 leading-relaxed">
              {slide.description}
            </p>
            <div className="mt-10 flex gap-10">
              {slide.metrics.map(([value, label]) => (
                <div key={label}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-gradient">
                    {value}
                  </p>
                  <p className="mt-1 text-xs tracking-[0.2em] uppercase text-chrome-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            {/* animated scan line */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-300/80 to-transparent animate-pulseGlow"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
