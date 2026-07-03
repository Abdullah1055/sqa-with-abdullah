import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

interface CtaLink {
  label: string;
  to: string;
}

interface CtaBandProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: CtaLink;
  secondary?: CtaLink;
}

export function CtaBand({
  eyebrow = "Ready to start?",
  title = "Join the next free live QA class",
  description = "See exactly how the platform teaches. No commitment, no cost — just a real lesson with Abdullah.",
  primary = {
    label: "Join Free Live Class",
    to: "/contact",
  },
  secondary = {
    label: "Explore courses",
    to: "/courses",
  },
}: CtaBandProps) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-foreground p-8 text-background md:p-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at 0% 0%, oklch(0.55 0.22 260 / 0.35), transparent 55%), radial-gradient(ellipse at 100% 100%, oklch(0.68 0.18 200 / 0.25), transparent 55%)",
          }}
        />

        <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs font-medium">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-primary"
              />
              {eyebrow}
            </span>

            <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h3>

            <p className="mt-3 max-w-xl text-sm text-background/70 md:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary-hover"
            >
              <Link href={primary.to}>
                {primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
            >
              <Link href={secondary.to}>{secondary.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}