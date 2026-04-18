import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50 py-10 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-pretty text-neutral-600 dark:text-neutral-400">
          Built with love by Gaurav Shukla
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
