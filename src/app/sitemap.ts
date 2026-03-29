import type { MetadataRoute } from "next";

import { sanityFetch } from "@/sanity/lib/fetch";
import { POST_SLUGS_QUERY } from "@/sanity/lib/queries";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.gshukla.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: slugs } = await sanityFetch<string[] | null>({
    query: POST_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  const articles: string[] = slugs ?? [];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/bookmarks`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  // Dynamic article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages];
}
