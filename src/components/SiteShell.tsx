"use client";

import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { HtmlLang } from "@/components/katem/HtmlLang";
import { KatemCrt } from "@/components/katem/KatemCrt";
import { KatemCursor } from "@/components/katem/KatemCursor";
import { KatemNav } from "@/components/katem/KatemNav";
import { SmoothScroll } from "@/components/katem/SmoothScroll";
import { FooterSection } from "@/components/sections/FooterSection";

type Props = {
  dict: Dictionary;
  locale: Locale;
  children: ReactNode;
  /** When true, skip custom cursor/smooth (static legal pages). */
  minimal?: boolean;
};

export function SiteShell({ dict, locale, children, minimal = false }: Props) {
  return (
    <div className="site-shell">
      <div className="grain-overlay" aria-hidden />
      <HtmlLang locale={locale} />
      <KatemCrt />
      {!minimal ? <KatemCursor labels={dict.cursor} /> : null}
      {!minimal ? <SmoothScroll /> : null}
      <KatemNav dict={dict.nav} locale={locale} />
      <main className="pt-24">{children}</main>
      <FooterSection
        dict={dict.footer}
        lang={dict.nav.lang}
        locale={locale}
      />
    </div>
  );
}
