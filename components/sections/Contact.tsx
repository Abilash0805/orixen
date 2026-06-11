"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { CONTACT } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      {/* converging aurora */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora-blob animate-aurora absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] rounded-full bg-electric-600/20" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <SectionHeading
          kicker="Transmission"
          title="Ready to build something"
          highlight="impossible?"
          description="One message starts everything. Tell us what you're dreaming about — we'll tell you how fast we can make it real."
        />

        <Reveal>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {/* WhatsApp card */}
            <motion.a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="glass-strong holo-border rounded-3xl p-8 group"
            >
              <span className="text-4xl" aria-hidden="true">💬</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-chrome-100 group-hover:text-gradient transition-all">
                WhatsApp
              </h3>
              <p className="mt-1.5 font-mono text-sm text-electric-300 tracking-wide">
                +91 97890 10266
              </p>
              <p className="mt-3 text-xs text-chrome-500">
                Fastest response — usually within minutes.
              </p>
            </motion.a>

            {/* Email card */}
            <motion.a
              href={CONTACT.emailLink}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="glass-strong holo-border rounded-3xl p-8 group"
            >
              <span className="text-4xl" aria-hidden="true">✉️</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-chrome-100 group-hover:text-gradient transition-all">
                Email
              </h3>
              <p className="mt-1.5 font-mono text-sm text-electric-300 tracking-wide break-all">
                {CONTACT.email}
              </p>
              <p className="mt-3 text-xs text-chrome-500">
                Perfect for detailed briefs and attachments.
              </p>
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12">
            <MagneticButton
              href={CONTACT.whatsappLink}
              ariaLabel="Start the conversation on WhatsApp"
            >
              Start The Conversation
              <span aria-hidden="true">→</span>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
