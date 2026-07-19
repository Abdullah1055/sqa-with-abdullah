import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  Check,
} from "lucide-react";

import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { projects, site } from "@/lib/site-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${site.name}`,
    description: project.summary,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${site.name}`,
      description: project.summary,
      url: `/portfolio/${project.slug}`,
      type: "article",
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="hero-gradient border-b border-border">
        <div className="container-page py-14 md:py-20">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio
          </Link>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {project.summary}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Briefcase,
                label: "Role",
                value: project.role,
              },
              {
                icon: Building2,
                label: "Industry",
                value: project.industry,
              },
              {
                icon: Calendar,
                label: "Duration",
                value: project.duration,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <dt className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </dt>

                <dd className="mt-1.5 text-sm font-medium text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
            <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Responsibilities
              </h2>

              <ul className="mt-4 space-y-3">
                {project.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex items-start gap-2 rounded-xl border border-border bg-card p-4"
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden
                    />

                    <span className="text-sm">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Outcomes
              </h2>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.impact.map((impact) => (
                  <li
                    key={impact}
                    className="rounded-xl border border-primary/20 bg-primary-soft/40 p-4 text-sm"
                  >
                    {impact}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Tools &amp; Tech
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-semibold">
                Interested in similar work?
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Let&apos;s talk about training your team or collaborating on QA
                for your product.
              </p>

              <Button
                asChild
                className="mt-4 h-11 w-full rounded-xl"
              >
                <Link href="/contact">
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </Section>
          </>
  );
}