import { defineQuery } from "next-sanity";

export const POSTS_LIST_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    summary,
    tags
  }
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)].slug.current
`);

export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    summary,
    publishedAt,
    tags,
    image,
    body[]{
      ...,
      _type == "image" => {
        ...,
        "alt": alt
      },
      _type == "code" => {
        ...,
        code,
        language,
        filename
      }
    }
  }
`);
