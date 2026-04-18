import Layout from "@/components/layout";
import { HeroSection } from "@/components/hero-section";
import { SectionIntro } from "@/components/section-intro";
import { ProjectsList } from "@/components/projects-list";
import { BlogList } from "@/components/blog-list";
import { TimelineList } from "@/components/timeline-list";

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />

        <section className="py-16">
          <div className="container space-y-16">
            <SectionIntro
              heading="Projects"
              subheading="I love building things."
              paragraph="Here are some of the projects I've worked on."
            />
            <ProjectsList limit={6} />
          </div>
        </section>

        <section className="py-16">
          <div className="container space-y-16">
            <SectionIntro
              heading="Blog"
              subheading="I love sharing knowledge."
              paragraph="Here are some of the blog posts I've written."
            />
            <BlogList limit={4} />
          </div>
        </section>

        <section className="py-16">
          <div className="container space-y-16">
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
