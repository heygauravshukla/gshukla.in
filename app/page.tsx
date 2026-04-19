import Link from "next/link";
import Layout from "@/components/layout";
import { Typography } from "@/components/ui/typography";
import { ProjectsList } from "@/components/projects-list";
import { BlogList } from "@/components/blog-list";
import { TimelineList } from "@/components/timeline-list";

export default function Home() {
  return (
    <Layout>
      <main>
        <section className="mt-12">
          <div className="container">
            <Typography as="h1" variant="h1">
              Gaurav Shukla
            </Typography>
            <Typography variant="lead" className="mt-6 max-w-2xl">
              I'm a design engineer and creator based in India. I build
              production-ready web applications and share practical insights
              through in-depth blog posts.
            </Typography>
          </div>
        </section>

        <section className="mt-16">
          <div className="container">
            <Typography as="h2" variant="h2" className="mb-6">
              Projects
            </Typography>

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
            <Typography as="h2" variant="h2" className="mb-6">
              Blog
            </Typography>

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
            <Typography as="h2" variant="h2" className="mb-6">
              Achievements
            </Typography>

            <TimelineList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
