import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Layers,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import { courses, site } from "@/lib/site-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} | ${site.name}`,
    description: course.summary,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} | ${site.name}`,
      description: course.summary,
      url: `/courses/${course.slug}`,
      type: "article",
    },
  };
}

export default async function CourseDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <section className="hero-gradient border-b border-border">
        <div className="container-page py-14 md:py-20">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All courses
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-full">{course.tag}</Badge>

                <Badge
                  variant="outline"
                  className="rounded-full"
                >
                  {course.level}
                </Badge>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {course.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                {course.summary}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Duration
                  </div>

                  <div className="mt-1 font-medium">
                    {course.duration}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Layers className="h-4 w-4" />
                    Modules
                  </div>

                  <div className="mt-1 font-medium">
                    {course.modules.length} modules
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    Format
                  </div>

                  <div className="mt-1 font-medium">
                    {course.format}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Enrollment
                </div>

                <div className="mt-1 text-lg font-semibold">
                  {course.price}
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="mt-4 h-12 w-full rounded-xl"
              >
                <Link href="/contact">
                  Enroll or ask a question
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                What you'll be able to do
              </h2>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2 rounded-xl border border-border bg-card p-4"
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden
                    />

                    <span className="text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Curriculum
              </h2>

              <ol className="mt-5 space-y-3">
                {course.modules.map((module, index) => (
                  <li
                    key={module.title}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-base font-semibold">
                        {index + 1}. {module.title}
                      </h3>

                      <span className="text-xs text-muted-foreground">
                        {module.lessons.length} lessons
                      </span>
                    </div>

                    <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                      {module.lessons.map((lesson) => (
                        <li
                          key={lesson}
                          className="flex items-start gap-1.5"
                        >
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                            aria-hidden
                          />

                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </div>
                    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Who it's for
              </h3>

              <ul className="mt-3 space-y-2 text-sm">
                {course.audience.map((audience) => (
                  <li
                    key={audience}
                    className="flex items-start gap-2"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {audience}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Prerequisites
              </h3>

              <ul className="mt-3 space-y-2 text-sm">
                {course.prerequisites.map((prerequisite) => (
                  <li
                    key={prerequisite}
                    className="flex items-start gap-2"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {prerequisite}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                <Users className="h-4 w-4" />
                Tools
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {course.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}