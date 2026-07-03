import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/common/section";
import { stats } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div
        className="bg-grid absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <div className="container-page relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionEyebrow>
              Next Live Batch • Enrollment Open
            </SectionEyebrow>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Master Software Testing,{" "}
            <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              From Beginner to Job-Ready QA Engineer
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Master Manual Testing, Automation Testing,
API Testing, Performance Testing, and real-world QA
workflows through live projects, expert mentorship,
and career-focused training.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-xl px-6">
              <Link href="/contact">
                Join Free Live Class
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl px-6"
            >
              <Link href="/courses">
                <Play className="h-4 w-4" aria-hidden="true" />
                Explore Courses
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck
                className="h-4 w-4 text-success"
                aria-hidden="true"
              />
              Real industry curriculum
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2
                className="h-4 w-4 text-success"
                aria-hidden="true"
              />
              Live cohort + recordings
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Sparkles
                className="h-4 w-4 text-success"
                aria-hidden="true"
              />
              Portfolio & career prep included
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-surface p-5 text-center shadow-xs md:p-6"
            >
              <div className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {item.value}
              </div>

              <div className="mt-1 text-xs text-muted-foreground md:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}