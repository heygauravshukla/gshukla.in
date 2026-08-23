import path from "path";
import { promises as fs } from "fs";
import Link from "next/link";
import Image from "next/image";
import { TimeAgo } from "@/components/time-ago";

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
            className="hover:bg-card @container relative overflow-hidden rounded-lg border border-neutral-200 transition-colors dark:border-neutral-800"
          >
            <div className="flex flex-col @lg:grid @lg:grid-cols-[40%_minmax(0,1fr)]">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={260}
                className="aspect-1200/630 h-auto w-full object-cover @max-lg:border-b @lg:border-r"
              />

              <div className="flex flex-col p-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold @xl:line-clamp-2"
                >
                  {post.title}
                  <span className="absolute inset-0"></span>
                </Link>

                <TimeAgo
                  date={post.publishedAt}
                  className="text-muted-foreground mt-2 text-xs"
                />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
