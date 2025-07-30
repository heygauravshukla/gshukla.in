import path from "path";
import { promises as fs } from "fs";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";

import { Wrapper } from "@/components/wrapper";
import { Button } from "@/components/ui/button";

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
    <>
      <Wrapper as="main" className="space-y-8 py-10 md:py-20">
        <nav>
          <Button asChild variant="outline" size="icon">
            <Link href="/articles" aria-label="Back to projects">
              <ArrowLeft />
            </Link>
          </Button>
        </nav>

        <article className="mx-auto max-w-[65ch]">
          <time className="text-muted-foreground flex items-start gap-2 text-sm">
            <Calendar className="h-[1lh] w-4" />
            {new Date(metadata.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-6 text-4xl/snug font-medium tracking-tight">
            {metadata.title}
          </h1>
          <p className="text-muted-foreground mt-6 leading-7 text-pretty">
            {metadata.summary}
          </p>
          <Image
            src={metadata.image}
            alt={metadata.title}
            width={800}
            height={600}
            className="my-8 aspect-video w-full rounded-2xl border object-cover"
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
