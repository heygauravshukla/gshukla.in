import { Metadata } from "next";
import { CustomProse } from "@/components/custom-prose";
import { timeline } from "@/data/timeline";

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
    <main className="mx-auto my-20 max-w-2xl px-4 md:my-24">
      <CustomProse>
        <h1>About</h1>

        <p>
          My journey into development began in 2021, driven by a fascination
          with the web&apos;s potential to create meaningful user experiences.
        </p>

        <p>
          While earning my degree in Computer Science Engineering, I built a
          strong foundation in data structures, databases, and software
          architecture.
        </p>

        <p>
          Over time, my interest naturally shifted toward the interface, where
          technology meets human interaction.
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
          <a href="https://sus-gshukla.vercel.app" target="_blank">
            URL shortener
          </a>{" "}
          and personal site became hands-on learning experiences in production
          workflows.
        </p>

        <p>
          Currently, as a Frontend Developer at RW Infotech, I build custom
          software solutions and work with headless CMS architectures.
        </p>

        <p>
          My focus is on creating scalable frontend systems that balance
          complexity with smooth user experience and performance.
        </p>

        <h2>Philosophy</h2>

        <p>
          I believe in combining design sensibility with engineering precision
          to build thoughtful digital products.
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
          My goal is to create products that are visually strong, accessible,
          and built for long-term use.
        </p>

        <h2>Achievements</h2>

        <p>Here are some of the milestones I have achieved in my career:</p>

        {timeline.map((item) => (
          <div key={item.year}>
            <h3>{item.year}</h3>

            <ul>
              {item.achievements.map((achievement) => (
                <li key={achievement.title}>
                  <p className="not-prose">{achievement.title}</p>

                  {achievement.date && (
                    <small className="font-mono">
                      {new Date(achievement.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </small>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CustomProse>
    </main>
  );
}
