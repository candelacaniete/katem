"use client";

import { useCallback, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { HtmlLang } from "@/components/katem/HtmlLang";
import { KatemBoot } from "@/components/katem/KatemBoot";
import { KatemCrt } from "@/components/katem/KatemCrt";
import { KatemCursor } from "@/components/katem/KatemCursor";
import { KatemNav } from "@/components/katem/KatemNav";
import { SmoothScroll } from "@/components/katem/SmoothScroll";
import { AnalysisSection } from "@/components/sections/AnalysisSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { EstudioSection } from "@/components/sections/EstudioSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetodoSection } from "@/components/sections/MetodoSection";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { ServiciosSection } from "@/components/sections/ServiciosSection";
import { StatementSection } from "@/components/sections/StatementSection";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function HomeExperience({ dict, locale }: Props) {
  const [ready, setReady] = useState(false);
  const onBootDone = useCallback(() => setReady(true), []);

  return (
    <div className="site-shell">
      <div className="grain-overlay" aria-hidden />
      <HtmlLang locale={locale} />
      <KatemBoot
        copy={dict.boot}
        skipLabel={dict.skipBoot}
        onDone={onBootDone}
      />
      <KatemCrt />
      <KatemCursor labels={dict.cursor} />
      <SmoothScroll />

      <div
        className={`transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <KatemNav dict={dict.nav} locale={locale} />
        <main>
          <HeroSection dict={dict.hero} locale={locale} />
          <StatementSection dict={dict.statement} />
          <ServiciosSection dict={dict.servicios} locale={locale} />
          <PipelineSection dict={dict.pipeline} />
          <MetodoSection dict={dict.metodo} />
          <EstudioSection dict={dict.estudio} />
          <CtaSection dict={dict.cta} locale={locale} />
          <AnalysisSection dict={dict.analysisForm} />
        </main>
        <FooterSection
          dict={dict.footer}
          lang={dict.nav.lang}
          locale={locale}
        />
      </div>
    </div>
  );
}
