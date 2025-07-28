import * as motion from "motion/react-client";
import { HiOutlineExternalLink } from "react-icons/hi";
import { bookmarks } from "@/data/bookmarks";

export function BookmarksList() {
  return (
    <ul className="space-y-12 md:space-y-16">
      {bookmarks.map((item, idx) => (
        <motion.li
          key={item.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-sm font-medium tracking-widest uppercase">
            {item.category}
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {item.items.map((bookmark, idx) => (
              <motion.li
                key={bookmark.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative isolate flex flex-col items-start rounded-2xl border border-gray-800 p-4 transition-colors hover:border-fuchsia-400 md:p-6"
              >
                <h4 className="font-medium tracking-tight">{bookmark.title}</h4>
                <p className="mt-2 text-sm/normal text-gray-400">
                  {bookmark.description}
                </p>
                <a
                  href={bookmark.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="order-first mb-2 flex items-baseline gap-2 text-xs text-gray-400"
                >
                  <span className="absolute inset-0"></span>
                  {bookmark.href.slice(8)}
                  <HiOutlineExternalLink className="size-3 min-w-fit" />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ul>
  );
}
