import { CircleCheck } from "lucide-react";
import * as motion from "motion/react-client";
import { timeline } from "@/data/timeline";

export function TimelineList() {
  return (
    <ul className="space-y-8">
      {timeline.map((item, idx) => (
        <motion.li
          key={item.year}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3>
            <span className="rounded-md border px-2 py-1 font-bold shadow">
              {item.year}
            </span>
          </h3>
          <ul className="space-y-4 pl-4">
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
                <CircleCheck className="fill-primary text-background h-[1lh] w-5 flex-none" />
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-muted-foreground mt-1 text-sm">
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
