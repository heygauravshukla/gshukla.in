"use client";

import Script from "next/script";
import { cn } from "@/lib/utils";
import styles from "./codepen.module.scss";

declare global {
  interface Window {
    __CPEmbed?: (selector?: string) => void;
  }
}

interface CodePenProps {
  height?: string;
  defaultTab?: string;
  slugHash: string;
  penTitle: string;
  userName: string;
}

export function CodePen({
  height = "300",
  defaultTab = "html,result",
  slugHash,
  penTitle,
  userName,
}: CodePenProps) {
  return (
    // CodePen replaces the placeholder <p> with an iframe, so React owns the
    // wrapper instead and never has to remove a node it no longer finds.
    <div>
      <p
        // The embed script looks for the literal `.codepen` class
        className={cn("codepen", styles.codepen)}
        data-height={height}
        data-default-tab={defaultTab}
        data-slug-hash={slugHash}
        data-pen-title={penTitle}
        data-user={userName}
        style={{
          height: `${height}px`,
        }}
      >
        <span>
          See the Pen{" "}
          <a href={`https://codepen.io/${userName}/pen/${slugHash}`}>
            {penTitle}
          </a>{" "}
          by {userName.replace("-", " ")} (
          <a href={`https://codepen.io/${userName}`}>@{userName}</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </span>
      </p>
      {/* Loaded once per page; onReady re-runs the embed after client navigation */}
      <Script
        id="codepen-embed"
        src="https://public.codepenassets.com/embed/index.js"
        strategy="lazyOnload"
        onReady={() => window.__CPEmbed?.()}
      />
    </div>
  );
}
