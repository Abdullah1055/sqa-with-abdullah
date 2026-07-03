import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/site-data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="h-full">
      <Link
        href={`/portfolio/${project.slug}`}
        aria-label={`Read case study: ${project.title}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
      >
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>{project.industry}</span>
          <span>{project.duration}</span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        <p className="mt-1 text-sm text-primary">
          {project.role}
        </p>

        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-muted px-2 py-1 text-[11px] text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Read case study

          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </Link>
    </article>
  );
}