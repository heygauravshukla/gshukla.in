"use client";

import { useSyncExternalStore } from "react";
import { formatTimeAgo, cn } from "@/lib/utils";
import styles from "./time-ago.module.scss";

function formatPublishedDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const emptySubscribe = () => () => {};

export function TimeAgo({
  date,
  className,
}: {
  date: string;
  className?: string;
}) {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const label = isClient ? formatTimeAgo(date) : formatPublishedDate(date);

  return (
    <time
      dateTime={date}
      className={cn(styles.time, className)}
      suppressHydrationWarning
    >
      {label}
    </time>
  );
}
