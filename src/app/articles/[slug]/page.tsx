import path from "path";
import { promises as fs } from "fs";

import Image from "next/image";
import { Wrapper } from "@/components/wrapper";
import { BackButton } from "@/components/back-button";

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
    <>
      <Wrapper as="main" className="space-y-8 py-10 md:py-20">
        <nav>
          <BackButton />
        </nav>

        <article className="prose prose-slate dark:prose-invert prose-img:rounded-xl prose-img:border mx-auto">
          <h1>{metadata.title}</h1>
          <p>{metadata.summary}</p>
          <Image
            src={metadata.image}
            alt={metadata.title}
            width={800}
            height={600}
            className="aspect-video w-full rounded-lg border object-cover shadow"
          />
          <Post />
        </article>
      </Wrapper>
    </>
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
