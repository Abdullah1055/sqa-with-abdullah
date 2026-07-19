import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Section, SectionEyebrow } from "@/components/common/section";
import { projects, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Portfolio | ${site.name}`,
  description:
    "Real QA projects across e-commerce, fintech, and SaaS — responsibilities, tools, and measurable outcomes.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: `Portfolio | ${site.name}`,
    description:
      "Real QA projects across e-commerce, fintech, and SaaS — responsibilities, tools, and measurable outcomes.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-page py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Portfolio</SectionEyebrow>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Real projects, real responsibilities
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Selected QA engagements across e-commerce, fintech, and SaaS.
              Each case study describes the responsibilities, tools, and
              measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Corporate training"
        title="Need QA training for your team?"
        description="Custom cohorts, tailored to your product and workflow."
        primary={{
          label: "Contact for corporate training",
          to: "/contact",
        }}
        secondary={{
          label: "See courses",
          to: "/courses",
        }}
      />
    </>
  );
}