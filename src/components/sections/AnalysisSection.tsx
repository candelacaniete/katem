"use client";

import type { Dictionary } from "@/i18n/dictionaries/es";
import { AnalysisForm } from "@/components/pages/AnalysisForm";

type Props = {
  dict: Dictionary["analysisForm"];
};

export function AnalysisSection({ dict }: Props) {
  return (
    <section
      id="analisis"
      className="section relative overflow-hidden border-y border-off-white/10 bg-black py-12 sm:py-14 lg:py-16"
      aria-labelledby="analysis-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(139,122,158,0.08),transparent_55%)]"
      />
      <div className="section__inner relative z-10 max-w-4xl">
        <h2 id="analysis-heading" className="sr-only">
          {dict.title}
        </h2>
        <AnalysisForm copy={dict} />
      </div>
    </section>
  );
}
