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
      className="section relative overflow-hidden border-y border-off-white/10 bg-black !py-12 sm:!py-14 lg:!py-16"
      aria-labelledby="analysis-heading"
    >
      {/* Animated atmosphere — grid drift + soft signal pulse */}
      <div aria-hidden className="analysis-field pointer-events-none absolute inset-0">
        <div className="analysis-field__glow" />
        <div className="analysis-field__grid" />
        <div className="analysis-field__scan" />
        <div className="analysis-field__vignette" />
      </div>

      <div className="section__inner relative z-10 max-w-5xl">
        <h2 id="analysis-heading" className="sr-only">
          {dict.title}
        </h2>
        <AnalysisForm copy={dict} />
      </div>
    </section>
  );
}
