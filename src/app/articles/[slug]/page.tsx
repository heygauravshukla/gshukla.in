import path from "path";
import { promises as fs } from "fs";

import Link from "next/link";
import Image from "next/image";
import { HiArrowUturnLeft, HiOutlineCalendar } from "react-icons/hi2";
import { Wrapper } from "@/components/wrapper";

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
          <Link
            href="/articles"
            aria-label="Back to projects"
            className="inline-block rounded-full bg-gray-800 p-4 transition-colors hover:bg-gray-700"
          >
            <HiArrowUturnLeft className="size-4 stroke-gray-400" />
          </Link>
        </nav>

        <article className="mx-auto max-w-[65ch]">
          <time className="flex items-start gap-2 text-sm text-gray-400">
            <HiOutlineCalendar className="h-[1lh] w-5 stroke-gray-400" />
            {new Date(metadata.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-6 text-4xl/snug font-medium tracking-tight">
            {metadata.title}
          </h1>
          <p className="mt-6 leading-7 text-pretty text-gray-400">
            {metadata.summary}
          </p>
          <Image
            src={metadata.image}
            alt={metadata.title}
            width={800}
            height={600}
            className="my-8 aspect-video w-full rounded-2xl object-cover ring ring-gray-800"
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
