import Link from "next/link";
import Image from "next/image";
import { TimeAgo } from "@/components/time-ago";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery, PostsQueryResult } from "@/sanity/lib/queries";
import styles from "./blog-list.module.scss";

export async function BlogList({ limit }: { limit?: number }) {
  const allPosts = await sanityFetch<PostsQueryResult>({ query: postsQuery });
  const posts = limit ? allPosts.slice(0, limit) : allPosts;

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <article key={post._id} className={styles.card}>
          <div className={styles.cardInner}>
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              width={500}
              height={260}
              className={styles.coverImage}
            />

            <div className={styles.content}>
              <Link href={`/blog/${post.slug}`} className={styles.title}>
                {post.title}
                <span className={styles.stretchedLink}></span>
              </Link>

              <TimeAgo date={post.publishedAt} className={styles.time} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

