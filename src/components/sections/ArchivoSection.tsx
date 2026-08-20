"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemLabel } from "@/components/katem/KatemLabel";
import { KatemWindow } from "@/components/katem/KatemWindow";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  dict: Dictionary["archivo"];
};

const offsets = ["lg:mt-0 lg:ml-0", "lg:mt-12 lg:ml-4", "lg:mt-6 lg:-ml-2"];

const accents = [
  "from-[#FF4FD8]/50 via-[#F5D0D8]/20 to-transparent",
  "from-[#C4B5A0]/40 via-[#1A171D] to-transparent",
  "from-[#8B7355]/45 via-[#2A2420] to-transparent",
];

export function ArchivoSection({ dict }: Props) {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const cards = gsap.utils.toArray<HTMLElement>("[data-project]");
      cards.forEach((card, i) => {
        if (reduce) return;
        gsap.from(card, {
          opacity: 0,
          y: 80 + (i % 2) * 20,
          rotate: i % 2 === 0 ? -2 : 2,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="archivo"
      className="section relative overflow-hidden bg-black"
      aria-labelledby="archivo-heading"
    >
      <div className="section__inner">
        <KatemLabel>{dict.label}</KatemLabel>
        <h2 id="archivo-heading" className="section__title">
          {dict.title}
        </h2>

        <ul className="mt-6 space-y-1 font-mono text-xs text-off-white/45 sm:hidden">
          {dict.projects.map((p) => (
            <li key={p.id}>
              {p.id} {p.title}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dict.projects.map((project, i) => {
            const isActive = active === project.id;
            const dimmed = active !== null && !isActive;
            const isExternal = Boolean(
              "external" in project ? project.external : true
            );

            const media = (
              <div className="group block aspect-[5/4] overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-transform duration-[1200ms] ease-katem group-hover:scale-105",
                    accents[i]
                  )}
                />
                <div className="absolute inset-0 katem-grid-bg opacity-40" />
                <div className="absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-300 group-hover:opacity-40 bg-[linear-gradient(90deg,rgba(255,0,80,0.25),transparent_40%,rgba(0,200,255,0.2))]" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <p className="font-mono text-[10px] text-off-white/50">
                    ARCHIVE_{project.id}.EXE
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-off-white">
                    {project.title}
                  </p>
                  {"subtitle" in project && project.subtitle ? (
                    <p className="mt-1 text-xs text-off-white/55">
                      {project.subtitle}
                    </p>
                  ) : null}
                </div>
              </div>
            );

            return (
              <div
                key={project.id}
                data-project
                className={cn(
                  "transition-[opacity,filter,transform] duration-300",
                  offsets[i],
                  dimmed && "opacity-40 grayscale-[0.35]",
                  isActive && "relative z-20 scale-[1.02]"
                )}
              >
                <KatemWindow
                  title={`ARCHIVE_${project.id}.EXE`}
                  className={cn(
                    "transition-shadow duration-300",
                    isActive && "shadow-glow-pink"
                  )}
                  onMouseEnter={() => setActive(project.id)}
                  onMouseLeave={() => setActive(null)}
                  footer={
                    <>
                      <span className={cn(isActive && "text-pink")}>
                        {project.tags}
                      </span>
                      {isExternal ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-off-white/70 transition-colors hover:text-pink"
                          data-cursor="view"
                        >
                          {dict.view}
                        </a>
                      ) : (
                        <Link
                          href={project.href}
                          className="text-off-white/70 transition-colors hover:text-pink"
                          data-cursor="view"
                        >
                          {dict.view}
                        </Link>
                      )}
                    </>
                  }
                >
                  {isExternal ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block"
                      data-cursor="view"
                    >
                      {media}
                    </a>
                  ) : (
                    <Link
                      href={project.href}
                      className="relative block"
                      data-cursor="view"
                    >
                      {media}
                    </Link>
                  )}
                </KatemWindow>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
