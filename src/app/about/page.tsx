import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  GraduationCap,
  Heart,
  Target,
} from "lucide-react";

import { Section, SectionHeader } from "@/components/common/section";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { site, stats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | SQA with Abdullah",
  description:
    "Learn more about Abdullah Al Baky, a Software Quality Assurance Engineer with 7+ years of professional experience in Software Testing and the founder of SQA with Abdullah.",
};

const values = [
  {
    icon: Target,
    title: "Industry-Focused Learning",
    body: "Every lesson is designed around real-world Software Testing practices used in professional environments.",
  },
  {
    icon: Heart,
    title: "Honest Mentorship",
    body: "No unrealistic promises—only practical guidance, continuous support, and genuine career advice.",
  },
  {
    icon: GraduationCap,
    title: "Hands-on Training",
    body: "Students learn by working on real projects, assignments, and testing scenarios rather than just theory.",
  },
  {
    icon: Compass,
    title: "Career Development",
    body: "From resume building to interview preparation, every course is designed to help students become job-ready.",
  },
];

const timeline = [
  {
    year: "2018",
    title: "Started My QA Journey",
    body: "Began my professional career in Software Quality Assurance and learned industry-standard testing practices while working on real software products.",
  },
  {
    year: "Industry Experience",
    title: "Enterprise & Government Projects",
    body: "Worked on enterprise-level and government software systems, focusing on Manual Testing, API Testing, Automation, Agile methodologies, and software quality processes.",
  },
  {
    year: "Knowledge Sharing",
    title: "Started Teaching",
    body: "Started sharing practical Software Testing knowledge through YouTube, online resources, and live training sessions to help aspiring QA Engineers.",
  },
  {
    year: "Today",
    title: "Founder of SQA with Abdullah",
    body: "Building a practical, industry-focused learning platform that helps future QA Engineers develop real-world skills and build successful careers.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}

      <Section className="pt-10 pb-20">
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            About Abdullah
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Helping Future QA Engineers
            <span className="block text-primary">
              Build Real Careers
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            I'm <strong>Abdullah Al Baky</strong>, a Software Quality Assurance
            Engineer with <strong>7+ years of industry experience</strong>.
            Through <strong>SQA with Abdullah</strong>, my mission is to help
            aspiring QA Engineers gain practical skills, real project
            experience, and the confidence to build successful careers in
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

      {/* About Me */}

      <Section>

        <SectionHeader
          eyebrow="Who I Am"
          title="A Passionate Software Quality Assurance Engineer"
          description="I believe quality software starts with quality testing. My goal is to make Software Testing education practical, accessible, and career-focused for everyone."
        />

        <div className="mx-auto mt-12 max-w-5xl">

          <div className="rounded-3xl border bg-card p-8 shadow-sm">

            <p className="text-lg leading-8 text-muted-foreground">
              Throughout my professional journey, I have worked on enterprise
              software solutions and large-scale projects, helping teams deliver
              reliable, secure, and high-quality software products.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              My expertise includes Manual Testing, API Testing, Automation
              Testing, Agile methodologies, Bug Reporting, Test Planning,
              Quality Processes, and modern QA practices used by professional
              software teams.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I founded <strong>SQA with Abdullah</strong> to bridge the gap
              between academic learning and real industry expectations. Every
              course, live session, and resource is designed to help students
              become confident, job-ready Software Quality Assurance Engineers.
            </p>

          </div>

        </div>

      </Section>
            {/* My Journey */}

      <Section className="pt-20">

        <SectionHeader
          eyebrow="My Journey"
          title="From Learning Software Testing to Teaching It"
          description="Every stage of my journey has shaped my approach to teaching—focusing on practical experience, continuous learning, and helping others succeed."
        />

        <div className="mx-auto mt-14 max-w-5xl space-y-8">

          {timeline.map((item, index) => (
            <div
              key={item.title}
              className="relative rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {index + 1}
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {item.year}
                  </p>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>

              </div>

              <p className="leading-8 text-muted-foreground">
                {item.body}
              </p>

            </div>
          ))}

        </div>

      </Section>

      {/* What I Do */}

      <Section className="pt-20">

        <SectionHeader
          eyebrow="What I Do"
          title="Helping Students Become Industry-Ready QA Engineers"
          description="My training focuses on practical Software Testing skills, real-world workflows, and career preparation instead of theory alone."
        />

        <div className="mx-auto mt-14 grid gap-6 md:grid-cols-2">

          {[
            "Manual Testing",
            "API Testing",
            "Automation Testing",
            "Agile & Scrum",
            "Bug Reporting",
            "Test Case Writing",
            "JIRA & Project Management",
            "Interview Preparation",
          ].map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-4 rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <CheckCircle2 className="h-6 w-6 text-primary" />

              <span className="text-lg font-medium">
                {skill}
              </span>

            </div>
          ))}

        </div>

      </Section>

      {/* Professional Experience */}

      <Section className="pt-20">

        <SectionHeader
          eyebrow="Professional Experience"
          title="Building Quality Through Real-World Projects"
          description="Over the years, I have gained practical experience working with enterprise applications, large-scale software systems, and modern QA processes."
        />

        <div className="mx-auto mt-14 rounded-3xl border bg-card p-8 shadow-sm">

          <ul className="space-y-5">

            <li className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 text-primary" />
              <span className="leading-8 text-muted-foreground">
                7+ years of professional Software Quality Assurance experience.
              </span>
            </li>

            <li className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 text-primary" />
              <span className="leading-8 text-muted-foreground">
                Hands-on experience in Manual Testing, API Testing, Automation Testing, Agile methodologies, and quality processes.
              </span>
            </li>

            <li className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 text-primary" />
              <span className="leading-8 text-muted-foreground">
                Experience working on enterprise and large-scale software systems with a strong focus on software quality and reliability.
              </span>
            </li>

            <li className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 text-primary" />
              <span className="leading-8 text-muted-foreground">
                Passionate about mentoring aspiring QA Engineers through practical learning, real projects, and career guidance.
              </span>
            </li>

          </ul>

        </div>

      </Section>
            {/* Core Values */}

      <Section className="pt-20">

        <SectionHeader
          eyebrow="My Core Values"
          title="The Principles That Guide My Teaching"
          description="Every course, lesson, and mentorship session is built on these core values."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {value.body}
                </p>
              </div>
            );
          })}

        </div>

      </Section>

      {/* Statistics */}

      <Section className="pt-20">

        <SectionHeader
          eyebrow="By The Numbers"
          title="A Journey Built on Experience"
          description="Focused on continuous learning, practical experience, and helping aspiring QA Engineers succeed."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <h3 className="text-4xl font-extrabold text-primary">
                {stat.value}
              </h3>

              <p className="mt-3 text-base font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </Section>

      {/* Final Message */}

      <Section className="pt-20">

        <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-10 text-center shadow-sm">

          <h2 className="text-4xl font-bold tracking-tight">
            Thank You for Visiting
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you're just beginning your Software Testing journey or
            looking to advance your career, I'm committed to helping you
            develop practical skills, gain industry knowledge, and become a
            confident Software Quality Assurance Engineer.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button size="lg" asChild>
              <Link href="/courses">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>

          </div>

        </div>

      </Section>

      <CtaBand />

    </>
  );
}