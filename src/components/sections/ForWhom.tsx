import { Reveal } from "@/components/ui/Reveal";

const niches = [
  "Psicólogos",
  "Terapeutas",
  "Coaches",
  "Nutricionistas",
] as const;

export function ForWhom() {
  return (
    <section
      id="para-quien"
      aria-labelledby="para-quien-heading"
      className="section papel-surface"
    >
      <div className="section__inner grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
        <Reveal>
          <p className="section__label">&gt; para quién_</p>
          <h2 id="para-quien-heading" className="section__title">
            Diseñado para profesionales del bienestar.
          </h2>
          <p className="section__lead">
            Trabajamos con psicólogos, terapeutas, coaches, nutricionistas y
            otros profesionales que acompañan personas.
          </p>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-tinta/75 sm:text-lg">
            Creamos sitios web pensados para comunicar con claridad, transmitir
            profesionalismo y facilitar el primer contacto con futuros clientes.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {niches.map((niche) => (
              <li
                key={niche}
                className="torn-edge bg-rosa-suave px-4 py-5 text-center font-display text-lg font-semibold text-tinta sm:text-xl"
              >
                {niche}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
