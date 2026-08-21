import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  frame?: "beige" | "rose";
  label?: string;
};

/** Retro CRT / portable TV bezel — matte, no glow. */
export function RetroCrt({
  children,
  className,
  frame = "beige",
  label = "KATEM_TV",
}: Props) {
  return (
    <div
      className={cn(
        "retro-crt",
        frame === "beige" ? "retro-crt--beige" : "retro-crt--rose",
        className
      )}
      data-cursor="explore"
    >
      <div className="retro-crt__shell">
        <div className="retro-crt__screen-wrap">
          <div className="retro-crt__screen">{children}</div>
        </div>
        <aside className="retro-crt__panel" aria-hidden>
          <div className="retro-crt__grille" />
          <div className="retro-crt__knob" />
          <div className="retro-crt__ridges" />
        </aside>
      </div>
      <p className="retro-crt__tag">{label}</p>
    </div>
  );
}
