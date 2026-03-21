import Image from "next/image";
import * as motion from "motion/react-client";
import { ExternalLink } from "lucide-react";

import { projects } from "@/data/projects";

export function ProjectsList({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {projects.slice(0, limit).map((project, idx) => {
        return (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: idx * 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="group relative isolate h-50 min-w-60 overflow-hidden rounded-2xl bg-white ring ring-mist-200 dark:bg-mist-900 dark:ring-mist-800"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              <h3 className="overflow-hidden font-medium tracking-tight text-ellipsis whitespace-nowrap">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex max-w-max items-center pr-2.5 focus-visible:outline-none"
                >
                  <span className="absolute inset-0 z-10"></span>
                  {project.title}
                  <ExternalLink className="size-4 origin-center -translate-x-0.5 text-teal-500 opacity-0 transition-all duration-100 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              </h3>

              <p className="line-clamp-2 text-sm/normal text-pretty text-mist-600 dark:text-mist-400">
                {project.description}
              </p>
            </div>

            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={100}
              className="absolute top-28 -right-10 -rotate-6 rounded-2xl border object-cover transition-transform duration-100 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:-rotate-3"
            />
          </motion.article>
        );
      })}
    </div>
  );
}
