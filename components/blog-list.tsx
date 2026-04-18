import path from "path";
import { promises as fs } from "fs";

import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";

import { TimeAgo } from "@/components/time-ago";

export async function BlogList({ limit }: { limit?: number }) {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "content/blog"),
  );
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const { metadata } = await import(`@/content/blog/${filename}`);
      return {
        filename,
        slug: filename.replace(".mdx", ""),
        ...metadata,
      };
    }),
  );

  const sortedPosts = posts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {sortedPosts.map((post, idx) => {
        return (
          <article
            key={post.title}
            className="relative isolate flex max-w-xl flex-col items-start"
          >
            <h3 className="font-medium tracking-tight">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <time className="order-first mb-3 flex items-start gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
              <Clock className="h-lh w-4" />
              <TimeAgo date={post.publishedAt} />
            </time>
            <p className="mt-2 line-clamp-3 text-sm/normal text-neutral-600 dark:text-neutral-400">
              {post.summary}
            </p>
            <div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500 dark:text-teal-400"
              >
                Read post <ChevronRight className="size-4" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
