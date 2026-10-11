import { Metadata } from "next";
import Layout from "@/components/layout";
import { BlogList } from "@/components/blog-list";
import styles from "./blog.module.scss";

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
      <main className={`container ${styles.main}`}>
        <section>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            I write about frontend development, CSS, and things I learn building
            for the web.
          </p>
        </section>

        <section className={styles.listSection}>
          <BlogList />
        </section>
      </main>
    </Layout>
  );
}
