import Link from "next/link";
import Image from "next/image";
import type { PortableTextComponents } from "next-sanity";
import { PortableText } from "next-sanity";
import type { ComponentProps } from "react";

import { ArticleCodeBlock } from "@/components/article-code-block";
import { urlFor } from "@/sanity/lib/image";

const linkClass =
  "font-medium underline decoration-teal-200 text-teal-500 transition-colors dark:text-teal-400 dark:decoration-teal-800";

function ArticleBodyImage({
  value,
}: {
  value: {
    asset?: { _ref: string };
    alt?: string;
    caption?: string;
  };
}) {
  if (!value?.asset) return null;
  const src = urlFor(value).width(1200).url();
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={value.alt ?? "Article image"}
        width={1200}
        height={630}
        className="size-full rounded-2xl ring ring-mist-300 dark:ring-mist-800"
      />
      {value.caption ? (
        <figcaption className="mt-2 text-center text-sm text-mist-600 dark:text-mist-400">
          {value.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="my-4 leading-loose text-pretty text-mist-700 dark:text-mist-300">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 text-xl/relaxed font-medium">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl/relaxed font-medium">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 leading-relaxed font-medium">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-mist-500 bg-mist-100 px-6 py-2 font-medium italic dark:border-mist-500 dark:bg-mist-800">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 list-disc pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 list-decimal pl-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="pl-1 leading-loose text-mist-700 dark:text-mist-300">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="pl-1 leading-loose text-mist-700 dark:text-mist-300">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-mist-200 px-1 py-px font-mono text-sm dark:bg-mist-700">
        {children}
      </code>
    ),
    link: ({
      value,
      children,
    }: {
      value?: { href?: string };
      children?: React.ReactNode;
    }) => {
      const href = value?.href ?? "#";
      if (href.startsWith("/")) {
        return (
          <Link href={href} className={linkClass}>
            {children}
          </Link>
        );
      }
      if (href.startsWith("#")) {
        return (
          <a href={href} className={linkClass}>
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ArticleBodyImage,
    code: ({
      value,
    }: {
      value: { code?: string; language?: string; filename?: string };
    }) => (
      <ArticleCodeBlock
        code={value.code ?? ""}
        language={value.language}
        filename={value.filename}
      />
    ),
  },
};

type ArticlePortableTextProps = {
  value: NonNullable<
    ComponentProps<typeof PortableText>["value"]
  >;
};

export function ArticlePortableText({ value }: ArticlePortableTextProps) {
  return <PortableText value={value} components={components} />;
}
