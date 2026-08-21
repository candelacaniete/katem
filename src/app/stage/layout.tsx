import type { Metadata } from "next";
import { Allura, Imperial_Script, Pinyon_Script } from "next/font/google";

const accentPinyon = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-accent-pinyon",
  display: "swap",
  weight: "400",
});

const accentAllura = Allura({
  subsets: ["latin"],
  variable: "--font-accent-allura",
  display: "swap",
  weight: "400",
});

const accentImperial = Imperial_Script({
  subsets: ["latin"],
  variable: "--font-accent-imperial",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Visual stage — grain + accent type",
  robots: { index: false, follow: false },
};

export default function StageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        accentPinyon.variable,
        accentAllura.variable,
        accentImperial.variable,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
