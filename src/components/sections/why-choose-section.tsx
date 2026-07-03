import { CheckCircle2 } from "lucide-react";

import {
  Section,
  SectionHeader,
} from "@/components/common/section";
import { whyChoose } from "@/lib/site-data";

export function WhyChooseSection() {
  return (
    <Section ariaLabelledby="why-title">
      <SectionHeader
        id="why-title"
        eyebrow="Why SQA with Abdullah"
        title="Practical training designed to actually get you hired"
        description="Not a course catalog — a career pipeline built on real industry practice."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whyChoose.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
              <CheckCircle2
                className="h-5 w-5"
                aria-hidden="true"
              />
            </div>

            <h3 className="mt-4 text-base font-semibold text-foreground">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}