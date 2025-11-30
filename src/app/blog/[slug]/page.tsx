import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import {
  PortableText,
  type PortableTextComponents,
  type SanityDocument,
} from "next-sanity";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";

const POST_QUERY = `
*[_type == "post" && slug.current == $slug][0]{
  title,
  slug,
  summary,
  publishedAt,
  tags,
  image,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "alt": alt
    },
    _type == "code" => {
      ...,
      code,
      language,
      filename
    }
  }
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 3600 } };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    slug,
    tags: keywords,
  } = post;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      type: "article",
      publishedTime,
      url: `/blog/${slug.current}`,
      images: [
        {
          url: postImageUrl,
        },
      ],
    },
    twitter: {
      images: [postImageUrl],
      creator: "@heygauravshukla",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p>{children}</p>;
      },
      blockquote: ({ children }) => {
        return <blockquote>{children}</blockquote>;
      },
    },
    marks: {
      link: ({ value, children }) => {
        return (
          <a
            href={value?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: SanityImageSource & { alt?: string; caption?: string };
      }) => {
        return (
          <div className="my-8">
            <Image
              src={urlFor(value)?.width(800).url() || "/placeholder.svg"}
              alt={value.alt || "Blog image"}
              width={800}
              height={500}
              className="rounded-lg border"
            />
            {value.caption && (
              <p className="mt-2 text-center text-sm">{value.caption}</p>
            )}
          </div>
        );
      },
      code: ({ value }) => (
        <div className="my-6">
          {value.filename && <div>{value.filename}</div>}
          <SyntaxHighlighter
            language={value.language || "javascript"}
            style={nightOwl}
            codeTagProps={{ className: "font-mono" }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      ),
    },
  };

  return (
    <Layout>
      <div className="container space-y-8 py-10 md:py-20">
        <nav>
          <Button asChild variant="outline" size="icon">
            <Link href="/blog" aria-label="Back to projects">
              <ArrowLeft />
            </Link>
          </Button>
        </nav>

        <article className="prose prose-gray dark:prose-invert mx-auto">
          <time className="text-muted-foreground flex items-start gap-2 text-sm">
            <Calendar className="h-[1lh] w-4" />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-6">{post.title}</h1>
          <p>{post.summary}</p>
          {postImageUrl && (
            <Image
              src={postImageUrl}
              alt={post.image.alt}
              className="my-8 aspect-video w-full rounded-2xl border object-cover"
              width={550}
              height={310}
            />
          )}
          {Array.isArray(post.body) && (
            <PortableText value={post.body} components={components} />
          )}
        </article>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`,
  );
  return slugs.map((slug: string) => ({ slug }));
}

export const dynamicParams = false;
