import { Metadata } from "next";
import Layout from "@/components/layout";
import { PageIntro } from "@/components/page-intro";
import { ArticlesList } from "@/components/articles-list";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Read my latest articles about web development, frontend technologies, and software engineering best practices. Sharing insights and experiences from my journey as a developer.",
  alternates: {
    canonical: "/articles",
  },
};

export default function ArticlesPage() {
  return (
    <Layout>
      <main>
        <section className="py-16">
          <div className="container space-y-16">
            <PageIntro
              title="All articles"
              description="Explore my collection of articles about web development, coding practices, and technology insights. I write about frontend development, React, and modern web technologies."
            />
            <ArticlesList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
