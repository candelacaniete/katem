import { defaultLocale, type Locale } from "@/i18n/config";
import { site } from "@/lib/site";

export const ogLocales: Record<Locale, string> = {
  es: "es_AR",
  en: "en_US",
};

export function localePath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  if (locale === defaultLocale) {
    return normalized || "/";
  }
  return `/en${normalized}`;
}

export function absoluteUrl(locale: Locale, path = ""): string {
  const pathname = localePath(locale, path);
  if (pathname === "/") return site.url;
  return `${site.url}${pathname}`;
}

export function languageAlternates(path = "") {
  return {
    es: absoluteUrl("es", path),
    en: absoluteUrl("en", path),
  };
}
