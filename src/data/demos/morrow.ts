export type MorrowProduct = {
  slug: string;
  name: string;
  price: number;
  category: "objects" | "home" | "desk" | "ritual";
  image: string;
  images: string[];
  description: string;
  materials: string;
  shipping: string;
  availability: string;
};

export const morrow = {
  name: "MORROW",
  tagline: "OBJECTS FOR THE WAY YOU LIVE NOW.",
  subhead: "Thoughtfully designed objects for everyday rituals.",
  nav: [
    { href: "/demos/morrow/shop", label: "SHOP" },
    { href: "/demos/morrow#collections", label: "COLLECTIONS" },
    { href: "/demos/morrow#about", label: "ABOUT" },
    { href: "/demos/morrow#journal", label: "JOURNAL" },
  ],
  heroImage:
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
  editorialImage:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
  categories: [
    {
      id: "objects",
      title: "OBJECTS",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "home",
      title: "HOME",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "desk",
      title: "DESK",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba9c7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ritual",
      title: "RITUAL",
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcc036?auto=format&fit=crop&w=800&q=80",
    },
  ],
  products: [
    {
      slug: "morrow-lamp-01",
      name: "MORROW LAMP 01",
      price: 220,
      category: "desk",
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "A compact desk lamp with a brushed metal body and warm diffused light. Designed for late work and quiet mornings.",
      materials: "Brushed aluminum, frosted glass, textile cord",
      shipping: "Ships in 3–5 business days within Argentina",
      availability: "In stock",
    },
    {
      slug: "ritual-bowl",
      name: "RITUAL BOWL",
      price: 68,
      category: "ritual",
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "Hand-finished ceramic bowl with an irregular rim. Made for slow breakfasts and evening tea.",
      materials: "Stoneware clay, matte glaze",
      shipping: "Ships in 3–5 business days",
      availability: "In stock",
    },
    {
      slug: "linen-throw",
      name: "LINEN THROW",
      price: 145,
      category: "home",
      image:
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "Stone-washed linen throw with raw edges. Softens with every wash.",
      materials: "100% European linen",
      shipping: "Ships in 2–4 business days",
      availability: "In stock",
    },
    {
      slug: "clay-carafe",
      name: "CLAY CARAFE",
      price: 92,
      category: "objects",
      image:
        "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "Unglazed clay carafe that keeps water cool. A quiet object for the table.",
      materials: "Unglazed terracotta",
      shipping: "Ships in 3–5 business days",
      availability: "Limited stock",
    },
    {
      slug: "desk-tray",
      name: "DESK TRAY",
      price: 54,
      category: "desk",
      image:
        "https://images.unsplash.com/photo-1593062096033-9a2c72501129?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1593062096033-9a2c72501129?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "Solid oak tray for tools that deserve a place. No drawers required.",
      materials: "Solid oak, natural oil finish",
      shipping: "Ships in 2–4 business days",
      availability: "In stock",
    },
    {
      slug: "evening-candle",
      name: "EVENING CANDLE",
      price: 38,
      category: "ritual",
      image:
        "https://images.unsplash.com/photo-1603006905001-4adcb132971a?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1603006905001-4adcb132971a?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "Soy wax candle with a soft cedar note. Burns clean for about 40 hours.",
      materials: "Soy wax, cotton wick, recycled glass",
      shipping: "Ships in 2–3 business days",
      availability: "In stock",
    },
  ] as MorrowProduct[],
};

export function getMorrowProduct(slug: string) {
  return morrow.products.find((p) => p.slug === slug);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
