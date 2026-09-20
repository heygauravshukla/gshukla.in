import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar } from "lucide-react";
import Layout from "@/components/layout";
import { PortableText } from "@/components/portable-text";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  postBySlugQuery,
  postSlugsQuery,
  PostBySlugQueryResult,
} from "@/sanity/lib/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityFetch<PostBySlugQueryResult>({
    query: postBySlugQuery,
    params: { slug },
  });

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
  const post = await sanityFetch<PostBySlugQueryResult>({
    query: postBySlugQuery,
    params: { slug },
  });

  if (!post) notFound();

  return (
    <Layout>
      <main className="container my-12">
        <div className="typeset typeset-docs">
          <h1 className="mb-4">{post.title}</h1>

          <small className="flex items-start gap-2">
            <Calendar className="h-lh w-4" />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>

          <p>{post.summary}</p>

          <Image
            src={post.coverImageUrl}
            alt={post.title}
            width={704}
            height={370}
            className="aspect-1200/630 h-auto w-full object-cover ring-1 ring-neutral-100 dark:ring-neutral-800"
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
  });
  return slugs.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;
