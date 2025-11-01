import Link from "next/link";
import * as motion from "motion/react-client";
import { ChevronRight, Clock } from "lucide-react";

import { TimeAgo } from "@/components/time-ago";

interface PostProps {
  _id: string;
  title: string;
  summary: string;
  slug: { current: string };
  publishedAt: string;
}

interface PostsListProps {
  posts: PostProps[];
}

export function PostsList({ posts }: PostsListProps) {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {posts.map((post, idx) => {
        return (
          <motion.article
            key={post._id}
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
              <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
            </h3>
            <time className="text-muted-foreground order-first mb-3 flex items-start gap-1.5 text-sm">
              <Clock className="h-[1lh] w-4" />
              <TimeAgo date={post.publishedAt} />
            </time>
            <p className="text-muted-foreground mt-2 line-clamp-3 text-sm/normal">
              {post.summary}
            </p>
            <div>
              <Link
                href={`/blog/${post.slug.current}`}
                className="text-primary mt-4 inline-flex items-center gap-1 text-sm font-medium"
              >
                Read article <ChevronRight className="size-4" />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
