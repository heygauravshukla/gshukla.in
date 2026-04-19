import { Metadata } from "next";
import Layout from "@/components/layout";
import { Typography } from "@/components/ui/typography";
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
      <main>
        <section className="mt-12">
          <div className="container">
            <Typography as="h1" variant="h1">
              Projects
            </Typography>
            <Typography variant="lead" className="mt-6 max-w-2xl">
              Discover my portfolio of web development projects, showcasing
              full-stack applications, modern frontend solutions, and innovative
              web technologies. From React applications to complete web
              platforms.
            </Typography>
          </div>
        </section>

        <section className="my-12">
          <div className="container">
            <ProjectsList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
