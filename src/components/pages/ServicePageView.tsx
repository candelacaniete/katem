"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemButton } from "@/components/katem/KatemButton";
import { KatemLabel } from "@/components/katem/KatemLabel";
import {
  ServiceVisual,
  type ServiceVisualId,
} from "@/components/pages/ServiceVisuals";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ServicePageCopy =
  | Dictionary["pages"]["desarrolloWeb"]
  | Dictionary["pages"]["prospectionB2b"]
  | Dictionary["pages"]["publicidadDigital"]
  | Dictionary["pages"]["automatizaciones"];

type Props = {
  copy: ServicePageCopy;
  visualId: ServiceVisualId;
};

export function ServicePageView({ copy, visualId }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [paraQue, como] = copy.sections;

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;
      gsap.from("[data-service-reveal]", {
        opacity: 0,
        y: 28,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="section section--page relative z-10">
      <div className="section__inner max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <KatemLabel>{copy.label}</KatemLabel>
              <span className="tech-label text-pink/70">STATUS · ONLINE</span>
            </div>

            <h1 className="section__title mt-4 whitespace-pre-line">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-off-white/75 sm:mt-6 sm:text-lg">
              {copy.lead}
            </p>
          </div>

          <ServiceVisual id={visualId} copy={copy.visual} className="mt-0 max-w-none" />
        </div>

        <div className="mt-14 grid gap-8 border-t border-off-white/10 pt-10 lg:mt-16 lg:grid-cols-3 lg:gap-8 lg:pt-12">
          {[paraQue, como].map((section, index) => (
            <section key={section.title} data-service-reveal>
              <div className="flex items-baseline gap-3">
                <span className="tech-label text-pink/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-xl font-semibold tracking-tight text-off-white sm:text-2xl">
                  {section.title}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-off-white/65 sm:mt-4 sm:text-base">
                {section.body}
              </p>
            </section>
          ))}

          <aside
            data-service-reveal
            className="flex flex-col justify-between gap-6 border border-off-white/10 bg-off-white/[0.02] p-5 sm:p-6"
          >
            <div>
              <p className="tech-label text-pink/80">NEXT · STEP</p>
              <p className="mt-3 font-display text-lg font-semibold tracking-tight text-off-white sm:text-xl">
                {copy.cta.replace(" →", "")}
              </p>
            </div>
            <KatemButton
              href={copy.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              {copy.cta}
            </KatemButton>
          </aside>
        </div>

        <div
          data-service-reveal
          className="mt-12 border-t border-off-white/10 pt-8 sm:mt-14"
        >
          <p className="tech-label">{copy.benefits.label}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {copy.benefits.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-l border-pink/40 pl-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.1em] text-off-white/70"
              >
                <span className="text-pink" aria-hidden>
                  ▸
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          data-service-reveal
          className="mt-12 border-t border-off-white/10 pt-8 sm:mt-14"
        >
          <p className="tech-label">{copy.deliverables.label}</p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {copy.deliverables.items.map((item) => (
              <li key={item} className="deliverable-item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {"faq" in copy && copy.faq ? (
          <div
            data-service-reveal
            className="mt-12 border-t border-off-white/10 pt-8 sm:mt-14"
          >
            <p className="tech-label">{copy.faq.label}</p>
            <div className="mt-5 space-y-5">
              {copy.faq.items.map((item) => (
                <div key={item.question}>
                  <h3 className="font-display text-base font-semibold tracking-tight text-off-white sm:text-lg">
                    {item.question}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-off-white/65 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
