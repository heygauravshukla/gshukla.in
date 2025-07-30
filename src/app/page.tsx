import { HeroSection } from "@/components/hero-section";
import { Wrapper } from "@/components/wrapper";
import { SectionIntro } from "@/components/section-intro";
import { ProjectsList } from "@/components/projects-list";
import { ArticlesList } from "@/components/articles-list";
import { TimelineList } from "@/components/timeline-list";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="py-20 md:py-32">
        <Wrapper className="space-y-12 md:space-y-16">
          <SectionIntro
            heading="Projects"
            subheading="I love building things."
            paragraph="Here are some of the projects I've worked on."
          />
          <ProjectsList limit={3} />
        </Wrapper>
      </section>
      <section className="bg-muted/40 py-20 md:py-32">
        <Wrapper className="space-y-12 md:space-y-16">
          <SectionIntro
            heading="Articles"
            subheading="I love sharing knowledge."
            paragraph="Here are some of the articles I've written."
          />
          <ArticlesList limit={4} />
        </Wrapper>
      </section>
      <section className="py-20 md:py-32">
        <Wrapper className="space-y-12 md:space-y-16">
          <SectionIntro
            heading="Timeline"
            subheading="My career journey."
            paragraph="Here's a timeline of my achievements."
          />
          <TimelineList />
        </Wrapper>
      </section>
    </main>
  );
}
