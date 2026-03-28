"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, startTransition } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  code: string;
  language?: string;
  filename?: string;
};

export function ArticleCodeBlock({ code, language, filename }: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => setMounted(true));
  }, []);

  const style =
    mounted && resolvedTheme === "dark" ? oneDark : oneLight;

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-mist-200 dark:border-mist-800">
      {filename ? (
        <div className="border-b border-mist-200 bg-mist-100 px-3 py-1.5 font-mono text-xs text-mist-700 dark:border-mist-800 dark:bg-mist-900 dark:text-mist-300">
          {filename}
        </div>
      ) : null}
      <SyntaxHighlighter
        language={language || "javascript"}
        style={style}
        codeTagProps={{
          className: "font-mono text-sm leading-relaxed",
        }}
        customStyle={{
          margin: 0,
          padding: "1rem",
          borderRadius: 0,
          background: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
