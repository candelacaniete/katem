import { Reveal } from "@/components/ui/Reveal";
import { pillars } from "@/data/pillars";

export function WhyKatem() {
  return (
    <section
      id="por-que"
      aria-labelledby="por-que-heading"
      className="section papel-surface"
    >
      <div className="section__inner">
        <Reveal>
          <p className="section__label">&gt; por qué katem_</p>
          <h2 id="por-que-heading" className="section__title">
            ¿Por qué elegir Katem?
          </h2>
          <p className="section__lead">
            Cada proyecto combina diseño, estrategia y tecnología para construir
            una presencia digital que represente el valor de tu trabajo.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {pillars.map((pillar, index) => (
            <li key={pillar.id}>
              <Reveal delay={index * 0.06}>
                <article>
                  <p className="font-accent text-base text-rosa-katem">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-tinta">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-tinta/75">
                    {pillar.description}
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
