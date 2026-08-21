export const nova = {
  name: "NOVA",
  tagline: "WE MAKE BRANDS IMPOSSIBLE TO IGNORE.",
  subhead:
    "Brand strategy & creative direction for companies ready to move differently.",
  nav: [
    { href: "#work", label: "WORK" },
    { href: "#services", label: "SERVICES" },
    { href: "#about", label: "ABOUT" },
    { href: "#contact", label: "CONTACT" },
  ],
  heroImage:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
  work: [
    {
      slug: "ssense",
      title: "SSENSE",
      tags: "Brand Strategy / Identity",
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
      summary:
        "A sharper cultural signal for a retail brand that already moves fast. Positioning, verbal system and campaign architecture.",
    },
    {
      slug: "aurora",
      title: "AURORA",
      tags: "Brand Identity / Art Direction",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
      summary:
        "Identity system and art direction for a beauty launch built around light, restraint and editorial photography.",
    },
    {
      slug: "typica",
      title: "TYPICA",
      tags: "Packaging / Branding",
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=80",
      summary:
        "Packaging and brand world for a specialty coffee line — tactile, quiet, and impossible to confuse with commodity design.",
    },
  ],
  services: [
    {
      id: "identity",
      title: "IDENTITY",
      body: "Naming, visual systems, typography and brand worlds that hold up in real life — not just pitch decks.",
    },
    {
      id: "campaigns",
      title: "CAMPAIGNS",
      body: "Concept, art direction and rollout for launches that need cultural heat without looking desperate for attention.",
    },
    {
      id: "digital",
      title: "DIGITAL",
      body: "Digital experiences and landing systems designed as brand expressions, not templates with new colors.",
    },
    {
      id: "strategy",
      title: "STRATEGY",
      body: "Positioning, narrative and go-to-market clarity for companies ready to stop sounding like everyone else.",
    },
  ],
  about: {
    title: "ABOUT NOVA",
    body: "We are a creative consultancy for brands that refuse to blur into the feed. Strategy first. Expression without apology. Based in Buenos Aires, working worldwide.",
  },
  contact: {
    title: "HAVE SOMETHING WORTH BUILDING?",
    body: "Tell us what you're building. If it's interesting, we'll tell you how we'd make it impossible to ignore.",
    cta: "START A CONVERSATION →",
    email: "hello@nova.studio",
  },
} as const;

export type NovaWork = (typeof nova.work)[number];
