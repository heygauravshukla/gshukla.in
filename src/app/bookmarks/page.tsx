import { Metadata } from "next";
import { bookmarks } from "@/data/bookmarks";
import Link from "next/link";

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
    <main className="container my-20 md:my-24">
      <div className="typeset typeset-docs mx-auto max-w-[42em]">
        <h1>Bookmarks</h1>

        <p>Explore my collection of bookmarks.</p>

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
      </div>
    </main>
  );
}
