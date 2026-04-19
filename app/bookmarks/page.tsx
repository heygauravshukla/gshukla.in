import Link from "next/link";
import { Metadata } from "next";
import Layout from "@/components/layout";
import { PageIntro } from "@/components/page-intro";
import { BookmarksList } from "@/components/bookmarks-list";

export const metadata: Metadata = {
  title: "Bookmarks",
  description:
    "Explore my collection of bookmarks, from web development resources to online tools that I use regularly.",
  alternates: {
    canonical: "/bookmarks",
  },
};

export default function BookmarksPage() {
  return (
    <Layout>
      <main>
        <PageIntro
          title="Bookmarks"
          description="Explore my collection of bookmarks, from web development resources to online tools that I use regularly."
        />

        <section className="mt-12">
          <div className="container">
            <BookmarksList />
          </div>
        </section>

        <section className="my-12">
          <div className="container">
            <p className="leading-7 text-neutral-600 dark:text-neutral-400">
              That&apos;s all folks! If you have any suggestions for more
              resources, feel free to{" "}
              <Link
                href="mailto:heygauravshukla@gmail.com"
                className="text-blue-500 underline dark:text-blue-400"
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
