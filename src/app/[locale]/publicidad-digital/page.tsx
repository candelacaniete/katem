import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { ServicePageView } from "@/components/pages/ServicePageView";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/page-meta";
import { siteRoutes } from "@/lib/routes";

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
  const copy = dict.pages.publicidadDigital;
  return buildPageMetadata({
    locale,
    path: siteRoutes.publicidadDigital,
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function Page({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <SiteShell dict={dict} locale={locale}>
      <ServicePageView copy={dict.pages.publicidadDigital} />
    </SiteShell>
  );
}
