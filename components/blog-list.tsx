import path from "path";
import { promises as fs } from "fs";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export async function BlogList({ limit }: { limit?: number }) {
  const filenames = await fs.readdir(path.join(process.cwd(), "content/blog"));
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
    <div className="grid gap-8">
      {sortedPosts.map((post) => {
        return (
          <article key={post.title} className="relative isolate grid">
            <div className="flex flex-col gap-1 md:flex-row md:justify-between">
              <Typography
                variant="h3"
                as="h3"
                className="text-base font-medium"
              >
                {post.title}
              </Typography>
              <time className="flex items-start gap-1.5 text-sm text-neutral-600 tabular-nums dark:text-neutral-400">
                {new Date(post.publishedAt)
                  .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                  .replace(/\//g, "-")}
              </time>
            </div>

            <Typography
              variant="muted"
              className="mt-2 line-clamp-3 text-sm/normal"
            >
              {post.summary}
            </Typography>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 flex max-w-fit items-center gap-1 text-sm font-medium text-blue-500 dark:text-blue-400"
            >
              Read post <ChevronRight className="size-4" />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
