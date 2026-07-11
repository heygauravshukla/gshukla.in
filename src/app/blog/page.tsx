import { Metadata } from "next";
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
    <main className="container my-20 md:my-24">
      <div className="typeset typeset-docs mx-auto max-w-[42em]">
        <h1>Blog</h1>

        <p>
          I write about frontend development, React, and modern web
          technologies.
        </p>

        <BlogList />
      </div>
    </main>
  );
}
