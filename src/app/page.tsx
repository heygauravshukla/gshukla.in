import Layout from "@/components/layout";
import { HeroSection } from "@/components/hero-section";
import { SectionIntro } from "@/components/section-intro";
import { ProjectsList } from "@/components/projects-list";
import { ArticlesList } from "@/components/articles-list";
import { TimelineList } from "@/components/timeline-list";

export default function Home() {
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
              heading="Articles"
              subheading="I love sharing knowledge."
              paragraph="Here are some of the articles I've written."
            />
            <ArticlesList limit={4} />
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
