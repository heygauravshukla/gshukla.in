import type { QueryParams } from "@sanity/client";

import { client } from "./client";

type SanityFetchOptions = {
  query: string;
  params?: QueryParams;
  perspective?: "published" | "previewDrafts";
  stega?: boolean;
};

/**
 * Static GROQ fetch for SSG only. No live loader, tags, or revalidation.
 * Content updates require a new build / deploy.
 */
export async function sanityFetch<T>({
  query,
  params,
  perspective = "published",
  stega = false,
}: SanityFetchOptions): Promise<{ data: T }> {
  const data = await client.fetch<T>(query, params ?? {}, {
    perspective,
    stega,
  });
  return { data };
}
