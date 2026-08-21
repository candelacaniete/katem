import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  tone?: "light" | "dark" | "pink";
};

export function DemoBackToKatem({ className, tone = "dark" }: Props) {
  const tones = {
    dark: "text-white/50 hover:text-white border-white/20 hover:border-white/50",
    light: "text-black/45 hover:text-black border-black/15 hover:border-black/40",
    pink: "text-black/45 hover:text-black border-black/10 hover:border-black/30",
  };

  return (
    <Link
      href="/#archivo"
      className={cn(
        "fixed left-4 top-4 z-50 inline-flex items-center gap-2 border bg-transparent px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-md transition-colors sm:left-6 sm:top-6",
        tones[tone],
        className
      )}
    >
      ← Katem
    </Link>
  );
}
