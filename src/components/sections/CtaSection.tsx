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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,160,174,0.1),transparent_50%)]"
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

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <KatemButton
            href={dict.href}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[220px] transition-transform duration-300 hover:scale-[1.03]"
          >
            {dict.button}
          </KatemButton>
          <KatemButton
            href={dict.secondaryHref}
            variant="ghost"
          >
            {dict.secondary}
          </KatemButton>
        </div>

        <a
          href={`mailto:${dict.email}`}
          className="mt-8 inline-block font-mono text-sm tracking-[0.08em] text-off-white/70 transition-colors hover:text-pink"
          data-cursor="open"
        >
          {dict.email}
        </a>

        <p className="mt-4 whitespace-pre-line font-mono text-[11px] uppercase tracking-[0.18em] text-off-white/40">
          {dict.note}
        </p>
      </div>
    </section>
  );
}
