"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { barePathFromPathname, href } from "@/lib/routes";
import { localePath } from "@/lib/seo";
import { cn } from "@/lib/cn";

type Props = {
  dict: Dictionary["footer"];
  lang: Dictionary["nav"]["lang"];
  locale: Locale;
};

export function FooterSection({ dict, lang, locale }: Props) {
  const pathname = usePathname() || "/";
  const bare = barePathFromPathname(pathname);
  const esHref = href("es", bare === "/" ? "home" : bare);
  const enHref = href("en", bare === "/" ? "home" : bare);
  const privacyHref = localePath(locale, dict.privacy.href);

  return (
    <footer className="border-t border-off-white/10 bg-black px-5 py-12 sm:px-8 lg:px-10">
      <div className="section__inner grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            {dict.brand}
          </p>
          <p className="mt-2 tech-label">{dict.studio}</p>
          <p className="mt-8 whitespace-pre-line font-mono text-[11px] uppercase tracking-[0.18em] text-off-white/45">
            {dict.mantra}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {dict.links.map((link) => (
            <Link
              key={link.href}
              href={localePath(locale, link.href)}
              className="font-body text-[11px] uppercase tracking-[0.18em] text-off-white/60 transition-colors hover:text-pink"
              data-cursor="open"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={privacyHref}
            className="font-body text-[11px] uppercase tracking-[0.18em] text-off-white/60 transition-colors hover:text-pink"
            data-cursor="open"
          >
            {dict.privacy.label}
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          {dict.social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="font-body text-[11px] uppercase tracking-[0.18em] text-off-white/60 transition-colors hover:text-pink"
              data-cursor="open"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2 font-mono text-[11px] tracking-[0.18em]">
            <Link
              href={esHref}
              className={cn(
                locale === "es"
                  ? "text-pink"
                  : "text-off-white/40 hover:text-off-white"
              )}
              hrefLang="es"
            >
              {lang.es}
            </Link>
            <span className="text-off-white/25">/</span>
            <Link
              href={enHref}
              className={cn(
                locale === "en"
                  ? "text-pink"
                  : "text-off-white/40 hover:text-off-white"
              )}
              hrefLang="en"
            >
              {lang.en}
            </Link>
          </div>
        </div>
      </div>

      <div className="section__inner mt-12 flex flex-col gap-2 border-t border-off-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/35 sm:flex-row sm:justify-between">
        <p>{dict.copy}</p>
        <p>{dict.location}</p>
      </div>
    </footer>
  );
}
