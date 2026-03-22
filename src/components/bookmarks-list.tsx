import { ExternalLink } from "lucide-react";
import { bookmarks } from "@/data/bookmarks";

export function BookmarksList() {
  return (
    <ul className="space-y-12 md:space-y-16">
      {bookmarks.map((item) => (
        <li key={item.category} className="space-y-6">
          <h3 className="text-sm font-medium tracking-widest uppercase">
            {item.category}
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {item.items.map((bookmark) => (
              <li
                key={bookmark.title}
                className="relative isolate flex flex-col items-start rounded-2xl border border-mist-300 p-4 transition-colors hover:border-teal-500 md:p-6 dark:border-mist-800 dark:bg-mist-900 dark:hover:border-teal-400"
              >
                <h4 className="font-medium tracking-tight">{bookmark.title}</h4>
                <p className="mt-2 text-sm/normal text-mist-600 dark:text-mist-400">
                  {bookmark.description}
                </p>
                <a
                  href={bookmark.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="order-first mb-2 flex items-baseline gap-2 text-xs text-mist-600 dark:text-mist-400"
                >
                  <span className="absolute inset-0"></span>
                  <span className="line-clamp-1">{bookmark.href.slice(8)}</span>
                  <ExternalLink className="size-3 min-w-fit" />
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
