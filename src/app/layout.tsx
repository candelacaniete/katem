import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://katem.com.ar"),
  title: {
    default: "KATEM® — Estudio digital boutique",
    template: "%s · KATEM®",
  },
  description:
    "Diseñamos experiencias digitales para marcas que quieren ser recordadas. Estudio independiente en Buenos Aires.",
  openGraph: {
    title: "KATEM® — Estudio digital boutique",
    description:
      "Experiencias digitales con criterio, identidad y tecnología. Buenos Aires / Mundo.",
    url: "https://katem.com.ar",
    siteName: "Katem",
    locale: "es_AR",
    type: "website",
  },
  alternates: {
    canonical: "https://katem.com.ar",
    languages: {
      es: "https://katem.com.ar",
      en: "https://katem.com.ar/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-black text-off-white`}
      >
        {children}
      </body>
    </html>
  );
}
