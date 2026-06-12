function OXMark({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="oxChromeC" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#d9dfe9" />
          <stop offset="75%" stopColor="#9aa3b5" />
          <stop offset="100%" stopColor="#6e7689" />
        </linearGradient>
        <linearGradient id="oxChromeBar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5f7fb" />
          <stop offset="55%" stopColor="#c4ccd9" />
          <stop offset="100%" stopColor="#80889b" />
        </linearGradient>
        <linearGradient id="oxBlueBlade" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1c44b8" />
          <stop offset="55%" stopColor="#2f6df2" />
          <stop offset="100%" stopColor="#a8d0ff" />
        </linearGradient>
        <linearGradient id="oxBlueSwoosh" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#142f7a" />
          <stop offset="55%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#5ea0ff" />
        </linearGradient>
        <filter id="oxTipGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* silver C — open ring, gap facing right */}
      <path
        d="M 58 30 A 22 22 0 1 0 58 66 L 53 59.5 A 14 14 0 1 1 53 36.5 Z"
        fill="url(#oxChromeC)"
      />
      {/* blue swoosh hugging the C's lower curve */}
      <path
        d="M 24 60 Q 44 71 62 52 Q 52 72 31 64.5 Q 26 62.5 24 60 Z"
        fill="url(#oxBlueSwoosh)"
      />
      {/* blue blade of the X with sharp spike to top-right */}
      <path
        d="M 50 60 L 83.5 15 L 88 8.5 L 86.5 17 L 57 64.5 Q 52.5 65.5 50 60 Z"
        fill="url(#oxBlueBlade)"
      />
      <path
        d="M 83.5 15 L 88 8.5 L 86.5 17 Z"
        fill="#c4dfff"
        filter="url(#oxTipGlow)"
      />
      {/* silver descending stroke of the X */}
      <path
        d="M 54 33 L 64 31 L 84 67.5 L 74.5 70 Z"
        fill="url(#oxChromeBar)"
      />
    </svg>
  );
}

export default function Logo({ size = 38 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-3 select-none">
      <OXMark size={size} />
      <span className="font-display leading-none">
        <span className="block text-lg font-bold tracking-[0.18em] text-gradient-chrome">
          ORI<span className="text-electric-400">X</span>EN
        </span>
        <span className="block text-[0.6rem] tracking-[0.62em] text-electric-400 mt-0.5">
          DIGITAL
        </span>
      </span>
    </span>
  );
}
