export const norte = {
  name: "NORTE",
  category: "Architecture & Design Studio",
  tagline: "SPACES BUILT TO OUTLIVE TRENDS.",
  subhead:
    "Architecture, interiors and environments designed with purpose.",
  location: "BUENOS AIRES / ARGENTINA",
  nav: [
    { href: "#projects", label: "PROJECTS" },
    { href: "#studio", label: "STUDIO" },
    { href: "#services", label: "SERVICES" },
    { href: "#journal", label: "JOURNAL" },
    { href: "#contact", label: "CONTACT" },
  ],
  heroImage:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80",
  projects: [
    {
      slug: "casa-lumen",
      title: "CASA LUMEN",
      location: "Pilar, Buenos Aires",
      year: "2024",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      summary:
        "A concrete and timber residence organized around light wells and a long courtyard that softens the suburban edge.",
    },
    {
      slug: "casa-delta",
      title: "CASA DELTA",
      location: "Tigre, Argentina",
      year: "2023",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
      summary:
        "Elevated living above the delta waters — open plans, weathered materials, and rooms that track the river's mood.",
    },
    {
      slug: "pavilion-03",
      title: "PAVILION 03",
      location: "Mendoza",
      year: "2022",
      category: "Cultural",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=80",
      summary:
        "A temporary pavilion for wine culture events: shadow, stone and a roof that frames the Andes.",
    },
    {
      slug: "residencia-norte",
      title: "RESIDENCIA NORTE",
      location: "Palermo, CABA",
      year: "2025",
      category: "Interior",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      summary:
        "A full interior renovation that turns a dense city apartment into a sequence of quiet, material-led rooms.",
    },
  ],
  metrics: [
    { value: "120+", label: "PROJECTS" },
    { value: "15", label: "YEARS" },
    { value: "9", label: "COUNTRIES" },
    { value: "35+", label: "AWARDS" },
  ],
  studio: {
    title: "WE DESIGN WITH PURPOSE.",
    body: "Creamos espacios donde arquitectura, materialidad y experiencia se encuentran. Cada proyecto es una respuesta precisa al lugar, al clima y a las personas que lo habitan.",
  },
  services: [
    {
      id: "architecture",
      title: "ARCHITECTURE",
      body: "Residential and cultural projects from concept through construction.",
    },
    {
      id: "interior",
      title: "INTERIOR DESIGN",
      body: "Interiors that extend the architecture — furniture, light and material continuity.",
    },
    {
      id: "development",
      title: "DEVELOPMENT",
      body: "Technical documentation and site coordination with clarity and rigor.",
    },
    {
      id: "consulting",
      title: "CONSULTING",
      body: "Design advisory for developers and private clients seeking long-term value.",
    },
  ],
  teamImage:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  journalImage:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  contact: {
    title: "START A PROJECT",
    email: "studio@norte.ar",
    phone: "+54 11 5555 0190",
  },
} as const;

export type NorteProject = (typeof norte.projects)[number];

export function getNorteProject(slug: string) {
  return norte.projects.find((p) => p.slug === slug);
}
