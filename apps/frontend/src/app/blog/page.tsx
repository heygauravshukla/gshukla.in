import { Metadata } from "next";
import Layout from "@/components/layout";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on CSS, JavaScript, and frontend development — practical tips and lessons from building for the web, by Gaurav Shukla.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <Layout>
      <main className="container my-12">
        <section>
          <h1 className="text-3xl font-medium tracking-tight">Blog</h1>
          <p className="mt-4">
            I write about frontend development, CSS, and things I learn building
            for the web.
          </p>
        </section>

        <section className="mt-12">
          <BlogList />
        </section>
      </main>
    </Layout>
  );
}
