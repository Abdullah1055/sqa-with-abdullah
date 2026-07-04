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
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex justify-center">
            <SectionEyebrow>
              Next Live Batch • Enrollment Open
            </SectionEyebrow>
          </div>

          <h1 className="mt-6 text-7xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Master Software Testing
            <br />
            <span className="text-primary">
              From Beginner to Job-Ready QA Engineer
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-7xl text-base leading-8 text-muted-foreground md:text-lg">
          Build real QA skills through Manual Testing, Automation Testing,
          API Testing, Performance Testing, live projects, expert mentorship,
          and career-focused guidance designed to help you confidently start
          your Software Testing career.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-xl px-6">
              <Link href="/contact">
                Join Free Live Class
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl px-6"
            >
              <Link href="/courses">
                <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                Explore Courses
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
              <ShieldCheck
                className="h-4 w-4 text-success"
                aria-hidden="true"
              />
              Real Industry Projects
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
              <CheckCircle2
                className="h-4 w-4 text-success"
                aria-hidden="true"
              />
              Live Mentorship
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
              <Sparkles
                className="h-4 w-4 text-success"
                aria-hidden="true"
              />
              Career Preparation
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-surface p-5 text-center shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md md:p-6"
            >
              <div className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {item.value}
              </div>

              <div className="mt-2 text-xs text-muted-foreground md:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}