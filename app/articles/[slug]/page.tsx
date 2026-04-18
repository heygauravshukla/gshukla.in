import path from "path";
import { promises as fs } from "fs";

import Image from "next/image";
import { Calendar } from "lucide-react";

import Layout from "@/components/layout";
import { CustomProse } from "@/components/custom-prose";

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
      <div className="container py-16">
        <article>
          <CustomProse>
            <time className="not-prose mb-4 flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <Calendar className="h-lh w-4" />
              {new Date(metadata.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>

            <h1 className="mb-4 md:mb-6">{metadata.title}</h1>

            <ul className="not-prose flex flex-wrap items-center gap-2">
              {metadata.tags.slice(0, 3).map((tag: string) => (
                <li
                  key={tag}
                  className="rounded-full border border-neutral-500 px-3 py-1 text-xs text-neutral-800 dark:border-neutral-600 dark:text-neutral-200"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <p>{metadata.summary}</p>

            <Image
              src={metadata.image}
              alt={metadata.title}
              width={800}
              height={600}
            />

            <Post />
          </CustomProse>
        </article>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "content/articles"),
  );

  const staticSlugs = filenames.map((filename) => {
    return { slug: filename.replace(".mdx", "") };
  });

  return staticSlugs;
}

export const dynamicParams = false;
