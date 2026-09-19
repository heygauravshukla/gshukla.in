import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsQuery } from "@/sanity/lib/queries";
import type { ProjectsQueryResult } from "@/sanity/lib/queries";

export async function ProjectsList({ limit }: { limit?: number }) {
  const projects = await sanityFetch<ProjectsQueryResult>({
    query: projectsQuery,
  });
  const displayed = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {displayed.map((project) => {
        const imageUrl = `${project.imageUrl}?w=600&h=400&fit=crop&crop=top`;
        return (
          <article
            key={project._id}
            className="group relative isolate h-50 min-w-60 overflow-hidden rounded-2xl border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex flex-col gap-1 p-4">
              <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-max focus-visible:outline-none"
                >
                  <span className="absolute inset-0 z-10"></span>
                  {project.title}
                </a>
              </p>

              <small className="line-clamp-2">{project.description}</small>
            </div>

            <Image
              src={imageUrl}
              alt={project.title}
              width={300}
              height={100}
              className="absolute top-28 -right-10 -rotate-6 rounded-2xl border object-cover object-top transition-transform duration-100 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:-rotate-3"
            />
          </article>
        );
      })}
    </div>
  );
}
