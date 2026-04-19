import { Typography } from "@/components/ui/typography";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50 py-6 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <Typography variant="muted">Built by yours truly.</Typography>
        <SocialLinks />
      </div>
    </footer>
  );
}
