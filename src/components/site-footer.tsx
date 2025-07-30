import { Heart } from "lucide-react";

import { Wrapper } from "@/components/wrapper";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t py-8">
      <Wrapper className="flex flex-col justify-between gap-6 sm:flex-row">
        <p className="text-muted-foreground text-pretty">
          Built with love{" "}
          <Heart className="stroke-primary mx-1 inline size-4" /> by Gaurav
          Shukla
        </p>
        <SocialLinks />
      </Wrapper>
    </footer>
  );
}
