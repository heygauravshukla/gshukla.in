import { Metadata } from "next";

import Layout from "@/components/layout";
import { PageIntro } from "@/components/page-intro";
import { PostsList } from "@/components/posts-list";
import { client } from "@/sanity/lib/client";

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{_id, title, summary, slug, publishedAt}`;
const options = { next: { revalidate: 3600 } };

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my latest post about web development, frontend technologies, and software engineering best practices. Sharing insights and experiences from my journey as a developer.",
};

export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <Layout>
      <main>
        <section className="py-10 md:py-20">
          <div className="container space-y-10 md:space-y-20">
            <PageIntro
              title="My blog"
              description="Explore my collection of posts about web development, coding practices, and technology insights. I write about frontend development, React, and modern web technologies."
            />
            <PostsList posts={posts} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
