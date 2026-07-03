import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/cards/project-card";
import { Section, SectionEyebrow } from "@/components/common/section";
import { projects } from "@/lib/site-data";

export function PortfolioSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Section
      id="portfolio"
      ariaLabelledby="portfolio-title"
      className="bg-surface-2/50"
    >
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionEyebrow>Portfolio</SectionEyebrow>

          <h2
            id="portfolio-title"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Real projects, real QA responsibilities
          </h2>

          <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            The curriculum is grounded in actual industry work. Here are a few
            projects that inform how the lessons are taught.
          </p>
        </div>

        <Button
          asChild
          variant="outline"
          className="rounded-xl"
        >
          <Link href="/portfolio">
            See All Projects
            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}