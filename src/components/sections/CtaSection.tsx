"use client";

import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemButton } from "@/components/katem/KatemButton";

type Props = {
  dict: Dictionary["cta"];
};

export function CtaSection({ dict }: Props) {
  return (
    <section
      id="contacto"
      className="section relative overflow-hidden bg-black"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,79,216,0.12),transparent_50%)]"
      />
      <div className="section__inner relative z-10 max-w-4xl">
        <h2
          id="cta-heading"
          className="font-display text-[clamp(2.4rem,8vw,5.5rem)] font-semibold leading-[0.92] tracking-tight"
        >
          {dict.lines.map((line) => (
            <span
              key={line}
              className={
                line === dict.accent ? "block text-pink" : "block text-off-white"
              }
            >
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-10">
          <KatemButton
            href={dict.href}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[220px] transition-transform duration-300 hover:scale-[1.03]"
          >
            {dict.button}
          </KatemButton>
        </div>

        <p className="mt-8 whitespace-pre-line font-mono text-[11px] uppercase tracking-[0.18em] text-off-white/40">
          {dict.note}
        </p>
      </div>
    </section>
  );
}
