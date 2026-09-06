import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
};

/** Arcade cabinet frame — matte bubblegum pink, no neon. */
export function ArcadeCabinet({
  children,
  className,
  title = "KATEM",
  subtitle = "HI-SCORE",
}: Props) {
  return (
    <div className={cn("arcade", className)} data-cursor="explore">
      <div className="arcade__marquee">
        <span className="arcade__star" aria-hidden>
          ★
        </span>
        <span className="arcade__title">{title}</span>
        <span className="arcade__sub">{subtitle}</span>
      </div>

      <div className="arcade__bezel">
        <div className="arcade__screen">{children}</div>
      </div>

      <div className="arcade__controls" aria-hidden>
        <div className="arcade__stick" />
        <div className="arcade__buttons">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="arcade__stick" />
      </div>

      <div className="arcade__grille" aria-hidden />
    </div>
  );
}
