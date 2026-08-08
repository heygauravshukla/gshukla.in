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
        <div className="typeset typeset-docs">
          <h1>Projects</h1>

          <p>
            A collection of things I've built, from Frontend Mentor challenges
            to full apps.
          </p>

          <section className="not-typeset mt-6">
            <ProjectsList />
          </section>
        </div>
      </main>
    </Layout>
  );
}
