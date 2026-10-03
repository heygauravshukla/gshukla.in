import Link from "next/link";
import Layout from "@/components/layout";
import { ProjectsList } from "@/components/projects-list";
import { BlogList } from "@/components/blog-list";

export default function Home() {
  return (
    <Layout>
      <main className="container my-12">
        <section>
          <h1 className="text-3xl font-medium tracking-tight">Gaurav Shukla</h1>
          <p className="mt-4">
            I'm a software engineer and technical writer based in India.{" "}
          </p>
          <p className="mt-2">
            I build things for the web and share what I learn through my blog
            and social media.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium tracking-tight">Projects</h2>
          <ProjectsList limit={4} />
          <Link href="/projects" className="text-sm underline">
            View more
          </Link>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium tracking-tight">Blog</h2>
          <BlogList limit={4} />
          <Link href="/blog" className="text-sm underline">
            View more
          </Link>
        </section>
      </main>
    </Layout>
  );
}
