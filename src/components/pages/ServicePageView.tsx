"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemButton } from "@/components/katem/KatemButton";
import { KatemLabel } from "@/components/katem/KatemLabel";
import { ServiceFaq } from "@/components/pages/ServiceFaq";
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
        y: 24,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="section section--page relative z-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(70vh,40rem)] service-hero-texture"
      />

      <div className="section__inner relative z-10 max-w-6xl">
        {/* title | terminal */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0">
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

          <div className="relative z-0 min-w-0 w-full max-w-[20rem] justify-self-start overflow-hidden lg:justify-self-end lg:max-w-[18rem] xl:max-w-[20rem]">
            <ServiceVisual
              id={visualId}
              copy={copy.visual}
              className="mt-0 w-full max-w-full"
            />
          </div>
        </div>

        {/* info | info */}
        <div
          data-service-reveal
          className="mt-14 grid gap-8 border-t border-off-white/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:gap-12 lg:pt-12"
        >
          {[paraQue, como].map((section, index) => (
            <section key={section.title}>
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
        </div>

        {/* mid cta — own row */}
        <div data-service-reveal className="mt-10 sm:mt-12">
          <KatemButton
            href={copy.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            {copy.cta}
          </KatemButton>
        </div>

        {/* info blocks */}
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

        {/* whatsapp cta */}
        <div
          data-service-reveal
          className="mt-12 flex flex-col items-start gap-4 border border-off-white/10 bg-off-white/[0.02] p-5 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div>
            <p className="tech-label text-pink/80">WHATSAPP · DIRECT</p>
            <p className="mt-2 font-display text-lg font-semibold tracking-tight text-off-white sm:text-xl">
              {copy.whatsappCta.replace(" →", "")}
            </p>
          </div>
          <KatemButton
            href={copy.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            {copy.whatsappCta}
          </KatemButton>
        </div>

        {/* faq accordion */}
        <div
          data-service-reveal
          className="mt-12 border-t border-off-white/10 pt-8 sm:mt-14"
        >
          <ServiceFaq label={copy.faq.label} items={copy.faq.items} />
        </div>
      </div>
    </div>
  );
}
