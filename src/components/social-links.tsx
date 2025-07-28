import * as motion from "motion/react-client";

import { FaXTwitter, FaBluesky, FaLinkedin, FaGithub } from "react-icons/fa6";

interface SocialLink {
  platform: string;
  href: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    { platform: "X", href: "https://x.com/heygauravshukla", icon: FaXTwitter },
    {
      platform: "Bluesky",
      href: "https://bsky.app/profile/heygauravshukla.bsky.social",
      icon: FaBluesky,
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/heygauravshukla",
      icon: FaLinkedin,
    },
    {
      platform: "GitHub",
      href: "https://github.com/heygauravshukla",
      icon: FaGithub,
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
              <IconComponent className="size-5 fill-gray-400 transition-colors hover:fill-fuchsia-400 md:size-6" />
            </a>
          </li>
        );
      })}
    </motion.ul>
  );
}
