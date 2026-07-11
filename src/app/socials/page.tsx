import Link from "next/link";
import { Metadata } from "next";
import { CustomProse } from "@/components/custom-prose";

export const metadata: Metadata = {
  title: "Socials",
  description: "Check out all my social media accounts.",
  alternates: {
    canonical: "/socials",
  },
};

interface SocialLink {
  platform: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { platform: "Twitter", href: "https://twitter.com/heygauravshukla" },
  {
    platform: "Bluesky",
    href: "https://bsky.app/profile/gshukla.in",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/heygauravshukla",
  },
  {
    platform: "GitHub",
    href: "https://github.com/heygauravshukla",
  },
  {
    platform: "Medium",
    href: "https://medium.com/@heygauravshukla",
  },
];

export default function SocialsPage() {
  return (
    <main className="mx-auto my-20 max-w-2xl px-4 md:my-24">
      <CustomProse>
        <h1>Socials</h1>

        <p>You can find me on:</p>

        <ul>
          {socialLinks.map((item) => (
            <li key={item.platform}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${item.platform} profile`}
              >
                {item.platform}
              </Link>
            </li>
          ))}
        </ul>
      </CustomProse>
    </main>
  );
}
