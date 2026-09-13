import Link from "next/link";
import { Metadata } from "next";
import Layout from "@/components/layout";
import { bookmarks } from "@/data/bookmarks";

export const metadata: Metadata = {
  title: "Bookmarks",
  description:
    "A curated list of web development resources, tools, and articles that Gaurav Shukla reads and recommends.",
  alternates: {
    canonical: "/bookmarks",
  },
};

export default function BookmarksPage() {
  return (
    <Layout>
      <main className="container my-12">
        <div className="typeset typeset-docs">
          <h1>Bookmarks</h1>

          <p>Tools, articles, and resources I keep coming back to.</p>

          <section className="mt-6">
            {bookmarks.map((bookmark) => (
              <div key={bookmark.category}>
                <h3>{bookmark.category}</h3>

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
        </div>
      </main>
    </Layout>
  );
}
