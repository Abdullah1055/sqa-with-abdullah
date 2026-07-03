import {
  BookOpen,
  Briefcase,
  CheckCircle2,
  Bot,
  Server,
  Wrench,
} from "lucide-react";

import {
  Section,
  SectionEyebrow,
  SectionHeader,
} from "@/components/common/section";
import { roadmap } from "@/lib/site-data";

const roadmapIcons = [
  BookOpen,
  Wrench,
  Server,
  Bot,
  Briefcase,
];

export function RoadmapSection() {
  return (
    <Section
      id="roadmap"
      ariaLabelledby="roadmap-title"
      className="bg-surface-2/50"
    >
      <SectionHeader
        id="roadmap-title"
        eyebrow="Learning roadmap"
        title="A clear path from beginner to job-ready QA"
        description="Five stages, one connected journey. Everything you need — nothing you don't."
      />

      <ol className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-5">
        {roadmap.map((step, index) => {
          const Icon = roadmapIcons[index] ?? BookOpen;

          return (
            <li
              key={step.step}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>

                <span className="font-mono text-xs font-semibold text-muted-foreground">
                  {step.step}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold text-foreground">
                {step.title}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {step.description}
              </p>

              <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                {step.modules.map((module) => (
                  <li
                    key={module}
                    className="flex items-start gap-1.5"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />

                    <span>{module}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}