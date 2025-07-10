import { Metadata } from "next";
import { Wrapper } from "@/components/wrapper";
import { PageIntro } from "@/components/page-intro";
import { BookmarksList } from "@/components/bookmarks-list";

export const metadata: Metadata = {
  title: "Bookmarks - Gaurav Shukla",
  description:
    "Explore my collection of bookmarks, from web development resources to online tools that I use regularly.",
};

export default function BookmarksPage() {
  return (
    <main>
      <section className="py-10 md:py-20">
        <Wrapper className="space-y-10 md:space-y-20">
          <PageIntro
            title="My bookmarks"
            description="Explore my collection of bookmarks, from web development resources to online tools that I use regularly."
          />
          <BookmarksList />
        </Wrapper>
      </section>
    </main>
  );
}
