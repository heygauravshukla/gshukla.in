"use client";

import { useEffect } from "react";
import styles from "./codepen.module.scss";

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
  useEffect(() => {
    // Load CodePen script dynamically to avoid hydration issues
    const script = document.createElement("script");
    script.src = "https://public.codepenassets.com/embed/index.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <p
      className={styles.codepen}
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
  );
}

