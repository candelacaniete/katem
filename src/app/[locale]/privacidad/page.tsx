import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KatemLabel } from "@/components/katem/KatemLabel";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { absoluteUrl, languageAlternates, localePath, ogLocales } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const url = absoluteUrl(locale, "/privacidad");

  return {
    title: dict.privacy.meta.title,
    description: dict.privacy.meta.description,
    alternates: {
      canonical: url,
      languages: languageAlternates("/privacidad"),
    },
    openGraph: {
      title: dict.privacy.meta.title,
      description: dict.privacy.meta.description,
      url,
      siteName: site.name,
      locale: ogLocales[locale],
      type: "website",
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const homeHref = localePath(locale);
  const copy = dict.privacy;

  return (
    <div className="site-shell">
      <div className="grain-overlay" aria-hidden />
      <header className="border-b border-off-white/10 px-5 py-6 sm:px-8 lg:px-10">
        <div className="section__inner flex items-center justify-between gap-4">
          <Link
            href={homeHref}
            className="font-display text-lg font-semibold tracking-tight text-off-white"
            data-cursor="open"
          >
            {site.brand}
          </Link>
          <Link
            href={homeHref}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/50 transition-colors hover:text-pink"
            data-cursor="open"
          >
            {copy.back}
          </Link>
        </div>
      </header>

      <main className="section relative z-10">
        <div className="section__inner max-w-3xl">
          <KatemLabel>{copy.label}</KatemLabel>
          <h1 className="section__title">{copy.title}</h1>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-off-white/40">
            {copy.updated}
          </p>
          <p className="mt-8 text-base leading-relaxed text-off-white/75">
            {copy.intro}
          </p>

          <div className="mt-12 space-y-10">
            {copy.sections.map((section) => (
              <section key={section.title} className="border-t border-off-white/10 pt-6">
                <h2 className="font-display text-xl font-semibold tracking-tight text-off-white sm:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-off-white/65 sm:text-base">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-14 font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/35">
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-pink"
              data-cursor="open"
            >
              {site.email}
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
