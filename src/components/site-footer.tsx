import { HiHeart } from "react-icons/hi2";
import { Wrapper } from "@/components/wrapper";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <Wrapper className="flex flex-col justify-between gap-6 sm:flex-row">
        <p className="text-pretty text-gray-400">
          Built with love{" "}
          <HiHeart className="mx-1 inline size-5 fill-fuchsia-400" /> by Gaurav
          Shukla
        </p>
        <SocialLinks />
      </Wrapper>
    </footer>
  );
}
