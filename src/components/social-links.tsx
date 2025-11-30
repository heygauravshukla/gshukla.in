import * as motion from "motion/react-client";

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
    <motion.ul
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-8"
    >
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
              <IconComponent className="fill-muted-foreground hover:fill-primary size-5 transition-colors md:size-6" />
            </a>
          </li>
        );
      })}
    </motion.ul>
  );
}
