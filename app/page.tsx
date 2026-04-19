import Link from "next/link";
import Layout from "@/components/layout";
import { ProjectsList } from "@/components/projects-list";
import { BlogList } from "@/components/blog-list";
import { TimelineList } from "@/components/timeline-list";
import { PageIntro } from "@/components/page-intro";

export default function Home() {
  return (
    <Layout>
      <main>
        <PageIntro
          title="Gaurav Shukla"
          description="I'm a design engineer and creator based in India. I build
              production-ready web applications and share practical insights
              through in-depth blog posts."
        />

        <section className="mt-16">
          <div className="container">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight">
              Projects
            </h2>

            <ProjectsList limit={4} />

            <Link
              href="/projects"
              className="mt-8 inline-block text-sm font-semibold tracking-wider uppercase underline decoration-blue-600 decoration-2 underline-offset-4"
            >
              View all
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <div className="container">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight">Blog</h2>

            <BlogList limit={4} />

            <Link
              href="/blog"
              className="mt-8 inline-block text-sm font-semibold tracking-wider uppercase underline decoration-blue-600 decoration-2 underline-offset-4"
            >
              View all
            </Link>
          </div>
        </section>

        <section className="my-16">
          <div className="container">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight">
              Achievements
            </h2>

            <TimelineList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
