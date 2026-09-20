import { defineQuery } from "next-sanity";

export const projectsQuery = defineQuery(`
  *[_type == "project"] | order(publishedAt asc) {
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    link,
    repository,
    stack,
    publishedAt
  }
`);

export type ProjectsQueryResult = Array<{
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  repository?: string;
  stack: string[];
  publishedAt: string;
}>;

export const bookmarksQuery = defineQuery(`
  *[_type == "bookmarkCategory"] | order(title asc) {
    _id,
    title,
    items[] {
      title,
      href
    }
  }
`);

export type BookmarksQueryResult = Array<{
  _id: string;
  title: string;
  items: Array<{
    title: string;
    href: string;
  }>;
}>;

export const timelineQuery = defineQuery(`
  *[_type == "timelineYear"] | order(year desc) {
    _id,
    year,
    achievements[] {
      title,
      date
    }
  }
`);

export type TimelineQueryResult = Array<{
  _id: string;
  year: number;
  achievements: Array<{
    title: string;
    date?: string;
  }>;
}>;

export const postsQuery = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    publishedAt,
    tags,
    "coverImageUrl": coverImage.asset->url
  }
`);

export type PostsQueryResult = Array<{
  _id: string;
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  tags?: string[];
  coverImageUrl: string;
}>;

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    publishedAt,
    tags,
    "coverImageUrl": coverImage.asset->url,
    body[] {
      ...,
      _type == "image" => {
        ...,
        "asset": asset->{url, metadata}
      }
    }
  }
`);

export type PostBySlugQueryResult = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  tags?: string[];
  coverImageUrl: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
} | null;

export const postSlugsQuery = defineQuery(`
  *[_type == "post"] { "slug": slug.current }
`);
