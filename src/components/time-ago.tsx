"use client";

import { useState, useEffect } from "react";
import { formatTimeAgo } from "@/lib/utils";

export function TimeAgo({ date }: { date: string | Date }) {
  const [timeAgo, setTimeAgo] = useState(() => formatTimeAgo(date));

  useEffect(() => {
    setTimeAgo(formatTimeAgo(date));
  }, [date]);

  return <>{timeAgo}</>;
}
