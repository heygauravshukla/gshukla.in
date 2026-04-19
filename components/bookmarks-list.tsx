import { ExternalLink } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { bookmarks } from "@/data/bookmarks";

export function BookmarksList() {
  return (
    <ul className="space-y-12 md:space-y-16">
      {bookmarks.map((item) => (
        <li key={item.category} className="space-y-6">
          <Typography as="h3" variant="label">
            {item.category}
          </Typography>

          <ul className="grid gap-4 sm:grid-cols-2 md:gap-6">
            {item.items.map((bookmark) => (
              <li
                key={bookmark.title}
                className="relative isolate flex flex-col items-start rounded-2xl border border-neutral-300 p-4 transition-colors hover:border-blue-500 md:p-6 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-400"
              >
                <Typography as="h4" variant="h4" className="text-base">
                  {bookmark.title}
                </Typography>
                <Typography variant="muted" className="mt-2">
                  {bookmark.description}
                </Typography>
                <a
                  href={bookmark.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="order-first mb-2 flex items-baseline gap-2 text-neutral-600 dark:text-neutral-400"
                >
                  <span className="absolute inset-0"></span>
                  <Typography variant="tiny" as="span" className="line-clamp-1">
                    {bookmark.href.slice(8)}
                  </Typography>
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
