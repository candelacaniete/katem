"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

type Props = {
  dict: Dictionary["nav"];
  locale: Locale;
};

export function KatemNav({ dict, locale }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="section__inner flex items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <a href="#inicio" className="group" data-cursor="open">
          <span className="block font-display text-lg font-semibold tracking-tight text-off-white sm:text-xl">
            {dict.brand}
          </span>
          <span className="tech-label text-off-white/40 group-hover:text-pink">
            {dict.studio}
          </span>
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {dict.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[11px] uppercase tracking-[0.18em] text-off-white/65 transition-colors hover:text-off-white"
              data-cursor="open"
            >
              {link.label}
            </a>
          ))}
          <a
            href={dict.demos.href}
            className="font-body text-[11px] uppercase tracking-[0.18em] text-pink transition-colors hover:text-lavender"
            data-cursor="open"
          >
            {dict.demos.label}
          </a>
          <LangSwitch locale={locale} labels={dict.lang} />
        </nav>

        <button
          type="button"
          className="inline-flex border border-off-white/20 p-2 text-off-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">
            {open ? dict.closeMenu : dict.openMenu}
          </span>
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-b border-off-white/10 bg-black/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden"
        >
          <nav aria-label="Móvil" className="flex flex-col gap-4">
            {dict.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 font-body text-sm uppercase tracking-[0.18em] text-off-white/85"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={dict.demos.href}
              className="py-1 font-body text-sm uppercase tracking-[0.18em] text-pink"
              onClick={() => setOpen(false)}
            >
              {dict.demos.label}
            </a>
            <LangSwitch locale={locale} labels={dict.lang} />
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function LangSwitch({
  locale,
  labels,
}: {
  locale: Locale;
  labels: Dictionary["nav"]["lang"];
}) {
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em]">
      <Link
        href="/"
        className={cn(
          locale === "es" ? "text-pink" : "text-off-white/40 hover:text-off-white"
        )}
        hrefLang="es"
        data-cursor="open"
      >
        {labels.es}
      </Link>
      <span className="text-off-white/25">/</span>
      <Link
        href="/en"
        className={cn(
          locale === "en" ? "text-pink" : "text-off-white/40 hover:text-off-white"
        )}
        hrefLang="en"
        data-cursor="open"
      >
        {labels.en}
      </Link>
    </div>
  );
}
