import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

import { Section, SectionHeader } from "@/components/common/section";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About | SQA with Abdullah",
  description:
    "Learn more about Abdullah Al Baky, Software Quality Assurance Engineer and founder of SQA with Abdullah.",
};

const reasons = [
  {
    icon: Briefcase,
    title: "Real Industry Experience",
    body: "Learn Software Testing from practical experience gained through real-world software projects.",
  },
  {
    icon: GraduationCap,
    title: "Practical Learning",
    body: "Every topic is taught with hands-on examples, assignments, and industry-oriented practice.",
  },
  {
    icon: HeartHandshake,
    title: "Career Guidance",
    body: "Beyond teaching, I help students prepare for interviews and build confidence for their QA careers.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Improvement",
    body: "Technology evolves every day, and so does the learning experience inside every course.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-10 pb-20">
        <div className="mx-auto max-w-7xl text-center">

          <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            About Abdullah
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Helping Future QA Engineers
            <span className="block text-primary">
              Build Real Careers
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-7xl text-lg leading-8 text-muted-foreground">
            I'm <strong>Abdullah Al Baky</strong>, a Software Quality Assurance
            Engineer with more than <strong>7 years of professional
            experience</strong>. Through <strong>SQA with Abdullah</strong>,
            I help aspiring QA Engineers develop practical skills, gain
            real-world knowledge, and confidently build successful careers in
            Software Testing.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button size="lg" asChild>
              <Link href="/courses">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Me
              </Link>
            </Button>

          </div>

        </div>
      </Section>
            {/* My Story */}

      <Section className="py-20">
        <SectionHeader
          eyebrow="My Story"
          title="Turning Industry Experience into Practical Learning"
          description="Over the years, I have learned that great QA Engineers are built through hands-on experience, continuous learning, and real project exposure—not just theory."
        />

        <div className="mx-auto mt-14 max-w-7xl rounded-3xl border bg-card p-8 md:p-10 shadow-sm">

          <p className="text-lg leading-8 text-muted-foreground">
            My journey in Software Quality Assurance began with a strong curiosity
            about how quality software is built. That curiosity gradually became
            a profession, allowing me to work on enterprise-level software
            systems where quality, reliability, and user experience were always
            the highest priorities.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Throughout my career, I have worked with modern Software Testing
            methodologies including Manual Testing, API Testing, Automation
            Testing, Agile development, Test Planning, Bug Management, and
            Quality Assurance processes used in professional software teams.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            While working in the industry, I noticed that many aspiring QA
            Engineers struggled to connect academic knowledge with real-world
            expectations. That realization inspired me to create
            <strong> SQA with Abdullah </strong>
            — a learning platform focused on practical skills, real projects,
            and career-focused training.
          </p>

        </div>
      </Section>

      {/* Mission */}

      <Section className="pb-20">

        <SectionHeader
          eyebrow="My Mission"
          title="Making Software Testing Education Practical"
          description="My goal is simple: help learners gain the confidence and practical skills needed to succeed in today's Software Testing industry."
        />

        <div className="mx-auto mt-14 max-w-7xl">

          <div className="rounded-3xl border bg-gradient-to-br from-primary/5 via-background to-primary/5 p-10 shadow-sm">

            <blockquote className="text-center">

              <p className="text-2xl font-semibold leading-relaxed md:text-3xl">
                "I believe every aspiring QA Engineer deserves practical,
                industry-focused education that prepares them for real jobs—not
                just exams."
              </p>

            </blockquote>

            <div className="mx-auto mt-10 max-w-7xl">

              <p className="text-center text-lg leading-8 text-muted-foreground">
                Every course, live session, assignment, and resource is designed
                to bridge the gap between learning and professional work so that
                students can confidently begin and grow their careers in
                Software Quality Assurance.
              </p>

            </div>

          </div>

        </div>

      </Section>
            {/* Why Learn From Me */}

      <Section className="pb-20">

        <SectionHeader
          eyebrow="Why Learn From Me"
          title="Built Around Real Industry Experience"
          description="My goal is not just to teach Software Testing, but to help you become a confident and job-ready QA Engineer."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group flex h-full flex-col rounded-3xl border bg-card p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {reason.body}
                </p>
              </div>
            );
          })}

        </div>

      </Section>

      {/* Final CTA */}

      <Section className="pb-24">

        <div className="mx-auto max-w-7xl rounded-[32px] border bg-gradient-to-br from-primary/5 via-background to-primary/10 p-10 text-center shadow-sm">

          <h2 className="text-3xl font-extrabold tracking-tight">
            Ready to Start Your QA Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-7xl text-lg leading-8 text-muted-foreground">
            Whether you're starting from scratch or looking to improve your
            Software Testing skills, I'm here to help you learn practical QA,
            build confidence, and prepare for a successful career.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button size="lg" asChild>
              <Link href="/courses">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Me
              </Link>
            </Button>

          </div>

        </div>

      </Section>

      <CtaBand />
    </>
  );
}