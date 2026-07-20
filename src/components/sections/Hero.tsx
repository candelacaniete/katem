"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/ui/CtaLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { bookingHref, site } from "@/lib/site";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="papel-surface relative isolate min-h-[100svh] overflow-hidden"
    >
      {/* Full-bleed visual plane: paper grid + atmospheric washes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,color-mix(in_srgb,var(--rosa-katem)_48%,transparent),transparent_52%),radial-gradient(ellipse_at_8%_88%,color-mix(in_srgb,var(--grid)_34%,transparent),transparent_48%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-[18%] hidden select-none font-display text-[clamp(8rem,28vw,18rem)] font-semibold leading-none tracking-tighter text-rosa-katem/25 sm:block"
      >
        {site.name.toLowerCase()}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-papel via-papel/70 to-transparent"
      />
      <div aria-hidden className="scanline" />

      <div className="section relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:justify-center sm:pb-24 sm:pt-32">
        <div className="section__inner max-w-2xl">
          <StatusBadge label="> status: online_" className="mb-5" />

          <p className="font-display text-5xl font-semibold leading-none tracking-tight text-tinta sm:text-6xl lg:text-7xl">
            {site.name.toLowerCase()}
          </p>

          <h1
            id="hero-heading"
            className="mt-5 text-balance font-display text-2xl font-semibold leading-snug text-tinta sm:text-3xl lg:text-[2.25rem]"
          >
            Sitios que convierten, experiencias que enamoran.
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-tinta/80 sm:text-lg">
            Diseño web y automatizaciones para negocios que quieren crecer, con
            una estética que no se parece a ninguna otra.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            >
              <CtaLink
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Empezar proyecto
              </CtaLink>
            </motion.div>

            <CtaLink href="#servicios" variant="secondary">
              ver más
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
