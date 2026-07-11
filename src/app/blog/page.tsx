import { Metadata } from "next";
import { CustomProse } from "@/components/custom-prose";
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
    <main className="mx-auto my-20 max-w-2xl px-4 md:my-24">
      <CustomProse>
        <h1>Blog</h1>

        <p>
          I write about frontend development, React, and modern web
          technologies.
        </p>

        <BlogList />
      </CustomProse>
    </main>
  );
}
