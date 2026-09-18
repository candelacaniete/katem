import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { esRewritePaths, siteRoutes } from "@/lib/routes";

const indexedPaths = esRewritePaths.filter((path) => path !== "/");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
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

  const pages = indexedPaths.flatMap((path) => {
    const priority =
      path === siteRoutes.proyectos
        ? 0.8
        : path === siteRoutes.privacidad
          ? 0.3
          : 0.7;
    const changeFrequency =
      path === siteRoutes.privacidad
        ? ("yearly" as const)
        : ("monthly" as const);

    return [
      {
        url: absoluteUrl("es", path),
        lastModified,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            es: absoluteUrl("es", path),
            en: absoluteUrl("en", path),
          },
        },
      },
      {
        url: absoluteUrl("en", path),
        lastModified,
        changeFrequency,
        priority: priority * 0.95,
        alternates: {
          languages: {
            es: absoluteUrl("es", path),
            en: absoluteUrl("en", path),
          },
        },
      },
    ];
  });

  return [...home, ...pages];
}
