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
            Dale, contanos qué necesitás y lo vemos juntos.
          </h2>
          <p className="section__lead mx-auto">
            Agendá una llamada de diagnóstico. En 20 minutos sabés si tiene
            sentido trabajar juntos — sin compromiso raro ni presión de venta.
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
