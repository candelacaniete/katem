import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  Syne,
  DM_Sans,
  JetBrains_Mono,
  Bagel_Fat_One,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { defaultLocale, isLocale } from "@/i18n/config";
import { site } from "@/lib/site";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const accent = Bagel_Fat_One({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "KATEM® — Estudio digital boutique",
    template: "%s · KATEM®",
  },
  description:
    "Diseñamos experiencias digitales para marcas que quieren ser recordadas. Estudio independiente en Buenos Aires.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "design",
  keywords: [
    "Katem",
    "estudio digital",
    "diseño web",
    "Buenos Aires",
    "experiencias digitales",
    "estrategia digital",
    "ecommerce",
  ],
  openGraph: {
    title: "KATEM® — Estudio digital boutique",
    description:
      "Experiencias digitales con criterio, identidad y tecnología. Buenos Aires / Mundo.",
    url: site.url,
    siteName: site.name,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KATEM® — Estudio digital boutique",
    description:
      "Experiencias digitales con criterio, identidad y tecnología. Buenos Aires / Mundo.",
  },
  alternates: {
    canonical: site.url,
    languages: {
      es: site.url,
      en: `${site.url}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

function resolveHtmlLang() {
  const headerLocale = headers().get("x-locale");
  if (headerLocale && isLocale(headerLocale)) return headerLocale;
  return defaultLocale;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = resolveHtmlLang();

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} ${accent.variable} font-body bg-black text-off-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
