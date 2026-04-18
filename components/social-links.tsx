import { Icons } from "@/components/icons";

interface SocialLink {
  platform: string;
  href: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    { platform: "X", href: "https://x.com/heygauravshukla", icon: Icons.x },
    {
      platform: "Bluesky",
      href: "https://bsky.app/profile/gshukla.in",
      icon: Icons.bluesky,
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/heygauravshukla",
      icon: Icons.linkedin,
    },
    {
      platform: "GitHub",
      href: "https://github.com/heygauravshukla",
      icon: Icons.github,
    },
  ];
  return (
    <ul className="flex items-center gap-8">
      {socialLinks.map((item) => {
        const IconComponent = item.icon;
        return (
          <li key={item.platform}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${item.platform} profile`}
            >
              <IconComponent className="size-5 fill-mist-500 transition-colors hover:fill-mist-600 md:size-6 dark:fill-mist-400 dark:hover:fill-mist-300" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
