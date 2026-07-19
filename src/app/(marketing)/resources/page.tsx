import type { Metadata } from "next";
import { ClipboardCheck, Download, FileText, Video } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { Section, SectionEyebrow } from "@/components/common/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { resources, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Free Resources — ${site.name}`,
  description:
    "Free QA templates, checklists, and PDFs to help you practice and prepare for interviews.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: `Free Resources — ${site.name}`,
    description: "Free QA templates, checklists, and PDFs.",
    url: "/resources",
  },
};

const typeIcon = {
  PDF: FileText,
  Template: FileText,
  Checklist: ClipboardCheck,
  Video: Video,
} as const;

export default function ResourcesPage() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-page py-16 md:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Free resources</SectionEyebrow>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Templates &amp; guides to sharpen your QA practice
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Everything here is free. Use them at work, in interviews, or
              while you learn.
            </p>
          </div>
        </div>
      </section>

      <Section className="pt-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => {
            const Icon = typeIcon[resource.type] ?? FileText;

            return (
              <article
                key={resource.slug}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <Badge variant="outline" className="rounded-full">
                    {resource.type}
                  </Badge>
                </div>

                <h2 className="mt-4 text-lg font-semibold">
                  {resource.title}
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  {resource.description}
                </p>

                <Button
                  variant="outline"
                  className="mt-6 h-10 w-fit rounded-xl"
                >
                  <Download className="h-4 w-4" />
                  {resource.cta}
                </Button>
              </article>
            );
          })}
        </div>
      </Section>

      <CtaBand
        eyebrow="More depth"
        title="Ready to go beyond the templates?"
        description="Enroll in a structured course and build real QA skills, not just downloadable files."
        primary={{ label: "Browse courses", to: "/courses" }}
        secondary={{ label: "Join free live class", to: "/contact" }}
      />
    </>
  );
}