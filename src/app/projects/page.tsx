import { Metadata } from "next";
import Layout from "@/components/layout";
import { ProjectsList } from "@/components/projects-list";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects, from full-stack applications to modern frontend solutions. Showcasing my expertise in React, Next.js, and innovative web technologies.",
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

          <p>Explore my portfolio of web development projects.</p>

          <section className="not-typeset mt-6">
            <ProjectsList />
          </section>
        </div>
      </main>
    </Layout>
  );
}
