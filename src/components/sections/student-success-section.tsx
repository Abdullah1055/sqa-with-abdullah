import { Star } from "lucide-react";

import {
  Section,
  SectionHeader,
} from "@/components/common/section";

const studentSuccess = [
  {
    label: "First QA role",
    value: "Career switch",
    body:
      "Learners with no prior IT background move into their first QA role after completing the Foundation and Career Prep tracks.",
  },
  {
    label: "Manual to automation",
    value: "Level up",
    body:
      "Working manual QAs add automation to their resume with a portfolio framework they can showcase in interviews.",
  },
  {
    label: "Team enablement",
    value: "Corporate",
    body:
      "Corporate cohorts get consistent QA vocabulary, workflows, and standards across their engineering teams.",
  },
];

export function StudentSuccessSection() {
  return (
    <Section
      className="bg-surface-2/50"
      ariaLabelledby="success-title"
    >
      <SectionHeader
        id="success-title"
        eyebrow="Student outcomes"
        title="Built on results, not marketing pressure"
        description="The kinds of outcomes learners work toward when they finish a cohort."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {studentSuccess.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-1 text-warning">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="mt-4 text-sm text-foreground">
              {item.body}
            </p>

            <div className="mt-6 border-t border-border pt-4">
              <h3 className="text-sm font-semibold text-foreground">
                {item.value}
              </h3>

              <p className="text-xs text-muted-foreground">
                {item.label}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}