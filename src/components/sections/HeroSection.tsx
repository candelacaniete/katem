"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { bookingHref } from "@/lib/site";
import { KatemButton } from "@/components/katem/KatemButton";
import { KatemGrid } from "@/components/katem/KatemGrid";
import { KatemWindow } from "@/components/katem/KatemWindow";

type Props = {
  dict: Dictionary["hero"];
};

export function HeroSection({ dict }: Props) {
  const reduce = useReducedMotion();
  const lines = [
    dict.line1,
    <>
      {dict.line2Before}
      <span className="font-accent inline-block origin-bottom -rotate-6 text-[1.18em] leading-none text-pink">
        {dict.line2Accent}
      </span>
    </>,
    dict.line3,
  ];

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      <KatemGrid />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,79,216,0.12),transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(139,92,246,0.1),transparent_40%)]"
      />

      <p className="tech-label absolute left-5 top-28 hidden sm:left-8 lg:left-10 lg:block">
        NODE_07 · BA 34°35&apos;S
      </p>
      <p className="tech-label absolute right-5 top-[40%] hidden lg:block">
        01 / X:234 Y:892
      </p>

      <div className="section relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 lg:justify-center lg:pb-24 lg:pt-32">
        <div className="section__inner grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <h1 id="hero-heading" className="sr-only">
              {dict.line1} {dict.line2Before}
              {dict.line2Accent} {dict.line3}
            </h1>
            <div
              aria-hidden
              className="font-display text-[clamp(2.6rem,8vw,5.6rem)] font-semibold leading-[0.92] tracking-tight"
            >
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, y: 28, filter: "blur(6px)" }
                  }
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.p
              className="mt-6 max-w-md whitespace-pre-line text-base leading-relaxed text-off-white/70 sm:text-lg"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              {dict.sub}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <KatemButton href="#archivo">{dict.ctaPrimary}</KatemButton>
              <KatemButton
                href={bookingHref}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.ctaSecondary}
              </KatemButton>
            </motion.div>
          </div>

          <motion.div
            className="mx-auto w-full max-w-md lg:max-w-none"
            initial={
              reduce ? false : { opacity: 0, scale: 0.92, rotateY: 5 }
            }
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              animate={reduce ? undefined : { y: [-6, 6, -6] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 7, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <KatemWindow
                title={dict.windowTitle}
                className="bg-purple-black/80"
                footer={
                  <>
                    <span className="text-pink">{dict.status}</span>
                    <ClockLabel />
                  </>
                }
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden p-5 sm:aspect-[5/4] sm:p-6 lg:aspect-[4/5]"
                  data-cursor="explore"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,79,216,0.28),transparent_42%),linear-gradient(160deg,#100A16,#070609)]" />
                  <div className="absolute inset-0 opacity-25 mix-blend-overlay katem-grid-bg" />
                  <div className="halftone-layer absolute inset-0" aria-hidden />

                  <div className="relative z-10 flex h-full flex-col">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-pink">
                      {dict.visualLabel}
                    </p>

                    <ul className="mt-8 space-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-off-white/75 sm:text-xs">
                      {dict.systemRows.map((row) => (
                        <li
                          key={row.id}
                          className="flex items-center justify-between gap-4 border-b border-off-white/10 pb-2"
                        >
                          <span>
                            <span className="text-pink">{row.id}</span>{" "}
                            {row.label}
                          </span>
                          <span className="text-pink/80">{row.state}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/45">
                        {dict.signalLabel}
                      </p>
                      <p className="mt-2 font-mono text-xs text-pink sm:text-sm">
                        {dict.signalBar}
                      </p>
                    </div>
                  </div>
                </div>
              </KatemWindow>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ClockLabel() {
  const [label, setLabel] = useState("--:--");

  useEffect(() => {
    const update = () => {
      setLabel(
        new Date().toLocaleTimeString("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return <span>{label}</span>;
}
