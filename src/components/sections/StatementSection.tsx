"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemGrid } from "@/components/katem/KatemGrid";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  dict: Dictionary["statement"];
};

export function StatementSection({ dict }: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const blocks = gsap.utils.toArray<HTMLElement>("[data-statement-block]");

      blocks.forEach((block) => {
        const words = block.querySelectorAll("[data-word]");
        if (reduce) {
          gsap.set(words, { opacity: 1, y: 0, clipPath: "none" });
          return;
        }
        gsap.fromTo(
          words,
          { opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0 0 0)",
            duration: 0.85,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
              end: "bottom 40%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="statement"
      className="relative overflow-hidden bg-black"
      aria-label="Manifesto"
    >
      <KatemGrid className="opacity-40" speed={0.05} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(139,92,246,0.12),transparent_55%)]"
      />

      <div className="section relative z-10 space-y-28 py-28 sm:space-y-36 sm:py-36">
        {dict.blocks.map((block, i) => (
          <div
            key={i}
            data-statement-block
            className="section__inner font-display text-[clamp(2.4rem,9vw,6.5rem)] font-semibold leading-[0.92] tracking-tight"
          >
            {block.map((word) => (
              <p key={word} className="overflow-hidden">
                <span data-word className="inline-block">
                  {word}
                </span>
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
