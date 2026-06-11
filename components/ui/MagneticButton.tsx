"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  const onMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-electric-600 to-electric-400 text-white shadow-[0_0_32px_rgba(37,99,235,0.45)] hover:shadow-[0_0_48px_rgba(59,130,246,0.65)]"
      : "glass text-chrome-100 hover:bg-white/10";

  const inner = (
    <span
      className={`relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-semibold text-sm tracking-wide transition-shadow duration-300 overflow-hidden ${styles}`}
    >
      <span className="absolute inset-0 shimmer animate-shimmer pointer-events-none" />
      {children}
    </span>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {href ? (
        <a
          href={href}
          aria-label={ariaLabel}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {inner}
        </a>
      ) : (
        <button aria-label={ariaLabel}>{inner}</button>
      )}
    </motion.div>
  );
}
