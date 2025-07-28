import Image from "next/image";
import * as motion from "motion/react-client";
import { HiOutlineExternalLink } from "react-icons/hi";

import { projects } from "@/data/projects";

export function ProjectsList({ limit }: { limit?: number }) {
  return (
    <ul className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-4 md:gap-x-6 md:gap-y-8 lg:grid-cols-3">
      {projects.slice(0, limit).map((project, idx) => {
        return (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: idx * 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="group relative isolate overflow-hidden rounded-2xl border border-gray-800 bg-gray-900"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="aspect-video w-full object-cover transition-all group-hover:scale-105"
            />

            <div className="p-4">
              <h3 className="font-medium tracking-tight">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="absolute inset-0"></span>
                  {project.title}
                  <HiOutlineExternalLink className="size-4 stroke-gray-400" />
                </a>
              </h3>

              <p className="mt-2 text-sm/normal text-gray-400">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-fuchsia-400/10 px-3 py-1.5 text-xs font-medium text-fuchsia-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}
