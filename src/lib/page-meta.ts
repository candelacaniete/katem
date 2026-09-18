import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { absoluteUrl, languageAlternates, ogLocales } from "@/lib/seo";
import { site } from "@/lib/site";

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = absoluteUrl(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: ogLocales[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
