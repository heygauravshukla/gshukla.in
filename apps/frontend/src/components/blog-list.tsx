import Link from "next/link";
import Image from "next/image";
import { TimeAgo } from "@/components/time-ago";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery, PostsQueryResult } from "@/sanity/lib/queries";

export async function BlogList({ limit }: { limit?: number }) {
  const allPosts = await sanityFetch<PostsQueryResult>({ query: postsQuery });
  const posts = limit ? allPosts.slice(0, limit) : allPosts;

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
      {posts.map((post) => (
        <article
          key={post._id}
          className="hover:bg-card @container relative overflow-hidden rounded-lg border border-neutral-200 transition-colors dark:border-neutral-800"
        >
          <div className="flex flex-col @lg:grid @lg:grid-cols-[40%_minmax(0,1fr)]">
            <Image
              src={post.coverImageUrl}
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
      ))}
    </div>
  );
}
