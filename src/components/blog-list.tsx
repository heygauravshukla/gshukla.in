import path from "path";
import { promises as fs } from "fs";
import Link from "next/link";
import Image from "next/image";
import { formatTimeAgo } from "@/lib/utils";

export async function BlogList({ limit }: { limit?: number }) {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "src/content/blog"),
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
    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
      {sortedPosts.map((post) => {
        return (
          <article
            key={post.title}
            className="hover:bg-card @container relative overflow-hidden rounded-lg border transition-colors"
          >
            <div className="flex flex-col @lg:grid @lg:grid-cols-[40%_minmax(0,1fr)]">
              <Image
                src={post.image}
                alt={post.title}
                width={338}
                height={190}
                className="aspect-video h-auto w-full object-cover @max-lg:border-b @lg:border-r"
              />

              <div className="flex flex-col p-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold @xl:line-clamp-2"
                >
                  {post.title}
                  <span className="absolute inset-0"></span>
                </Link>

                <time className="text-muted-foreground mt-2 text-xs">
                  {formatTimeAgo(post.publishedAt)}
                </time>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
