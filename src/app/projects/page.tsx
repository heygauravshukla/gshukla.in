import { Metadata } from "next";
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
    <main className="container my-20 md:my-24">
      <div className="typeset typeset-docs mx-auto max-w-[42em]">
        <h1>Projects</h1>

        <p>Explore my portfolio of web development projects.</p>

        <div className="not-prose">
          <ProjectsList />
        </div>
      </div>
    </main>
  );
}
