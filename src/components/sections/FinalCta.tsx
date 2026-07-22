"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { bookingHref } from "@/lib/site";

export function FinalCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="section papel-surface relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_srgb,var(--rosa-katem)_35%,transparent),transparent_55%)]"
      />

      <div className="section__inner relative z-10 max-w-2xl text-center sm:mx-auto">
        <Reveal>
          <p className="section__label">&gt; siguiente paso_</p>
          <h2 id="contacto-heading" className="section__title">
            Hablemos de tu proyecto.
          </h2>
          <p className="section__lead mx-auto">
            Agendá una llamada de diagnóstico para conocer tus objetivos y
            evaluar la mejor solución para tu negocio.
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-tinta/80 sm:text-lg">
            En solo 20 minutos vas a tener una propuesta clara y un camino para
            empezar.
          </p>

          <div className="mt-8 flex justify-center">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
