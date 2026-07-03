import Link from "next/link";
import { ArrowRight, Clock, Layers } from "lucide-react";

import type { Course } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="h-full">
      <Link
        href={`/courses/${course.slug}`}
        aria-label={`View course: ${course.title}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
      >
        <div className="flex items-center justify-between gap-2">
          <Badge
            variant="secondary"
            className="rounded-full bg-primary-soft text-accent-foreground"
          >
            {course.tag}
          </Badge>

          <span className="text-xs font-medium text-muted-foreground">
            {course.level}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {course.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {course.summary}
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{course.modules.length} modules</span>
          </div>
        </dl>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          View course
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </Link>
    </article>
  );
}