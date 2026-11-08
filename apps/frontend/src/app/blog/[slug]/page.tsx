import { cache } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Layout } from "@/components/layout";
import { PortableText } from "@/components/portable-text";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  postBySlugQuery,
  postSlugsQuery,
  PostBySlugQueryResult,
} from "@/sanity/lib/queries";
import { formatDate } from "@/lib/utils";
import styles from "./post.module.scss";

// generateMetadata and the page both need the post; share one fetch per request
const getPost = cache((slug: string) =>
  sanityFetch<PostBySlugQueryResult>({
    query: postBySlugQuery,
    params: { slug },
    tags: ["post"],
  }),
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    keywords: post.tags?.join(", "),
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      url: `/blog/${post.slug}`,
      images: [{ url: post.coverImageUrl }],
    },
    twitter: {
      images: [post.coverImageUrl],
      creator: "@heygauravshukla",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <Layout>
      <main className={styles.main}>
        <div className="typeset typeset-docs">
          <h1 className={styles.title}>{post.title}</h1>

          <small className={styles.date}>
            <Calendar className={styles.calendarIcon} />
            {formatDate(post.publishedAt, "long")}
          </small>

          <p>{post.summary}</p>

          <Image
            src={post.coverImageUrl}
            alt={post.title}
            width={704}
            height={370}
            loading="eager"
            fetchPriority="high"
            className={styles.coverImage}
          />

          <PortableText value={post.body} />
        </div>
      </main>
    </Layout>
  );
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<Array<{ slug: string }>>({
    query: postSlugsQuery,
    tags: ["post"],
  });
  return slugs.map((s) => ({ slug: s.slug }));
}
