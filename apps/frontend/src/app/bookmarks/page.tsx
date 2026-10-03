import Link from "next/link";
import { Metadata } from "next";
import Layout from "@/components/layout";
import { sanityFetch } from "@/sanity/lib/fetch";
import { bookmarksQuery, BookmarksQueryResult } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Bookmarks",
  description:
    "A curated list of web development resources, tools, and articles that Gaurav Shukla reads and recommends.",
  alternates: {
    canonical: "/bookmarks",
  },
};

export default async function BookmarksPage() {
  const bookmarks = await sanityFetch<BookmarksQueryResult>({
    query: bookmarksQuery,
  });

  return (
    <Layout>
      <main className="container my-12">
        <section>
          <h1 className="text-3xl font-medium tracking-tight">Bookmarks</h1>
          <p className="mt-4">
            Tools, articles, and resources I keep coming back to.
          </p>
        </section>

        <section className="typeset typeset-docs mt-12">
          {bookmarks.map((bookmark) => (
            <div key={bookmark._id}>
              <h2>{bookmark.title}</h2>

              <ol>
                {bookmark.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
