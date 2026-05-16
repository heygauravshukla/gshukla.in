import Link from "next/link";
import { Metadata } from "next";
import { CustomProse } from "@/components/custom-prose";
import { timeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Self-taught frontend developer passionate about building modern web experiences with Next.js, React, and thoughtful design systems.",
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
          After completing my senior secondary education in 2020, I watched a{" "}
          <Link
            href="https://youtu.be/-G7bJVAIiEI?si=p9b_KaH6zjHBb2Gs"
            target="_blank"
            rel="noopener noreferrer"
          >
            one-hour HTML tutorial
          </Link>{" "}
          on my phone, downloaded the{" "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.foxdebug.acodefree&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acode app
          </Link>{" "}
          from the Play Store, and started building websites right from my
          mobile device. That was the beginning of my journey into web
          development.
        </p>

        <p>
          I learned the basics by taking notes, experimenting constantly, and
          building small web pages on my own.
        </p>

        <p>
          In 2021, I got my first computer for my engineering studies. While
          learning tools like AutoCAD as part of the curriculum, I explored
          different engineering subjects but always found myself drawn toward
          where technology meets human interaction — the frontend.
        </p>

        <p>
          Although I was pursuing a B.Tech in Computer Science and Engineering,
          web technologies were never formally part of my curriculum. Most of
          what I know today came from self-learning, YouTube tutorials,
          documentation, and building projects independently.
        </p>

        <p>
          Huge thanks to{" "}
          <Link
            href="https://www.youtube.com/@KevinPowell"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kevin Powell
          </Link>{" "}
          whose content helped me strengthen my frontend fundamentals.
        </p>

        <h2>Growth and Experience</h2>

        <p>
          During campus placements, I appeared for several companies, but many
          filtering processes never truly reflected my practical skills and
          learning journey.
        </p>

        <p>
          Realizing the growing demand in the industry, I focused on
          strengthening my core frontend skills. I explored JavaScript in depth
          — a language I initially avoided because of my strong love for CSS —
          and later started working more with React.
        </p>

        <p>
          In 2025, after building several mini projects, I moved toward
          API-driven applications using Next.js to understand real-world
          development challenges such as CORS, API routes, SSR, and clean code
          practices.
        </p>

        <p>
          During this phase, I built projects like my{" "}
          <Link
            href="https://sus-gshukla.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            URL shortener
          </Link>
          , an{" "}
          <Link
            href="https://iat-gshukla.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            IP address tracker
          </Link>
          , multiple mini applications, and this personal website.
        </p>

        <p>
          Eventually, I got an opportunity from{" "}
          <Link
            href="https://rwit.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            RW Infotech
          </Link>{" "}
          despite having no prior professional experience. I joined as a
          Frontend Intern on 12 August 2025, and within three months, I was
          awarded{" "}
          <Link
            href="https://www.linkedin.com/posts/heygauravshukla_grateful-frontend-employeeofthemonth-ugcPost-7396426830968348672-5bSj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENm_zYBTRbfubIDMEP-HOzP5L0G6G5_NNQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Employee of the Month
          </Link>{" "}
          for October 2025.
        </p>

        <p>That moment meant a lot to me.</p>

        <p>
          Currently, I work as a full-time Junior Frontend Developer at RWIT. I
          enjoy sharing my learnings, experiences, and ideas through social
          media and this personal blog whenever I get time.
        </p>

        <h2>Philosophy</h2>

        <p>
          I believe frontend development is more than just writing code — it is
          about creating experiences that feel intuitive, thoughtful, and human.
        </p>

        <p>
          My focus is on building clean, accessible, and performant interfaces
          while continuously improving my understanding of design and software
          engineering.
        </p>

        <p>
          I share my build-in-public journey on{" "}
          <Link
            href="https://x.com/heygauravshukla"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>{" "}
          and{" "}
          <Link
            href="https://medium.com/@heygauravshukla"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </Link>
          .
        </p>

        <p>
          If you&apos;re someone who enjoys technology, design, frontend
          development, or building things for the web,{" "}
          <Link href="/socials">let&apos;s connect.</Link>
        </p>

        <h2>Achievements</h2>

        <p>Here are some of the milestones I have achieved in my journey:</p>

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
