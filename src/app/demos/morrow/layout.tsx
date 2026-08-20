import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import { MorrowCartProvider } from "@/components/demos/morrow/CartContext";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-morrow-display",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "MORROW — Objects",
    template: "%s · MORROW",
  },
  description:
    "Thoughtfully designed objects for everyday rituals. Ecommerce demo by Katem.",
};

export default function MorrowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${display.variable} font-[family-name:var(--font-morrow-display)]`}>
      <MorrowCartProvider>{children}</MorrowCartProvider>
    </div>
  );
}
