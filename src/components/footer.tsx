import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-mist-200 py-8 dark:border-mist-800">
      <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-pretty text-mist-600 dark:text-mist-400">
          Built with love by Gaurav Shukla
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
