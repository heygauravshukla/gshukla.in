import { Star } from "lucide-react";
import { timeline } from "@/data/timeline";

export function TimelineList() {
  return (
    <ul className="space-y-10">
      {timeline.map((item) => (
        <li key={item.year} className="space-y-8">
          <h3>
            <span className="rounded-md px-4 py-2 font-mono font-medium ring ring-teal-500 dark:ring-teal-700">
              {item.year}
            </span>
          </h3>
          <ul className="space-y-6 pl-6">
            {item.achievements.map((achievement) => (
              <li key={achievement.title} className="flex items-start gap-x-2">
                <Star className="h-lh w-4 flex-none stroke-teal-500 dark:stroke-teal-400" />
                <div>
                  <h4 className="font-medium tracking-tight">
                    {achievement.title}
                  </h4>
                  {achievement.description && (
                    <p className="mt-1 max-w-[70ch] text-sm/normal text-mist-600 dark:text-mist-400">
                      {achievement.description}
                    </p>
                  )}

                  {achievement.date && (
                    <p className="mt-1 text-xs text-mist-600 dark:text-mist-400">
                      {new Date(achievement.date).toLocaleDateString("en-IN", {
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
