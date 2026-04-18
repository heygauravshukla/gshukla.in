import { Metadata } from "next";

import Layout from "@/components/layout";
import { PageIntro } from "@/components/page-intro";
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
        <section className="py-16">
          <div className="container space-y-16">
            <PageIntro
              title="About Me"
              description="A passionate Software Engineer with expertise in full-stack web development since 2020. Specializing in crafting elegant user interfaces, I combine design engineering with robust front-end and back-end development. I'm dedicated to sharing in-depth technical knowledge through comprehensive blog posts."
            />
            <TimelineList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
