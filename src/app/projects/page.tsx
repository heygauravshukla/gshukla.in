import { Metadata } from "next";

import Layout from "@/components/layout";
import { PageIntro } from "@/components/page-intro";
import { ProjectsList } from "@/components/projects-list";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects, from full-stack applications to modern frontend solutions. Showcasing my expertise in React, Next.js, and innovative web technologies.",
};

export default function ProjectsPage() {
  return (
    <Layout>
      <main>
        <section className="py-10 md:py-20">
          <div className="container space-y-10 md:space-y-20">
            <PageIntro
              title="All projects"
              description="Discover my portfolio of web development projects, showcasing full-stack applications, modern frontend solutions, and innovative web technologies. From React applications to complete web platforms."
            />
            <ProjectsList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
