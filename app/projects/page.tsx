import { Metadata } from "next";
import { CustomProse } from "@/components/custom-prose";
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
    <main className="mx-auto my-20 max-w-2xl px-4 md:my-24">
      <CustomProse>
        <h1>Projects</h1>

        <p>Explore my portfolio of web development projects.</p>

        <div className="not-prose">
          <ProjectsList />
        </div>
      </CustomProse>
    </main>
  );
}
