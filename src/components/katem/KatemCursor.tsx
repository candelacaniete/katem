"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";

type Props = {
  labels: Dictionary["cursor"];
};

/** Pixel OS cursors (arrow + hand) — matte, no glow. */
export function KatemCursor({ labels }: Props) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [pointer, setPointer] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor]"
      ) as HTMLElement | null;
      if (!el) {
        setPointer(false);
        setLabel("");
        return;
      }
      const kind = el.dataset.cursor;
      setPointer(true);
      if (kind === "enter") setLabel(labels.enter);
      else if (kind === "view") setLabel(labels.view);
      else if (kind === "explore") setLabel(labels.explore);
      else setLabel(labels.open);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [labels]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[80]"
      >
        {pointer ? <PixelHand /> : <PixelArrow />}
      </div>
      <div
        ref={labelRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[80] translate-x-5 -translate-y-6 font-mono text-[10px] tracking-[0.16em] text-rose ${
          pointer && label ? "opacity-100" : "opacity-0"
        }`}
      >
        {label}
      </div>
    </>
  );
}

function PixelArrow() {
  return (
    <svg width="18" height="22" viewBox="0 0 11 16" shapeRendering="crispEdges">
      <path
        fill="#F2EBE6"
        stroke="#121212"
        strokeWidth="1"
        d="M1 1 V14 L4 11 H7 L1 1 Z"
      />
      <path fill="#C97B8F" d="M2 3 V10 L3 9 H5 L2 3 Z" opacity="0.85" />
    </svg>
  );
}

function PixelHand() {
  return (
    <svg width="20" height="22" viewBox="0 0 12 16" shapeRendering="crispEdges">
      <path
        fill="#F2EBE6"
        stroke="#121212"
        strokeWidth="1"
        d="M4 1 V6 H3 V4 H2 V8 H1 V13 H10 V8 H9 V5 H8 V7 H7 V2 H6 V7 H5 V1 Z"
      />
    </svg>
  );
}
