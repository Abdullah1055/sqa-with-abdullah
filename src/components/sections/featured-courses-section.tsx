import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/cards/course-card";
import { Section, SectionEyebrow } from "@/components/common/section";
import { courses } from "@/lib/site-data";

export function FeaturedCoursesSection() {
  const featuredCourses = courses.filter((course) => course.featured);

  return (
    <Section id="courses" ariaLabelledby="courses-title">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionEyebrow>Featured Courses</SectionEyebrow>

          <h2
            id="courses-title"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Structured programs that ship you into the industry
          </h2>
        </div>

        <Button
          asChild
          variant="outline"
          className="rounded-xl"
        >
          <Link href="/courses">
            View All Courses
            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {featuredCourses.map((course) => (
          <CourseCard
            key={course.slug}
            course={course}
          />
        ))}
      </div>
    </Section>
  );
}