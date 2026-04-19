import { Metadata } from "next";
import Layout from "@/components/layout";
import { Typography } from "@/components/ui/typography";
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
        <section className="mt-12">
          <div className="container">
            <Typography as="h1" variant="h1">
              Blog
            </Typography>
            <Typography variant="lead" className="mt-6 max-w-2xl">
              Explore my collection of blog posts about web development, coding
              practices, and technology insights. I write about frontend
              development, React, and modern web technologies.
            </Typography>
          </div>
        </section>

        <section className="my-12">
          <div className="container">
            <BlogList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
