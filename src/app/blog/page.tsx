import { client } from "@/sanity/lib/client";
import Layout from "@/components/layout";
import PostsList from "@/components/posts-list";

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;
const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  return (
    <Layout>
      <PostsList posts={posts} />
    </Layout>
  );
}
