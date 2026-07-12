import Link from "next/link";
import { Metadata } from "next";
import Layout from "@/components/layout";
import { bookmarks } from "@/data/bookmarks";

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
      <main className="container my-12">
        <div className="typeset typeset-docs">
          <h1>Bookmarks</h1>

          <p>Explore my collection of bookmarks.</p>

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
