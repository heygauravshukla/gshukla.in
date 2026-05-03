import path from "path";
import { promises as fs } from "fs";
import Link from "next/link";

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
    <div className="grid gap-3">
      {sortedPosts.map((post) => {
        return (
          <article
            key={post.title}
            className="group relative isolate flex flex-col gap-0.5 py-0.5 sm:flex-row sm:justify-between sm:gap-6"
          >
            <Link href={`/blog/${post.slug}`}>
              {post.title}
              <span className="absolute inset-0"></span>
            </Link>

            <time className="font-mono text-sm">
              {new Date(post.publishedAt)
                .toLocaleDateString("en-In", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
                .replace(/\//g, "-")}
            </time>
          </article>
        );
      })}
    </div>
  );
}
