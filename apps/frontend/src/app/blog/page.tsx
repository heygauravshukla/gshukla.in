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
        <div className="typeset typeset-docs">
          <h1>Blog</h1>

          <p>
            I write about frontend development, CSS, and things I learn building
            for the web.
          </p>

          <section className="not-typeset mt-6">
            <BlogList />
          </section>
        </div>
      </main>
    </Layout>
  );
}
