import path from "path";
import { promises as fs } from "fs";

import Link from "next/link";
import * as motion from "motion/react-client";
import { HiOutlineClock, HiChevronRight } from "react-icons/hi2";
import { formatTimeAgo } from "@/lib/utils";

export async function ArticlesList({ limit }: { limit?: number }) {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "src/content/articles"),
  );
  const articles = await Promise.all(
    filenames.map(async (filename) => {
      const { metadata } = await import(`@/content/articles/${filename}`);
      return {
        filename,
        slug: filename.replace(".mdx", ""),
        ...metadata,
      };
    }),
  );

  const sortedArticles = articles
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {sortedArticles.map((article, idx) => {
        return (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: idx * 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative isolate flex max-w-xl flex-col items-start"
          >
            <h3 className="font-medium tracking-tight">
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </h3>
            <time className="order-first mb-3 flex items-start gap-1.5 text-sm text-gray-400">
              <HiOutlineClock className="h-[1lh] w-4.5" />
              {formatTimeAgo(article.publishedAt)}
            </time>
            <p className="mt-2 text-sm/normal text-gray-400">
              {article.summary}
            </p>
            <div>
              <Link
                href={`/articles/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fuchsia-400"
              >
                Read article <HiChevronRight className="size-4" />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
