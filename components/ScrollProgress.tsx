"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 inset-x-0 z-[95] h-[2px] origin-left bg-gradient-to-r from-electric-600 via-electric-400 to-electric-300 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
      style={{ scaleX }}
    />
  );
}
