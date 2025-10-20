import Layout from "@/components/layout";
import { HeroSection } from "@/components/hero-section";
import { SectionIntro } from "@/components/section-intro";
import { ProjectsList } from "@/components/projects-list";
import { TimelineList } from "@/components/timeline-list";
import { PostsList } from "@/components/posts-list";
import { client } from "@/sanity/lib/client";

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current)]|order(publishedAt desc)[0...4]{_id, title, summary, slug, publishedAt}`;
const options = { next: { revalidate: 3600 } };

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <Layout>
      <main>
        <HeroSection />
        <hr />
        <section className="py-20 md:py-32">
          <div className="container space-y-12 md:space-y-16">
            <SectionIntro
              heading="Projects"
              subheading="I love building things."
              paragraph="Here are some of the projects I've worked on."
            />
            <ProjectsList limit={6} />
          </div>
        </section>
        <hr />
        <section className="bg-muted/40 py-20 md:py-32">
          <div className="container space-y-12 md:space-y-16">
            <SectionIntro
              heading="Blog"
              subheading="I love sharing knowledge."
              paragraph="Here are some of the blog posts I've written."
            />
            <PostsList posts={posts} />
          </div>
        </section>
        <hr />
        <section className="py-20 md:py-32">
          <div className="container space-y-12 md:space-y-16">
            <SectionIntro
              heading="Timeline"
              subheading="My life changelog."
              paragraph="Here's a timeline of my achievements."
            />
            <TimelineList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
