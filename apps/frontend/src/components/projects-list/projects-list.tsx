import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsQuery } from "@/sanity/lib/queries";
import type { ProjectsQueryResult } from "@/sanity/lib/queries";
import styles from "./projects-list.module.scss";

export async function ProjectsList({ limit }: { limit?: number }) {
  const projects = await sanityFetch<ProjectsQueryResult>({
    query: projectsQuery,
  });
  const displayed = limit ? projects.slice(0, limit) : projects;

  return (
    <div className={styles.grid}>
      {displayed.map((project) => {
        const imageUrl = `${project.imageUrl}?w=600&h=400&fit=crop&crop=top`;
        return (
          <article key={project._id} className={styles.card}>
            <div className={styles.content}>
              <p className={styles.titleWrapper}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.titleLink}
                >
                  <span className={styles.stretchedLink}></span>
                  {project.title}
                </a>
              </p>

              <small className={styles.description}>{project.description}</small>
            </div>

            <Image
              src={imageUrl}
              alt={project.title}
              width={300}
              height={100}
              className={styles.image}
            />
          </article>
        );
      })}
    </div>
  );
}

