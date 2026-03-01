import path from "path";
import { promises as fs } from "fs";

import Image from "next/image";
import { Calendar } from "lucide-react";

import Layout from "@/components/layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata } = await import(`@/content/articles/${slug}.mdx`);

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    tags: keywords,
  } = metadata;

  return {
    title,
    description,
    alternates: {
      canonical: `/articles/${slug}`,
    },
    keywords: keywords.join(", "),
    openGraph: {
      type: "article",
      publishedTime,
      url: `/articles/${slug}`,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      images: [image],
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
  const { default: Post, metadata } = await import(
    `@/content/articles/${slug}.mdx`
  );

  return (
    <Layout>
      <div className="container space-y-8 py-10 md:py-20">
        <article className="mx-auto max-w-[70ch]">
          <time className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <Calendar className="h-lh w-4" />
            {new Date(metadata.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-4 text-4xl leading-snug font-medium tracking-tight sm:text-5xl">
            {metadata.title}
          </h1>
          <ul className="mt-5 flex flex-wrap items-center gap-2">
            {metadata.tags.slice(0, 3).map((tag: string) => (
              <li
                key={tag}
                className="rounded-full border border-zinc-500 px-3 py-1 text-xs text-zinc-800 dark:border-zinc-600 dark:text-zinc-200"
                data-topic={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-7 text-pretty text-zinc-700 dark:text-zinc-300">
            {metadata.summary}
          </p>
          <Image
            src={metadata.image}
            alt={metadata.title}
            width={800}
            height={600}
            className="my-8 aspect-video w-full rounded-2xl border border-gray-300 object-cover dark:border-gray-800"
          />
          <Post />
        </article>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "src/content/articles"),
  );

  const staticSlugs = filenames.map((filename) => {
    return { slug: filename.replace(".mdx", "") };
  });

  return staticSlugs;
}

export const dynamicParams = false;
