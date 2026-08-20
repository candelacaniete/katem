"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
};

export function KatemWindow({
  title,
  children,
  className,
  footer,
  onMouseEnter,
  onMouseLeave,
  style,
}: Props) {
  return (
    <article
      className={cn("katem-window", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      data-cursor="view"
    >
      <div className="katem-window__bar">
        <span className="truncate">{title}</span>
        <span className="katem-window__controls" aria-hidden>
          <span>_</span>
          <span>□</span>
          <span>X</span>
        </span>
      </div>
      <div className="relative">{children}</div>
      {footer ? (
        <div className="flex items-center justify-between gap-3 border-t border-off-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/50">
          {footer}
        </div>
      ) : null}
    </article>
  );
}
