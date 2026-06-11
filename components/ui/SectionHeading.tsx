"use client";

import Reveal from "./Reveal";

type Props = {
  kicker: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  kicker,
  title,
  highlight,
  description,
  align = "center",
}: Props) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 mb-14 md:mb-20 ${alignCls}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[0.65rem] font-mono tracking-[0.35em] text-electric-300 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulseGlow" />
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gradient-chrome">
          {title}{" "}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="max-w-2xl text-chrome-500 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
