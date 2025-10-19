import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import { PortableText, type SanityDocument } from "next-sanity";

import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 3600 } };

export default async function PostPage({
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

        <article className="mx-auto max-w-[65ch]">
          <time className="text-muted-foreground flex items-start gap-2 text-sm">
            <Calendar className="h-[1lh] w-4" />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-6 text-4xl/snug font-medium tracking-tight">
            {post.title}
          </h1>
          {/* <p className="text-muted-foreground mt-6 leading-7 text-pretty">
            {metadata.summary}
          </p> */}
          {postImageUrl && (
            <Image
              src={postImageUrl}
              alt={post.title}
              className="my-8 aspect-video w-full rounded-2xl border object-cover"
              width="550"
              height="310"
            />
          )}
          {Array.isArray(post.body) && <PortableText value={post.body} />}
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
