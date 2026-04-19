import { Star } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { timeline } from "@/data/timeline";

export function TimelineList() {
  return (
    <ul className="space-y-8">
      {timeline.map((item) => (
        <li key={item.year}>
          <Typography
            as="h3"
            className="inline-block rounded-md px-3 py-1 font-mono font-medium ring ring-neutral-500 dark:ring-neutral-700"
          >
            {item.year}
          </Typography>

          <ul className="mt-6 space-y-6 pl-6">
            {item.achievements.map((achievement) => (
              <li key={achievement.title} className="flex items-start gap-x-2">
                <Star className="h-lh w-4 flex-none stroke-blue-500 dark:stroke-blue-400" />
                <div>
                  <Typography as="h4" variant="h4" className="text-base">
                    {achievement.title}
                  </Typography>
                  {achievement.description && (
                    <Typography variant="muted" className="mt-1 max-w-[70ch]">
                      {achievement.description}
                    </Typography>
                  )}

                  {achievement.date && (
                    <Typography variant="tiny" className="mt-1 tabular-nums">
                      {new Date(achievement.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
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
