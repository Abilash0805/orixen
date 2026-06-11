"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let value = 0;
    const tick = setInterval(() => {
      value += Math.random() * 16 + 6;
      if (value >= 100) {
        value = 100;
        clearInterval(tick);
        setTimeout(() => setDone(true), 450);
      }
      setProgress(Math.floor(value));
    }, 130);
    return () => clearInterval(tick);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-3xl md:text-5xl font-bold tracking-[0.25em] text-gradient-chrome"
          >
            ORI<span className="text-electric-400">X</span>EN
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[0.65rem] tracking-[0.7em] text-electric-300/80 font-mono"
          >
            INITIALIZING EXPERIENCE
          </motion.p>

          <div className="mt-10 w-56 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-electric-600 via-electric-400 to-electric-300 shadow-[0_0_16px_rgba(59,130,246,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 font-mono text-xs text-chrome-500 tabular-nums">
            {progress.toString().padStart(3, "0")} / 100
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
