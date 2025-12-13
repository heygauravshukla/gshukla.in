import Link from "next/link";
import Image from "next/image";
import { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";

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
        className="text-muted-foreground my-4 leading-loose text-pretty"
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
      <li className="text-muted-foreground pl-1 leading-loose" {...props} />
    ),
    em: (props: ComponentProps<"em">) => (
      <em className="text-muted-foreground italic" {...props} />
    ),
    strong: (props: ComponentProps<"strong">) => (
      <strong className="text-secondary-foreground font-medium" {...props} />
    ),
    a: ({ href, children, ...props }: ComponentProps<"a">) => {
      const className =
        "text-primary underline hover:text-accent-foreground transition-colors";
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
        className="border-primary bg-muted border-l-4 px-6 py-2 font-medium italic"
        {...props}
      />
    ),
    img: ({ src = "", alt }: ComponentProps<"img">) => (
      <Image
        src={src as string}
        alt={alt ?? "Image from content"}
        width={1200}
        height={630}
        className="my-4 size-full rounded-2xl border"
      />
    ),
    code: ({ children, className, ...props }: ComponentProps<"code">) => {
      const isInline = typeof children === "string";

      if (isInline) {
        return (
          <code
            className="bg-muted text-muted-foreground rounded px-1 py-0.5 font-mono text-sm"
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
        className="my-4 overflow-x-auto rounded-2xl p-6 font-mono leading-relaxed"
        {...props}
      />
    ),
    hr: (props: ComponentProps<"hr">) => (
      <hr className="my-8 border-t" {...props} />
    ),
    ...components,
  };
}
