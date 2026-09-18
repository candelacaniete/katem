import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { ContactPageView } from "@/components/pages/ContactPageView";
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
  const copy = dict.pages.contacto;
  return buildPageMetadata({
    locale,
    path: siteRoutes.contacto,
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function ContactoPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <SiteShell dict={dict} locale={locale}>
      <ContactPageView copy={dict.pages.contacto} />
    </SiteShell>
  );
}
