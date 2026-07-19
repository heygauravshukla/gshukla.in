import { Metadata } from "next";
import Layout from "@/components/layout";
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
      <main className="container my-12">
        <div className="typeset typeset-docs">
          <h1>Blog</h1>

          <p>
            I write about frontend development, React, and modern web
            technologies.
          </p>

          <section className="not-typeset mt-6">
            <BlogList />
          </section>
        </div>
      </main>
    </Layout>
  );
}
