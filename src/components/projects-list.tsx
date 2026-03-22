import Image from "next/image";
import { projects } from "@/data/projects";

export function ProjectsList({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {projects.slice(0, limit).map((project, idx) => {
        return (
          <article
            key={project.title}
            className="group relative isolate h-50 min-w-60 overflow-hidden rounded-2xl border border-mist-300 transition-colors hover:border-teal-500 dark:border-mist-800 dark:bg-mist-900 dark:hover:border-teal-400"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              <h3 className="overflow-hidden font-medium tracking-tight text-ellipsis whitespace-nowrap">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-max focus-visible:outline-none"
                >
                  <span className="absolute inset-0 z-10"></span>
                  {project.title}
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
          </article>
        );
      })}
    </div>
  );
}
