import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { projects } from "@/data/projects";

export function ProjectsList({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.slice(0, limit).map((project) => {
        return (
          <article
            key={project.title}
            className="group relative isolate h-50 min-w-60 overflow-hidden rounded-2xl border border-neutral-300 transition-colors hover:border-blue-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-400"
          >
            <div className="flex flex-col gap-1 p-4">
              <Typography
                as="h3"
                variant="h3"
                className="overflow-hidden text-base font-medium text-ellipsis whitespace-nowrap"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-max focus-visible:outline-none"
                >
                  <span className="absolute inset-0 z-10"></span>
                  {project.title}
                </a>
              </Typography>

              <Typography variant="muted" className="line-clamp-2">
                {project.description}
              </Typography>
            </div>

            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={100}
              className="absolute top-28 -right-10 -rotate-6 rounded-2xl border object-cover transition-transform duration-100 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:-rotate-3"
            />
          </article>
        );
      })}
    </div>
  );
}
