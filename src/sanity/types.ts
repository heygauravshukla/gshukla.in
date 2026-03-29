import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "next-sanity";

/** Shapes returned by GROQ (keep in sync with queries). */
export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
  tags: string[] | null;
};

/** `POST_BY_SLUG_QUERY` result (single document). */
export type PostBySlug = {
  title: string;
  slug?: { current?: string };
  summary: string;
  publishedAt: string;
  tags: string[] | null;
  image?: SanityImageSource & { alt?: string | null } | null;
  body?: PortableTextBlock[] | null;
};
