import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("es"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: absoluteUrl("es"),
          en: absoluteUrl("en"),
        },
      },
    },
    {
      url: absoluteUrl("en"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          es: absoluteUrl("es"),
          en: absoluteUrl("en"),
        },
      },
    },
  ];
}
