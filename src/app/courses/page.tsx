import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { CourseCard } from "@/components/cards/course-card";
import { Section, SectionEyebrow } from "@/components/common/section";
import { courses, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Courses | ${site.name}`,
  description:
    "Structured, practical QA courses—from manual testing foundations to Selenium automation and career preparation.",
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: `Courses | ${site.name}`,
    description:
      "Structured, practical QA courses—from manual testing foundations to Selenium automation and career preparation.",
    url: "/courses",
  },
};

export default function CoursesPage() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-page py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Courses</SectionEyebrow>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Choose your path into QA
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Every course is a complete program—outcomes, tools, projects, and
              mentorship—designed to make you employable, not just informed.
            </p>
          </div>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="grid gap-5 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Not sure where to start?"
        title="Join a free live class and see for yourself"
        description="One live session with Abdullah. No commitment, no cost—just a real lesson."
      />
    </>
  );
}