"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { barePathFromPathname, href } from "@/lib/routes";
import { cn } from "@/lib/cn";

type Props = {
  dict: Dictionary["nav"];
  locale: Locale;
};

export function KatemNav({ dict, locale }: Props) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const homeHref = href(locale, "home");

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="section__inner flex items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <Link href={homeHref} className="group" data-cursor="open">
          <span className="block font-display text-lg font-semibold tracking-tight text-off-white sm:text-xl">
            {dict.brand}
          </span>
          <span className="tech-label text-off-white/40 group-hover:text-pink">
            {dict.studio}
          </span>
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-6 lg:flex"
        >
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 font-body text-[11px] uppercase tracking-[0.18em] text-off-white/65 transition-colors hover:text-off-white"
              aria-expanded={servicesOpen}
              data-cursor="open"
              onClick={() => setServicesOpen((v) => !v)}
            >
              {dict.servicesLabel}
              <ChevronDown size={14} strokeWidth={1.5} aria-hidden />
            </button>
            {servicesOpen ? (
              <div className="absolute left-0 top-full z-50 w-max min-w-[12rem] max-w-[min(18rem,calc(100vw-2.5rem))] border border-off-white/15 bg-black/95 py-2 shadow-window backdrop-blur-md">
                {dict.services.map((item) => (
                  <Link
                    key={item.href}
                    href={href(locale, item.href)}
                    className="block px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-off-white/70 transition-colors hover:bg-purple-black hover:text-pink sm:tracking-[0.16em]"
                    data-cursor="open"
                  >
                    <span className="block break-words">{item.label}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {dict.links.map((link) => (
            <Link
              key={link.href}
              href={href(locale, link.href)}
              className="font-body text-[11px] uppercase tracking-[0.18em] text-off-white/65 transition-colors hover:text-off-white"
              data-cursor="open"
            >
              {link.label}
            </Link>
          ))}
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
          {open ? (
            <X size={18} strokeWidth={1.5} />
          ) : (
            <Menu size={18} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-b border-off-white/10 bg-black/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden"
        >
          <nav aria-label="Móvil" className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/40">
              {dict.servicesLabel}
            </p>
            {dict.services.map((item) => (
              <Link
                key={item.href}
                href={href(locale, item.href)}
                className="py-1 pl-2 font-body text-sm uppercase tracking-[0.18em] text-off-white/85"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {dict.links.map((link) => (
              <Link
                key={link.href}
                href={href(locale, link.href)}
                className="py-1 font-body text-sm uppercase tracking-[0.18em] text-off-white/85"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
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
  const pathname = usePathname() || "/";
  const bare = barePathFromPathname(pathname);
  const esHref = href("es", bare === "/" ? "home" : bare);
  const enHref = href("en", bare === "/" ? "home" : bare);

  return (
    <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em]">
      <Link
        href={esHref}
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
        href={enHref}
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
