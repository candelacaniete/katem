"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemLabel } from "@/components/katem/KatemLabel";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  dict: Dictionary["metodo"];
};

export function MetodoSection({ dict }: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
      const progress = root.current?.querySelector(
        "[data-progress]"
      ) as HTMLElement | null;

      if (reduce) {
        steps.forEach((s) => s.classList.add("is-active"));
        if (progress) progress.style.transform = "scaleX(1)";
        return;
      }

      steps.forEach((step) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 70%",
          end: "bottom 40%",
          onEnter: () => step.classList.add("is-active"),
          onEnterBack: () => step.classList.add("is-active"),
          onLeave: () => step.classList.remove("is-active"),
          onLeaveBack: () => step.classList.remove("is-active"),
        });
      });

      if (progress) {
        gsap.fromTo(
          progress,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 60%",
              end: "bottom 35%",
              scrub: true,
            },
          }
        );
      }
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="metodo"
      className="section relative overflow-hidden bg-purple-black"
      aria-labelledby="metodo-heading"
    >
      <div className="section__inner">
        <KatemLabel>{dict.label}</KatemLabel>
        <h2 id="metodo-heading" className="section__title">
          {dict.title}
        </h2>

        <div className="relative mt-10 h-px w-full bg-off-white/10">
          <div
            data-progress
            className="absolute inset-y-0 left-0 origin-left bg-pink"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        <ol className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-4">
          {dict.steps.map((step) => (
            <li
              key={step.id}
              data-step
              className="step-item border-t border-off-white/15 pt-5 opacity-35 scale-[0.96] transition-all duration-500 [&.is-active]:opacity-100 [&.is-active]:scale-100"
            >
              <p className="step-num font-mono text-xs text-off-white/40 transition-colors duration-300">
                {step.id}
              </p>
              <h3 className="step-title mt-3 font-display text-xl font-semibold text-off-white/65 transition-colors duration-300">
                {step.title}
              </h3>
              <div className="step-line mt-3 h-px w-8 bg-off-white/20 transition-all duration-500" />
              <p className="mt-4 text-sm leading-relaxed text-off-white/45">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
