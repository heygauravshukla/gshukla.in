import { Metadata } from "next";
import Layout from "@/components/layout";
import { ProjectsList } from "@/components/projects-list";

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
      <main className="container my-12">
        <section>
          <h1 className="text-3xl font-medium tracking-tight">Projects</h1>
          <p className="mt-4">
            A collection of things I've built, from Frontend Mentor challenges
            to fully featured apps.
          </p>
        </section>

        <section className="mt-12">
          <ProjectsList />
        </section>
      </main>
    </Layout>
  );
}
