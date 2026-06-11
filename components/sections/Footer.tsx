"use client";

import Logo from "@/components/Logo";
import Reveal from "@/components/ui/Reveal";
import { CONTACT, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* giant ghost wordmark */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-8 md:-bottom-16 flex justify-center pointer-events-none select-none"
      >
        <span className="font-display font-bold tracking-[0.2em] text-[18vw] leading-none text-white/[0.025]">
          ORIXEN
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-10">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Logo size={40} />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-chrome-500">
                Designing solutions. Creating impact. A creative-tech studio
                building futuristic digital experiences from India for the
                world.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs tracking-[0.35em] text-electric-300 uppercase">
                Services
              </h4>
              <ul className="mt-5 space-y-2.5">
                {SERVICES.map((service) => (
                  <li key={service.tag}>
                    <a
                      href="#services"
                      className="text-sm text-chrome-500 hover:text-chrome-100 transition-colors duration-300"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs tracking-[0.35em] text-electric-300 uppercase">
                Connect
              </h4>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li>
                  <a
                    href={CONTACT.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-chrome-500 hover:text-chrome-100 transition-colors duration-300"
                  >
                    WhatsApp · +91 97890 10266
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.emailLink}
                    className="text-chrome-500 hover:text-chrome-100 transition-colors duration-300 break-all"
                  >
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-chrome-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                Accepting new projects
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 pt-7 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-chrome-500">
            © {new Date().getFullYear()} Orixen Digital. All rights reserved.
          </p>
          <p className="font-mono text-[0.6rem] tracking-[0.4em] text-chrome-500/60 uppercase">
            Designing Solutions · Creating Impact
          </p>
        </div>
      </div>
    </footer>
  );
}
