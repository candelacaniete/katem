import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="section section--alt"
    >
      <div className="section__inner">
        <Reveal>
          <p className="section__label">&gt; qué hacemos_</p>
          <h2 id="servicios-heading" className="section__title">
            Lo que armamos para tu negocio
          </h2>
          <p className="section__lead">
            Tres caminos claros. El que elijas tiene un solo objetivo: que tus
            clientes te encuentren y den el siguiente paso.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={index * 0.06}>
                <article className="torn-edge group flex h-full flex-col bg-papel p-6 transition-colors duration-200 hover:border-rosa-katem sm:p-7">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-tinta sm:text-2xl">
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-grid transition-colors group-hover:text-rosa-katem"
                      aria-hidden
                    />
                  </div>
                  <p className="font-body text-sm leading-relaxed text-tinta/80 sm:text-base">
                    {service.description}
                  </p>
                  <p className="mt-auto pt-6 font-accent text-base text-tinta/65">
                    → {service.result}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
