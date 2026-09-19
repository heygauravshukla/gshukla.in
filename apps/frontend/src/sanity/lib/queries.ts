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
