export default function Logo({ size = 38 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-3 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="oxSilver" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#c8d0de" />
            <stop offset="100%" stopColor="#7a8499" />
          </linearGradient>
          <linearGradient id="oxBlue" x1="64" y1="0" x2="0" y2="64">
            <stop offset="0%" stopColor="#7ab8ff" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        {/* C / O sweep */}
        <path
          d="M40 10a24 24 0 1 0 0 44"
          stroke="url(#oxSilver)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* X strokes */}
        <path
          d="M26 46 58 8"
          stroke="url(#oxBlue)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M34 28 56 54"
          stroke="url(#oxSilver)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
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
