"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  /** "fade" slides up; "flip" rotates in with 3D perspective */
  variant?: "fade" | "flip";
};

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className = "",
  once = true,
  variant = "fade",
}: Props) {
  const initial =
    variant === "flip"
      ? { opacity: 0, y: 60, rotateX: 35, scale: 0.92, filter: "blur(6px)" }
      : { opacity: 0, y, filter: "blur(6px)" };
  const visible =
    variant === "flip"
      ? { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }
      : { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      initial={initial}
      whileInView={visible}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={variant === "flip" ? { transformPerspective: 1200 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
