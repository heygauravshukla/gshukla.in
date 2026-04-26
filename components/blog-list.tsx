import path from "path";
import { promises as fs } from "fs";
import Link from "next/link";
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
    <div className="grid gap-4">
      {sortedPosts.map((post) => {
        return (
          <article
            key={post.title}
            className="group relative isolate flex flex-col gap-0.5 py-0.5 sm:flex-row sm:justify-between sm:gap-6"
          >
            <Typography
              variant="p"
              as="h3"
              className="transition-colors group-hover:text-blue-600"
            >
              <Link href={`/blog/${post.slug}`}>
                {post.title}
                <span className="absolute inset-0"></span>
              </Link>
            </Typography>

            <Typography
              variant="muted"
              as="time"
              className="min-w-fit font-mono transition-colors group-hover:text-blue-600"
            >
              {new Date(post.publishedAt)
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
                .replace(/\//g, "-")}
            </Typography>
          </article>
        );
      })}
    </div>
  );
}
