"use client";

import { useMemo, useRef } from "react";
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

function formatListAnswer(items: string[]) {
  return items.map((item) => `▸ ${item}`).join("\n");
}

export function ServicePageView({ copy, visualId }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [paraQue, como] = copy.sections;

  const faqItems = useMemo(
    () => [
      {
        question: copy.benefits.faqQuestion,
        answer: formatListAnswer(copy.benefits.items),
      },
      {
        question: copy.deliverables.faqQuestion,
        answer: formatListAnswer(copy.deliverables.items),
      },
      ...copy.faq.items,
    ],
    [copy.benefits, copy.deliverables, copy.faq.items]
  );

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;
      gsap.from("[data-service-reveal]", {
        opacity: 0,
        y: 18,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 82%",
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
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(78vh,48rem)] service-hero-texture"
      />

      <div className="section__inner relative z-10">
        {/* title | terminal — 50 / 50 */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="flex min-w-0 flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3">
              <KatemLabel>{copy.label}</KatemLabel>
              <span className="tech-label text-pink/70">STATUS · ONLINE</span>
            </div>

            <h1 className="section__title mt-4 whitespace-pre-line">
              {copy.title}
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-off-white/75 sm:mt-5 sm:text-lg">
              {copy.lead}
            </p>
          </div>

          <div className="flex min-w-0 w-full items-center">
            <ServiceVisual
              id={visualId}
              copy={copy.visual}
              className="mt-0 w-full"
            />
          </div>
        </div>

        {/* para qué | cómo */}
        <div
          data-service-reveal
          className="mt-10 border-t border-off-white/10 pt-8 sm:mt-12 sm:pt-9"
        >
          <div className="grid gap-7 sm:grid-cols-2 lg:gap-10">
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
                <p className="mt-2.5 text-sm leading-relaxed text-off-white/65 sm:text-base">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>

        {/* whatsapp */}
        <div
          data-service-reveal
          className="mt-9 flex flex-col items-start gap-3 border border-off-white/10 bg-off-white/[0.02] px-5 py-4 sm:mt-11 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5"
        >
          <div>
            <p className="tech-label text-pink/80">WHATSAPP · DIRECT</p>
            <p className="mt-1.5 font-display text-lg font-semibold tracking-tight text-off-white sm:text-xl">
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

        {/* faq — includes benefits + deliverables */}
        <div
          data-service-reveal
          className="mt-9 border-t border-off-white/10 pt-8 sm:mt-11"
        >
          <ServiceFaq label={copy.faq.label} items={faqItems} />
        </div>
      </div>
    </div>
  );
}
