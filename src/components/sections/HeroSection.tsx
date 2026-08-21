"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { bookingHref } from "@/lib/site";
import { KatemButton } from "@/components/katem/KatemButton";
import { KatemGrid } from "@/components/katem/KatemGrid";
import { KatemWindow } from "@/components/katem/KatemWindow";
import { RetroCrt } from "@/components/katem/RetroCrt";

type Props = {
  dict: Dictionary["hero"];
};

export function HeroSection({ dict }: Props) {
  const reduce = useReducedMotion();
  const lines = [
    dict.line1,
    <>
      {dict.line2Before}
      <span className="font-accent inline-block origin-bottom -rotate-6 text-[1.18em] leading-none text-rose">
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_15%,rgba(212,160,174,0.12),transparent_50%)]"
      />

      <p className="tech-label absolute left-5 top-28 hidden sm:left-8 lg:left-10 lg:block">
        NODE_07 · BA 34°35&apos;S
      </p>

      <div className="section relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 lg:justify-center lg:pb-24 lg:pt-32">
        <div className="section__inner grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
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
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.12 + i * 0.1,
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
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {dict.sub}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <KatemButton href="#archivo">{dict.ctaPrimary}</KatemButton>
              <KatemButton href={bookingHref} target="_blank" rel="noreferrer">
                {dict.ctaSecondary}
              </KatemButton>
            </motion.div>
          </div>

          <motion.div
            className="mx-auto w-full max-w-md lg:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <RetroCrt frame="beige" label="KATEM_CRT.exe">
              <KatemWindow
                title={dict.windowTitle}
                variant="dark"
                className="h-full border-0 shadow-none"
                footer={
                  <>
                    <span className="text-rose">{dict.status}</span>
                    <ClockLabel />
                  </>
                }
              >
                <div className="relative min-h-[18rem] p-4 sm:min-h-[20rem] sm:p-5">
                  <div className="halftone-layer absolute inset-0" aria-hidden />
                  <div className="relative z-10 flex h-full flex-col">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose">
                      {dict.visualLabel}
                    </p>
                    <ul className="mt-6 space-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-off-white/75">
                      {dict.systemRows.map((row) => (
                        <li
                          key={row.id}
                          className="flex items-center justify-between gap-3 border-b border-off-white/10 pb-2"
                        >
                          <span>
                            <span className="text-rose">{row.id}</span>{" "}
                            {row.label}
                          </span>
                          <span className="text-rose/90">{row.state}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/40">
                        {dict.signalLabel}
                      </p>
                      <p className="mt-2 font-mono text-xs text-rose">
                        {dict.signalBar}
                      </p>
                    </div>
                  </div>
                </div>
              </KatemWindow>
            </RetroCrt>
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
