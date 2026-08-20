"use client";

import { useEffect, useRef } from "react";

/** Subtle mouse-follow glow — desktop only. */
export function KatemMouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) {
      el.style.display = "none";
      return;
    }

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - 220}px, ${e.clientY - 220}px, 0)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[440px] w-[440px] rounded-full opacity-40 mix-blend-screen will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(255,79,216,0.14) 0%, rgba(139,92,246,0.08) 38%, transparent 70%)",
      }}
    />
  );
}
