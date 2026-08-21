"use client";

import { useCallback, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { HtmlLang } from "@/components/katem/HtmlLang";
import { KatemBoot } from "@/components/katem/KatemBoot";
import { KatemCrt } from "@/components/katem/KatemCrt";
import { KatemCursor } from "@/components/katem/KatemCursor";
import { KatemMouseGlow } from "@/components/katem/KatemMouseGlow";
import { KatemNav } from "@/components/katem/KatemNav";
import { SmoothScroll } from "@/components/katem/SmoothScroll";
import { ArchivoSection } from "@/components/sections/ArchivoSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { EstudioSection } from "@/components/sections/EstudioSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetodoSection } from "@/components/sections/MetodoSection";
import { ServiciosSection } from "@/components/sections/ServiciosSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { WhyKatemSection } from "@/components/sections/WhyKatemSection";

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
      <KatemMouseGlow />
      <SmoothScroll />

      <div
        className={`transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <KatemNav dict={dict.nav} locale={locale} />
        <main>
          <HeroSection dict={dict.hero} />
          <StatementSection dict={dict.statement} />
          <ArchivoSection dict={dict.archivo} />
          <ServiciosSection dict={dict.servicios} />
          <WhyKatemSection dict={dict.why} />
          <MetodoSection dict={dict.metodo} />
          <EstudioSection dict={dict.estudio} />
          <CtaSection dict={dict.cta} />
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
