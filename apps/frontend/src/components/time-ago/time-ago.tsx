"use client";

import { useSyncExternalStore } from "react";
import { formatDate, formatTimeAgo, cn } from "@/lib/utils";
import styles from "./time-ago.module.scss";

const emptySubscribe = () => () => {};

export function TimeAgo({
  date,
  className,
}: {
  date: string;
  className?: string;
}) {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const label = isClient ? formatTimeAgo(date) : formatDate(date);

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
