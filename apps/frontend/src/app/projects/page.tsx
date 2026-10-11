import { Metadata } from "next";
import Layout from "@/components/layout";
import { ProjectsList } from "@/components/projects-list";
import styles from "./projects.module.scss";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of web projects by Gaurav Shukla, built with React, Next.js, and TypeScript — from Frontend Mentor challenges to full apps.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <Layout>
      <main className={`container ${styles.main}`}>
        <section>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            A collection of things I&apos;ve built, from Frontend Mentor challenges
            to fully featured apps.
          </p>
        </section>

        <section className={styles.listSection}>
          <ProjectsList />
        </section>
      </main>
    </Layout>
  );
}
