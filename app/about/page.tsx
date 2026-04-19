import { Metadata } from "next";
import Layout from "@/components/layout";
import { Typography } from "@/components/ui/typography";
import { TimelineList } from "@/components/timeline-list";

export const metadata: Metadata = {
  title: "About",
  description:
    "A passionate Software Engineer with expertise in full-stack web development since 2020. Specializing in crafting elegant user interfaces, I combine design engineering with robust front-end and back-end development. I'm dedicated to sharing in-depth technical knowledge through comprehensive blog posts.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <Layout>
      <main>
        <section className="mt-12">
          <div className="container">
            <Typography as="h1" variant="h1">
              About
            </Typography>
            <Typography variant="lead" className="mt-6 max-w-2xl">
              A design engineer with expertise in frontend web development since
              2020. Specializing in crafting elegant user interfaces, I combine
              design engineering with robust front-end and back-end development.
            </Typography>
          </div>
        </section>

        <section className="my-12">
          <div className="container">
            <TimelineList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
