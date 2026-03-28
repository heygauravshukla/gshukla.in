/** Shapes returned by GROQ (keep in sync with queries). */
export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
  tags: string[] | null;
};
