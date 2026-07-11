import Link from "next/link";
import { CustomProse } from "@/components/custom-prose";

export default function Home() {
  return (
    <main className="mx-auto my-20 max-w-2xl px-4 md:my-24">
      <CustomProse>
        <h1>Gaurav Shukla</h1>
        <p>
          I'm a <Link href="/about">developer and writer</Link> based in India.
          I build things for the web and share what I learn through my{" "}
          <Link href="/blog">blog</Link> and{" "}
          <Link href="/socials">social media</Link>.
        </p>

        <p>
          I got my first computer in 2021 and haven't stopped building since.
          I've worked on several <Link href="/projects">projects</Link>, from
          Frontend Mentor challenges to this site.
        </p>

        <p>
          Currently, I'm working as a Frontend Developer at{" "}
          <Link
            href="https://rwit.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            RW Infotech
          </Link>
          , where I've sharpened my skills and found a great team to grow with.
        </p>

        <p>Some of my favorite posts are:</p>

        <ul>
          <li>
            <Link href="/blog/transition-from-display-none">
              How to transition from display none in CSS
            </Link>
          </li>
          <li>
            <Link href="/blog/why-switch-to-pnpm">Why I switched to PNPM</Link>
          </li>
          <li>
            <Link href="/blog/same-font-different-style">
              How I made the same font look better without changing it
            </Link>
          </li>
        </ul>

        <p>
          I also keep a list of my favorite{" "}
          <Link href="/bookmarks">bookmarks</Link>. You can browse my{" "}
          <Link
            href="https://github.com/heygauravshukla"
            target="_blank"
            rel="noopener noreferrer"
          >
            code on GitHub
          </Link>{" "}
          or <Link href="mailto:heygauravshukla@gmail.com">reach out</Link> if
          you want to collaborate.
        </p>
      </CustomProse>
    </main>
  );
}
