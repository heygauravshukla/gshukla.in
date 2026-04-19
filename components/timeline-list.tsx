import { Star } from "lucide-react";
import { timeline } from "@/data/timeline";

export function TimelineList() {
  return (
    <ul className="space-y-8">
      {timeline.map((item) => (
        <li key={item.year}>
          <h3 className="inline-block rounded-md px-3 py-1 font-mono font-medium ring ring-neutral-500 dark:ring-neutral-700">
            {item.year}
          </h3>

          <ul className="mt-6 space-y-6 pl-6">
            {item.achievements.map((achievement) => (
              <li key={achievement.title} className="flex items-start gap-x-2">
                <Star className="h-lh w-4 flex-none stroke-blue-500 dark:stroke-blue-400" />
                <div>
                  <h4 className="font-medium tracking-tight">
                    {achievement.title}
                  </h4>
                  {achievement.description && (
                    <p className="mt-1 max-w-[70ch] text-sm/normal text-neutral-600 dark:text-neutral-400">
                      {achievement.description}
                    </p>
                  )}

                  {achievement.date && (
                    <p className="mt-1 text-xs text-neutral-600 tabular-nums dark:text-neutral-400">
                      {new Date(achievement.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
