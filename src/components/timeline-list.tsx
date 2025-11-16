import * as motion from "motion/react-client";
import { BadgeCheck } from "lucide-react";
import { client } from "@/sanity/lib/client";

// --------------------
// Types
// --------------------

export interface Achievement {
  _key?: string;
  date?: string;
  title: string;
  description?: string;
}

export interface TimelineItem {
  _id: string;
  year: number;
  achievements: Achievement[];
}

// --------------------
// GROQ Query
// --------------------

export const timelineQuery = `
  *[_type == "timeline"] | order(year desc) {
    _id,
    year,
    achievements[] {
      _key,
      date,
      title,
      description
    }
  }
`;

// --------------------
// Server Component
// --------------------

export async function TimelineList() {
  const timeline: TimelineItem[] = await client.fetch(timelineQuery);

  return (
    <ul className="space-y-10">
      {timeline?.map((item, idx) => (
        <motion.li
          key={item._id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3>
            <span className="border-primary/40 rounded-2xl border px-4 py-2 font-medium">
              {item.year}
            </span>
          </h3>

          <ul className="space-y-6 pl-6">
            {item.achievements?.map((achievement, aIdx) => (
              <motion.li
                key={achievement._key ?? achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: aIdx * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex items-start gap-x-2"
              >
                <BadgeCheck className="stroke-primary h-[1lh] w-5 flex-none" />

                <div>
                  <h4 className="font-medium tracking-tight">
                    {achievement.title}
                  </h4>

                  {achievement.description && (
                    <p className="text-muted-foreground mt-1 max-w-[70ch] text-sm/normal">
                      {achievement.description}
                    </p>
                  )}

                  {achievement.date && (
                    <p className="text-muted-foreground mt-1 text-xs">
                      {new Date(achievement.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ul>
  );
}
