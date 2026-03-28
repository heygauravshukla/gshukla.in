import Image from "next/image";
import { Calendar } from "lucide-react";
import { notFound } from "next/navigation";

import { ArticlePortableText } from "@/components/article-portable-text";
import Layout from "@/components/layout";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
    stega: false,
    perspective: "published",
  });

  if (!post) {
    notFound();
  }

  const postImageUrl = post.image
    ? urlFor(post.image).width(1200).height(630).url()
    : null;

  const keywords = (post.tags ?? []).join(", ");

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/articles/${slug}`,
    },
    keywords,
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      url: `/articles/${slug}`,
      images: postImageUrl
        ? [
            {
              url: postImageUrl,
            },
          ]
        : undefined,
    },
    twitter: {
      images: postImageUrl ? [postImageUrl] : undefined,
      creator: "@heygauravshukla",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
    stega: false,
    perspective: "published",
  });

  if (!post) {
    notFound();
  }

  const coverUrl = post.image
    ? urlFor(post.image).width(1600).height(900).url()
    : null;
  const tags = post.tags ?? [];

  return (
    <Layout>
      <div className="container py-16">
        <article className="mx-auto max-w-[70ch]">
          <time className="flex items-start gap-2 text-sm text-mist-600 dark:text-mist-400">
            <Calendar className="h-lh w-4" />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-4 text-4xl leading-snug font-medium tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          {tags.length > 0 ? (
            <ul className="mt-5 flex flex-wrap items-center gap-2">
              {tags.slice(0, 8).map((tag: string) => (
                <li
                  key={tag}
                  className="rounded-full border border-mist-500 px-3 py-1 text-xs text-mist-800 dark:border-mist-600 dark:text-mist-200"
                  data-topic={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
          <p className="mt-6 leading-7 text-pretty text-mist-700 dark:text-mist-300">
            {post.summary}
          </p>
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={post.image?.alt ?? post.title}
              width={800}
              height={600}
              className="my-8 aspect-video w-full rounded-2xl border border-gray-300 object-cover dark:border-gray-800"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          ) : null}
          {Array.isArray(post.body) && post.body.length > 0 ? (
            <ArticlePortableText value={post.body} />
          ) : null}
        </article>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  const { data: slugs } = await sanityFetch({
    query: POST_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });

  return (slugs ?? []).map((s: string) => ({ slug: s }));
}

export const dynamicParams = false;
