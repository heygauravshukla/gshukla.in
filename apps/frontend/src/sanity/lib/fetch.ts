import { client } from "./client";

export async function sanityFetch<T>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: Record<string, unknown>;
  // Sanity document types the query reads; /api/revalidate invalidates them on publish
  tags: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      // Hourly fallback in case a webhook delivery is missed
      revalidate: process.env.NODE_ENV === "development" ? 0 : 3600,
      tags,
    },
  });
}
