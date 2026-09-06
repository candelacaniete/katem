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

    const total = 1800;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / total);
      setProgress(Math.round(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        window.setTimeout(finish, 320);
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

  const blocks = Math.max(1, Math.round(progress / 5));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6"
      role="dialog"
      aria-label="Introducción Katem"
    >
      <div className="os-window os-window--classic w-full max-w-sm">
        <div className="os-window__bar os-window__bar--rose">
          <span>KATEM_OS.exe</span>
          <span className="os-window__controls" aria-hidden>
            <span className="os-window__ctrl">X</span>
          </span>
        </div>
        <div className="space-y-4 bg-[#E8D4DA] p-4 text-win-dark">
          <p className="text-center font-mono text-sm text-win-dark">
            {copy.lines[0] ?? "Loading..."}
          </p>
          <div className="os-progress" aria-hidden>
            {Array.from({ length: blocks }).map((_, i) => (
              <span key={i} className="os-progress__block os-progress__block--rose" />
            ))}
          </div>
          <p className="text-center font-mono text-[11px] text-win-dark/80">
            {copy.brand} · {progress}%
          </p>
          <div className="flex justify-center gap-2 pt-1">
            <button type="button" disabled className="os-btn opacity-50">
              Done
            </button>
            <button type="button" onClick={finish} className="os-btn">
              {skipLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
