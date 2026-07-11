import path from "path";
import { promises as fs } from "fs";

import Image from "next/image";
import { Calendar } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata } = await import(`@/content/blog/${slug}.mdx`);

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
      canonical: `/blog/${slug}`,
    },
    keywords: keywords.join(", "),
    openGraph: {
      type: "article",
      publishedTime,
      url: `/blog/${slug}`,
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(
    `@/content/blog/${slug}.mdx`
  );

  return (
    <main className="container my-20 md:my-24">
      <div className="typeset typeset-docs mx-auto max-w-[42em]">
        <h1 className="mb-4">{metadata.title}</h1>

        <small className="flex items-start gap-2">
          <Calendar className="h-lh w-4" />
          {new Date(metadata.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </small>

        <p>{metadata.summary}</p>

        <Image
          src={metadata.image}
          alt={metadata.title}
          width={800}
          height={600}
          className="ring-1 ring-neutral-100 dark:ring-neutral-800"
        />

        <Post />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "src/content/blog"),
  );

  const staticSlugs = filenames.map((filename) => {
    return { slug: filename.replace(".mdx", "") };
  });

  return staticSlugs;
}

export const dynamicParams = false;
