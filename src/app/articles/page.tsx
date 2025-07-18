import { Metadata } from "next";
import { Wrapper } from "@/components/wrapper";
import { PageIntro } from "@/components/page-intro";
import { ArticlesList } from "@/components/articles-list";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Read my latest articles about web development, frontend technologies, and software engineering best practices. Sharing insights and experiences from my journey as a developer.",
};

export default function ArticlesPage() {
  return (
    <main>
      <section className="py-10 md:py-20">
        <Wrapper className="space-y-10 md:space-y-20">
          <PageIntro
            title="All articles"
            description="Explore my collection of articles about web development, coding practices, and technology insights. I write about frontend development, React, and modern web technologies."
          />
          <ArticlesList />
        </Wrapper>
      </section>
    </main>
  );
}
