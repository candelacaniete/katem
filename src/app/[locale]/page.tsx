import { notFound } from "next/navigation";
import { HomeExperience } from "@/components/HomeExperience";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function LocaleHomePage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return <HomeExperience dict={dict} locale={locale} />;
}
