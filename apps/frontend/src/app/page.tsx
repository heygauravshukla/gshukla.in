import Link from "next/link";
import Layout from "@/components/layout";
import { ProjectsList } from "@/components/projects-list";
import { BlogList } from "@/components/blog-list";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Layout>
      <main className={`container ${styles.main}`}>
        <section>
          <h1 className={styles.heroTitle}>Gaurav Shukla</h1>
          <p className={styles.heroText}>
            I&apos;m a software engineer and technical writer based in India.
          </p>
          <p className={styles.heroSubtext}>
            I build things for the web and share what I learn through my blog
            and social media.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <ProjectsList limit={4} />
          <Link href="/projects" className={styles.viewMoreLink}>
            View more
          </Link>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Blog</h2>
          <BlogList limit={4} />
          <Link href="/blog" className={styles.viewMoreLink}>
            View more
          </Link>
        </section>
      </main>
    </Layout>
  );
}
