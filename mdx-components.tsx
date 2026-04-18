import Link from "next/link";
import Image from "next/image";
import { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";
import { CodePen } from "./components/codepen";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...props }: ComponentProps<"a">) => {
      if (href?.startsWith("/")) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      }
      if (href?.startsWith("#")) {
        return (
          <a href={href} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
    img: ({ src = "", alt }: ComponentProps<"img">) => (
      <Image
        src={src as string}
        alt={alt ?? "Image from content"}
        width={1200}
        height={630}
      />
    ),
    code: ({ children, ...props }: ComponentProps<"code">) => {
      return <code {...props}>{children}</code>;
    },
    CodePen,
    ...components,
  };
}
