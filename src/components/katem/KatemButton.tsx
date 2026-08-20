"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "ghost";
  children: ReactNode;
};

export function KatemButton({
  variant = "primary",
  className,
  children,
  ...props
}: Props) {
  return (
    <a
      className={cn(
        "btn",
        variant === "primary" ? "btn--primary" : "btn--ghost",
        className
      )}
      data-cursor="enter"
      {...props}
    >
      {children}
    </a>
  );
}
