import * as motion from "motion/react-client";
import { BadgeCheck } from "lucide-react";

import { timeline } from "@/data/timeline";

export function TimelineList() {
  return (
    <ul className="space-y-10">
      {timeline.map((item, idx) => (
        <motion.li
          key={item.year}
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
            {item.achievements.map((achievement, idx) => (
              <motion.li
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.1,
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
                  <p className="text-muted-foreground mt-1 text-sm/normal">
                    {achievement.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ul>
  );
}
