"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PortableText as SanityPortableText,
  PortableTextComponents,
} from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodePen } from "@/components/codepen";

interface PortableTextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any[];
}

const components: PortableTextComponents = {
  // ─── Block-level elements ─────────────────────────────────────────────────
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    normal: ({ children }) => <p>{children}</p>,
  },

  // ─── Lists ────────────────────────────────────────────────────────────────
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  // ─── Inline marks ─────────────────────────────────────────────────────────
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code>{children}</code>,
    underline: ({ children }) => <span style={{ textDecoration: "underline" }}>{children}</span>,
    "strike-through": ({ children }) => <s>{children}</s>,
    link: ({ value, children }) => {
      const href: string = value?.href ?? "#";
      const isExternal = href.startsWith("http") || href.startsWith("mailto");
      if (isExternal || value?.blank) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
      return <Link href={href}>{children}</Link>;
    },
  },

  // ─── Custom block types ───────────────────────────────────────────────────
  types: {
    // Image with optional caption
    image: ({ value }) => {
      const url: string | undefined = value.asset?.url;
      if (!url) return null;
      return (
        <figure>
          <Image
            src={url}
            alt={value.alt ?? ""}
            width={1200}
            height={630}
            className="h-auto w-full"
          />
          {value.caption && (
            <figcaption className="text-muted-foreground mt-2 text-center text-sm">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    // Code snippet via @sanity/code-input
    code: ({ value }) => (
      <div className="not-prose my-4">
        {value.filename && (
          <div className="bg-neutral-800 rounded-t-md px-4 py-1.5 text-xs text-neutral-400 font-mono">
            {value.filename}
          </div>
        )}
        <SyntaxHighlighter
          language={value.language ?? "text"}
          style={oneDark}
          customStyle={{
            margin: 0,
            borderRadius: value.filename ? "0 0 0.375rem 0.375rem" : "0.375rem",
            fontSize: "0.875rem",
          }}
        >
          {value.code ?? ""}
        </SyntaxHighlighter>
      </div>
    ),

    // CodePen embed
    codePen: ({ value }) => (
      <CodePen
        slugHash={value.slugHash}
        penTitle={value.penTitle}
        userName={value.userName}
        height={String(value.height ?? 300)}
        defaultTab={value.defaultTab ?? "result"}
      />
    ),

    // Callout / alert box
    callout: ({ value }) => {
      const styles: Record<string, string> = {
        note: "border-blue-400 bg-blue-50 dark:bg-blue-950/30",
        tip: "border-green-400 bg-green-50 dark:bg-green-950/30",
        warning: "border-yellow-400 bg-yellow-50 dark:bg-yellow-950/30",
        important: "border-red-400 bg-red-50 dark:bg-red-950/30",
      };
      const icons: Record<string, string> = {
        note: "📝",
        tip: "💡",
        warning: "⚠️",
        important: "❗",
      };
      const type: string = value.type ?? "note";
      return (
        <div
          className={`not-prose my-4 rounded-r-md border-l-4 px-4 py-3 text-sm ${styles[type] ?? styles.note}`}
        >
          <span className="mr-2">{icons[type] ?? "📝"}</span>
          {value.content}
        </div>
      );
    },

    // Horizontal divider
    divider: () => <hr />,
  },
};

export function PortableText({ value }: PortableTextProps) {
  if (!value || value.length === 0) return null;
  return <SanityPortableText value={value} components={components} />;
}
