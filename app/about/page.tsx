import { Metadata } from "next";
import Layout from "@/components/layout";
import { Typography } from "@/components/ui/typography";
import { CustomProse } from "@/components/custom-prose";
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
              Learn more about my journey as a software engineer, my approach to
              building modern web applications, and the principles that guide my
              work.
            </Typography>

            <CustomProse className="mt-8">
              <h2>Background</h2>

              <p>
                My journey into development began in 2021, driven by a
                fascination with the web&apos;s potential to create meaningful
                user experiences.
              </p>

              <p>
                While earning my degree in Computer Science Engineering, I built
                a strong foundation in data structures, databases, and software
                architecture.
              </p>

              <p>
                Over time, my interest naturally shifted toward the interface,
                where technology meets human interaction.
              </p>

              <h2>Growth and Experience</h2>

              <p>
                In 2024, I focused deeply on the modern web stack, working with
                Next.js, TypeScript, and Tailwind CSS.
              </p>

              <p>
                I built high-performance, API-driven applications that helped me
                understand real-world scalability and performance challenges.
              </p>

              <p>
                Projects like my{" "}
                <a href="https://sus-gshukla.vercel.app/" target="_blank">
                  URL shortener
                </a>{" "}
                and personal portfolio became hands-on learning experiences in
                production workflows.
              </p>

              <p>
                Currently, as a Frontend Developer at RW Infotech, I build
                custom software solutions and work with headless CMS
                architectures.
              </p>

              <p>
                My focus is on creating scalable frontend systems that balance
                complexity with smooth user experience and performance.
              </p>

              <h2>Philosophy</h2>

              <p>
                I believe in combining design sensibility with engineering
                precision to build thoughtful digital products.
              </p>

              <p>
                I share my build in public journey on{" "}
                <a href="https://x.com/heygauravshukla" target="_blank">
                  Twitter
                </a>{" "}
                and{" "}
                <a href="https://medium.com/@heygauravshukla" target="_blank">
                  Medium
                </a>
                .
              </p>

              <p>
                My goal is to create products that are visually strong,
                accessible, and built for long-term use.
              </p>

              <p>Gaurav</p>
            </CustomProse>
          </div>
        </section>

        <section className="my-12">
          <div className="container space-y-6">
            <Typography as="h2" variant="h2">
              Achievements
            </Typography>

            <TimelineList />
          </div>
        </section>
      </main>
    </Layout>
  );
}
