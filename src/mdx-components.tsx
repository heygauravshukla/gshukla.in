import Link from "next/link";
import Image from "next/image";
import { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";
import { CodePen } from "./components/codepen";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: ComponentProps<"h1">) => (
      <h1
        className="mt-6 text-4xl/snug font-medium tracking-tight"
        {...props}
      />
    ),
    h2: (props: ComponentProps<"h2">) => (
      <h2 className="mt-8 text-xl/relaxed font-medium" {...props} />
    ),
    h3: (props: ComponentProps<"h3">) => (
      <h3 className="mt-8 text-xl/relaxed font-medium" {...props} />
    ),
    h4: (props: ComponentProps<"h4">) => (
      <h4 className="mt-8 leading-relaxed font-medium" {...props} />
    ),
    p: (props: ComponentProps<"p">) => (
      <p
        className="my-4 leading-loose text-pretty text-mist-700 dark:text-mist-300"
        {...props}
      />
    ),
    ol: (props: ComponentProps<"ol">) => (
      <ol className="my-4 list-decimal pl-6" {...props} />
    ),
    ul: (props: ComponentProps<"ul">) => (
      <ul className="my-4 list-disc pl-6" {...props} />
    ),
    li: (props: ComponentProps<"li">) => (
      <li
        className="pl-1 leading-loose text-mist-700 dark:text-mist-300"
        {...props}
      />
    ),
    em: (props: ComponentProps<"em">) => <em className="italic" {...props} />,
    strong: (props: ComponentProps<"strong">) => (
      <strong className="font-semibold" {...props} />
    ),
    a: ({ href, children, ...props }: ComponentProps<"a">) => {
      const className =
        "font-medium underline decoration-teal-200 text-teal-500 dark:text-teal-400 dark:decoration-teal-800 transition-colors";
      if (href?.startsWith("/")) {
        return (
          <Link href={href} className={className} {...props}>
            {children}
          </Link>
        );
      }
      if (href?.startsWith("#")) {
        return (
          <a href={href} className={className} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    },
    blockquote: (props: ComponentProps<"blockquote">) => (
      <blockquote
        className="border-l-4 border-mist-500 bg-mist-100 px-6 py-2 font-medium italic dark:border-mist-500 dark:bg-mist-800"
        {...props}
      />
    ),
    img: ({ src = "", alt }: ComponentProps<"img">) => (
      <Image
        src={src as string}
        alt={alt ?? "Image from content"}
        width={1200}
        height={630}
        className="my-4 size-full rounded-2xl ring ring-mist-300 dark:ring-mist-800"
      />
    ),
    code: ({ children, className, ...props }: ComponentProps<"code">) => {
      const isInline = typeof children === "string";

      if (isInline) {
        return (
          <code
            className="rounded bg-mist-200 px-1 py-px font-mono text-sm dark:bg-mist-700"
            {...props}
          >
            {children}
          </code>
        );
      }

      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    pre: (props: ComponentProps<"pre">) => (
      <pre
        className="my-4 rounded-lg border border-mist-200 font-mono leading-relaxed dark:border-mist-900"
        {...props}
      />
    ),
    hr: (props: ComponentProps<"hr">) => (
      <hr
        className="my-8 border-t border-mist-300 dark:border-mist-700"
        {...props}
      />
    ),
    CodePen,
    ...components,
  };
}
