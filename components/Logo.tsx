import Image from "next/image";

export default function Logo({ size = 38 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-3 select-none">
      {/* mix-blend-screen drops the logo's black background on any dark surface */}
      <Image
        src="/logo.png"
        alt=""
        width={size}
        height={size}
        priority
        className="mix-blend-screen scale-125"
      />
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
