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
