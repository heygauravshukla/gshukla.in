import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col justify-between gap-6 sm:flex-row">
        <p className="text-muted-foreground text-pretty">
          Built with love by Gaurav Shukla
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
