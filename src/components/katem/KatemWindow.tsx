"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  footer?: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: CSSProperties;
  variant?: "classic" | "dark";
};

export function KatemWindow({
  title,
  children,
  className,
  bodyClassName,
  footer,
  onMouseEnter,
  onMouseLeave,
  style,
  variant = "classic",
}: Props) {
  const classic = variant === "classic";

  return (
    <article
      className={cn(
        "os-window",
        classic ? "os-window--classic" : "os-window--dark",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      data-cursor="view"
    >
      <div className={cn("os-window__bar", classic && "os-window__bar--navy")}>
        <span className="truncate">{title}</span>
        <span className="os-window__controls" aria-hidden>
          <span className="os-window__ctrl">_</span>
          <span className="os-window__ctrl">□</span>
          <span className="os-window__ctrl">X</span>
        </span>
      </div>
      <div className={cn("relative", bodyClassName)}>{children}</div>
      {footer ? (
        <div
          className={cn(
            "flex items-center justify-between gap-3 border-t px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em]",
            classic
              ? "border-win-shadow/40 bg-ui-gray text-win-dark"
              : "border-off-white/10 bg-black/40 text-off-white/50"
          )}
        >
          {footer}
        </div>
      ) : null}
    </article>
  );
}
