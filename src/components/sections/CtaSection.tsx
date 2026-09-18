"use client";

import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemButton } from "@/components/katem/KatemButton";
import { AnalysisForm } from "@/components/pages/AnalysisForm";

type Props = {
  dict: Dictionary["cta"];
  form: Dictionary["analysisForm"];
};

export function CtaSection({ dict, form }: Props) {
  return (
    <section
      id="empezar"
      className="section relative overflow-hidden border-t border-off-white/10 bg-black"
      aria-labelledby="cta-heading"
    >
      {/* Shared atmosphere with the form column */}
      <div aria-hidden className="analysis-field pointer-events-none absolute inset-0">
        <div className="analysis-field__glow" />
        <div className="analysis-field__grid" />
        <div className="analysis-field__scan" />
        <div className="analysis-field__vignette" />
      </div>

      <div className="section__inner relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Title + actions — 50% */}
          <div className="min-w-0">
            <h2
              id="cta-heading"
              className="font-display text-[clamp(2.2rem,6.5vw,4.75rem)] font-semibold leading-[0.92] tracking-tight"
            >
              {dict.lines.map((line) => (
                <span
                  key={line}
                  className={
                    line === dict.accent
                      ? "font-bubbly mt-2 block text-[clamp(2rem,6vw,4rem)]"
                      : "block text-off-white"
                  }
                >
                  {line}
                </span>
              ))}
            </h2>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
              <KatemButton
                href={dict.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
              >
                {dict.button}
              </KatemButton>
              <KatemButton
                href={dict.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                {dict.secondary}
              </KatemButton>
            </div>

            <a
              href={`mailto:${dict.email}`}
              className="mt-6 inline-block font-mono text-sm tracking-[0.08em] text-off-white/70 transition-colors hover:text-pink"
              data-cursor="open"
            >
              {dict.email}
            </a>

            <p className="mt-3 whitespace-pre-line font-mono text-[11px] uppercase tracking-[0.18em] text-off-white/40">
              {dict.note}
            </p>
          </div>

          {/* Form — 50% */}
          <div id="analisis" className="min-w-0 w-full">
            <h3 className="sr-only">{form.title}</h3>
            <AnalysisForm copy={form} />
          </div>
        </div>
      </div>
    </section>
  );
}
