import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { ArchivoSection } from "@/components/sections/ArchivoSection";
import { KatemLabel } from "@/components/katem/KatemLabel";
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
  const copy = dict.pages.proyectos;
  return buildPageMetadata({
    locale,
    path: siteRoutes.proyectos,
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function ProyectosPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const copy = dict.pages.proyectos;

  return (
    <SiteShell dict={dict} locale={locale}>
      <div className="section pb-0">
        <div className="section__inner max-w-3xl">
          <KatemLabel>{copy.label}</KatemLabel>
          <h1 className="section__title">{copy.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-off-white/75">
            {copy.lead}
          </p>
        </div>
      </div>
      <ArchivoSection dict={dict.archivo} />
    </SiteShell>
  );
}
