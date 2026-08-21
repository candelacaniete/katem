"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";

type Props = {
  copy: Dictionary["boot"];
  skipLabel: string;
  onDone: () => void;
};

const STORAGE_KEY = "katem-boot-seen";

export function KatemBoot({ copy, skipLabel, onDone }: Props) {
  const [visible, setVisible] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") {
        onDone();
        return;
      }
    } catch {
      // ignore
    }
    setVisible(true);
  }, [onDone]);

  useEffect(() => {
    if (!visible) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      finish();
      return;
    }

    const total = 2000;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / total);
      setProgress(Math.round(t * 100));
      setLineIndex(Math.min(copy.lines.length - 1, Math.floor(t * copy.lines.length)));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        window.setTimeout(finish, 280);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const finish = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setVisible(false);
    onDone();
  };

  if (!visible) return null;

  const bars = Math.max(1, Math.round(progress / 5));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black px-6"
      role="dialog"
      aria-label="Introducción Katem"
    >
      <div className="w-full max-w-md font-mono text-sm text-off-white/85">
        <p className="font-display text-3xl font-semibold tracking-tight text-off-white">
          {copy.brand}
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-pink">
          {copy.studio}
        </p>
        <div className="mt-8 space-y-2 text-[12px] text-off-white/60">
          {copy.lines.slice(0, lineIndex + 1).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-6 text-pink">
          {"█".repeat(bars)}
          <span className="text-off-white/25">{"░".repeat(20 - bars)}</span>{" "}
          {progress}%
        </p>
        {progress >= 100 ? (
          <p className="mt-4 text-off-white glitch-once">{copy.welcome}</p>
        ) : null}
        <button
          type="button"
          onClick={finish}
          className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-off-white/45 underline-offset-4 hover:text-pink hover:underline"
        >
          {skipLabel}
        </button>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 2px, #fff 2px, #fff 3px)",
        }}
      />
    </div>
  );
}
