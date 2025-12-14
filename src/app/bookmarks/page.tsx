import { Metadata } from "next";
import Layout from "@/components/layout";
import { PageIntro } from "@/components/page-intro";
import { BookmarksList } from "@/components/bookmarks-list";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bookmarks",
  description:
    "Explore my collection of bookmarks, from web development resources to online tools that I use regularly.",
};

export default function BookmarksPage() {
  return (
    <Layout>
      <main>
        <section className="py-10 md:py-20">
          <div className="container space-y-10 md:space-y-20">
            <PageIntro
              title="My bookmarks"
              description="Explore my collection of bookmarks, from web development resources to online tools that I use regularly."
            />
            <BookmarksList />
            <p className="leading-7 text-zinc-600 dark:text-zinc-400">
              That&apos;s all folks! If you have any suggestions for more
              resources, feel free to{" "}
              <Link
                href="mailto:heygauravshukla@gmail.com"
                className="text-teal-500 underline dark:text-teal-400"
              >
                reach out!
              </Link>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
