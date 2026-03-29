import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";

import { TimeAgo } from "@/components/time-ago";
import { sanityFetch } from "@/sanity/lib/fetch";
import { POSTS_LIST_QUERY } from "@/sanity/lib/queries";
import type { PostListItem } from "@/sanity/types";

export async function ArticlesList({ limit }: { limit?: number }) {
  const { data: articles } = await sanityFetch({ query: POSTS_LIST_QUERY });
  const all = (articles ?? []) as PostListItem[];

  const list = limit != null ? all.slice(0, limit) : all;

  if (!list.length) {
    return (
      <p className="text-sm text-mist-600 dark:text-mist-400">
        No articles yet. Add posts in{" "}
        <Link href="/studio" className="text-teal-500 underline dark:text-teal-400">
          Sanity Studio
        </Link>
        .
      </p>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {list.map((article) => (
        <article
          key={article._id}
          className="relative isolate flex max-w-xl flex-col items-start"
        >
          <h3 className="font-medium tracking-tight">
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
          </h3>
          <time className="order-first mb-3 flex items-start gap-1.5 text-sm text-mist-600 dark:text-mist-400">
            <Clock className="h-lh w-4" />
            <TimeAgo date={article.publishedAt} />
          </time>
          <p className="mt-2 line-clamp-3 text-sm/normal text-mist-600 dark:text-mist-400">
            {article.summary}
          </p>
          <div>
            <Link
              href={`/articles/${article.slug}`}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500 dark:text-teal-400"
            >
              Read article <ChevronRight className="size-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
