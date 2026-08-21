"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "ghost" | "os";
  children: ReactNode;
};

export function KatemButton({
  variant = "os",
  className,
  children,
  ...props
}: Props) {
  return (
    <a
      className={cn(
        variant === "os" && "os-btn",
        variant === "primary" && "os-btn",
        variant === "ghost" && "btn btn--ghost",
        className
      )}
      data-cursor="enter"
      {...props}
    >
      {children}
    </a>
  );
}
