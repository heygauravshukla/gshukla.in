import { Metadata } from "next";
import Layout from "@/components/layout";
import { PageIntro } from "@/components/page-intro";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my latest blog posts about web development, frontend technologies, and software engineering best practices. Sharing insights and experiences from my journey as a developer.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <Layout>
      <main>
        <section className="py-16">
          <div className="container space-y-16">
            <PageIntro
              title="Blog"
              description="Explore my collection of blog posts about web development, coding practices, and technology insights. I write about frontend development, React, and modern web technologies."
            />
            <BlogList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
