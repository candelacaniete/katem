"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { ArchiveBotDemo } from "@/components/archivo/ArchiveBotDemo";
import { ArcadeCabinet } from "@/components/katem/ArcadeCabinet";
import { KatemLabel } from "@/components/katem/KatemLabel";
import { KatemWindow } from "@/components/katem/KatemWindow";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  dict: Dictionary["archivo"];
};

type Project = Dictionary["archivo"]["projects"][number];

export function ArchivoSection({ dict }: Props) {
  const root = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [botOpen, setBotOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const cards = gsap.utils.toArray<HTMLElement>("[data-project]");
      cards.forEach((card) => {
        if (reduce) return;
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: root }
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const cards = Array.from(
        track.querySelectorAll<HTMLElement>("[data-project]")
      );
      if (!cards.length) return;
      const left = track.scrollLeft;
      let nearest = 0;
      let best = Number.POSITIVE_INFINITY;
      cards.forEach((card, index) => {
        const dist = Math.abs(card.offsetLeft - left);
        if (dist < best) {
          best = dist;
          nearest = index;
        }
      });
      setSlide(nearest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const track = trackRef.current;
    const card = track?.querySelectorAll<HTMLElement>("[data-project]")[index];
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  const renderMedia = (project: Project) => (
    <div className="group relative block aspect-[5/4] overflow-hidden bg-screen">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover contrast-[1.05] grayscale-[0.15] transition-transform duration-[1200ms] ease-katem group-hover:scale-105"
        sizes="(max-width: 768px) 85vw, 50vw"
      />
      <div className="halftone-layer absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/80">
        {project.kind === "bot" ? dict.kindBot : dict.kindWeb}
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <p className="font-mono text-[10px] text-off-white/50">
          ARCHIVE_{project.id}.EXE
        </p>
        <p className="mt-1 font-display text-xl font-semibold text-off-white">
          {project.title}
        </p>
        <p className="mt-1 text-xs text-off-white/55">{project.subtitle}</p>
      </div>
    </div>
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

        <ArcadeCabinet
          className="mt-10"
          title="KATEM ARCADE"
          subtitle="SELECT GAME"
        >
          <div
            ref={trackRef}
            className="archivo-track flex snap-x snap-mandatory gap-3 overflow-x-auto p-3 md:grid md:grid-cols-2 md:gap-3 md:overflow-visible"
          >
            {dict.projects.map((project) => {
              const isActive = active === project.id;
              const dimmed = active !== null && !isActive;
              const isBot = project.kind === "bot";

              return (
                <div
                  key={project.id}
                  data-project
                  className={cn(
                    "w-[82%] shrink-0 snap-start transition-opacity duration-300 md:w-auto md:shrink",
                    dimmed && "opacity-45"
                  )}
                >
                  <KatemWindow
                    title={`ARCHIVE_${project.id}.EXE`}
                    onMouseEnter={() => setActive(project.id)}
                    onMouseLeave={() => setActive(null)}
                    footer={
                      <>
                        <span className={cn(isActive && "text-navy")}>
                          <span className="mr-2 text-win-dark/70">
                            {isBot ? dict.kindBot : dict.kindWeb}
                          </span>
                          {project.tags}
                        </span>
                        {isBot ? (
                          <button
                            type="button"
                            onClick={() => setBotOpen(true)}
                            className="text-navy underline-offset-2 hover:underline"
                            data-cursor="view"
                          >
                            {dict.openBot}
                          </button>
                        ) : (
                          <Link
                            href={project.href}
                            className="text-navy underline-offset-2 hover:underline"
                            data-cursor="view"
                          >
                            {dict.view}
                          </Link>
                        )}
                      </>
                    }
                  >
                    {isBot ? (
                      <button
                        type="button"
                        onClick={() => setBotOpen(true)}
                        className="relative block w-full text-left"
                        data-cursor="view"
                        aria-haspopup="dialog"
                        aria-expanded={botOpen}
                      >
                        {renderMedia(project)}
                      </button>
                    ) : (
                      <Link
                        href={project.href}
                        className="relative block"
                        data-cursor="view"
                      >
                        {renderMedia(project)}
                      </Link>
                    )}
                  </KatemWindow>
                </div>
              );
            })}
          </div>
        </ArcadeCabinet>

        <div
          className="mt-5 flex items-center justify-center gap-2 md:hidden"
          aria-label={dict.label}
        >
          {dict.projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              aria-label={`${project.title}`}
              aria-current={slide === index}
              onClick={() => scrollToSlide(index)}
              className={cn(
                "h-2 w-2 border border-off-white/40",
                slide === index ? "bg-rose" : "bg-transparent"
              )}
            />
          ))}
        </div>
      </div>

      <ArchiveBotDemo
        open={botOpen}
        onClose={() => setBotOpen(false)}
        copy={dict.bot}
      />
    </section>
  );
}
