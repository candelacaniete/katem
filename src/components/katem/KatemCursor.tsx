"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";

type Props = {
  labels: Dictionary["cursor"];
};

export function KatemCursor({ labels }: Props) {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.22;
      pos.current.y += (target.current.y - pos.current.y) * 0.22;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor]"
      ) as HTMLElement | null;
      if (!el) {
        setActive(false);
        setLabel("");
        return;
      }
      const kind = el.dataset.cursor;
      setActive(true);
      if (kind === "enter") setLabel(labels.enter);
      else if (kind === "view") setLabel(labels.view);
      else if (kind === "explore") setLabel(labels.explore);
      else setLabel(labels.open);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [labels]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[80] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink mix-blend-difference transition-transform duration-200 ${
          active ? "scale-[2.4]" : "scale-100"
        }`}
      />
      <div
        ref={labelRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[80] -translate-x-1/2 -translate-y-[220%] font-mono text-[10px] tracking-[0.2em] text-pink transition-opacity duration-200 ${
          active && label ? "opacity-100" : "opacity-0"
        }`}
      >
        {label}
      </div>
    </>
  );
}
