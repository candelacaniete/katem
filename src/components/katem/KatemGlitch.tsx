"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  active?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function KatemGlitch({ active, className, children }: Props) {
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (!active) return;
    setRun(true);
    const id = window.setTimeout(() => setRun(false), 240);
    return () => window.clearTimeout(id);
  }, [active]);

  return (
    <span className={cn(run && "glitch-once", className)}>{children}</span>
  );
}
