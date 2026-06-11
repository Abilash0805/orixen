import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#030308",
        abyss: "#06060e",
        panel: "rgba(255,255,255,0.04)",
        electric: {
          300: "#7ab8ff",
          400: "#3b82f6",
          500: "#2563eb",
          600: "#1d4ed8",
        },
        chrome: {
          100: "#f4f6fb",
          300: "#c8d0de",
          500: "#8a93a6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        marquee: "marquee 36s linear infinite",
        aurora: "aurora 18s ease-in-out infinite alternate",
        shimmer: "shimmer 2.6s linear infinite",
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%": { transform: "translate(-12%, -8%) rotate(0deg) scale(1)" },
          "50%": { transform: "translate(10%, 6%) rotate(28deg) scale(1.18)" },
          "100%": { transform: "translate(-6%, 10%) rotate(-18deg) scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
