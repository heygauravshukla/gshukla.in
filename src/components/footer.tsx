import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="container flex flex-col justify-between gap-6 sm:flex-row">
        <p className="text-pretty text-zinc-600 dark:text-zinc-400">
          Built with love by Gaurav Shukla
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
