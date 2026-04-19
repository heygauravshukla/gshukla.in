import Link from "next/link";
import { Metadata } from "next";
import Layout from "@/components/layout";
import { Typography } from "@/components/ui/typography";
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
        <section className="mt-12">
          <div className="container">
            <Typography as="h1" variant="h1">
              Bookmarks
            </Typography>
            <Typography variant="lead" className="mt-6 max-w-2xl">
              Explore my collection of bookmarks, from web development resources
              to online tools that I use regularly.
            </Typography>
          </div>
        </section>

        <section className="mt-12">
          <div className="container">
            <BookmarksList />
          </div>
        </section>

        <section className="my-12">
          <div className="container">
            <Typography variant="p">
              That&apos;s all folks! If you have any suggestions for more
              resources, feel free to{" "}
              <Link
                href="mailto:heygauravshukla@gmail.com"
                className="text-blue-500 underline dark:text-blue-400"
              >
                reach out!
              </Link>
            </Typography>
          </div>
        </section>
      </main>
    </Layout>
  );
}
