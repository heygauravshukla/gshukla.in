"use client";

import { useEffect, useState } from "react";
import { formatTimeAgo } from "@/lib/utils";

function formatPublishedDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function TimeAgo({
  date,
  className,
}: {
  date: string;
  className?: string;
}) {
  const [label, setLabel] = useState(() => formatPublishedDate(date));

  useEffect(() => {
    setLabel(formatTimeAgo(date));
  }, [date]);

  return (
    <time dateTime={date} className={className} suppressHydrationWarning>
      {label}
    </time>
  );
}
