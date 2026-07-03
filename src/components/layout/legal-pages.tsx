import type { PropsWithChildren } from "react";

import { Section, SectionEyebrow } from "@/components/common/section";

interface LegalPageProps extends PropsWithChildren {
  title: string;
  updated: string;
  intro: string;
}

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: LegalPageProps) {
  return (
    <>
      <header className="hero-gradient">
        <div className="container-page py-16 md:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionEyebrow>Legal</SectionEyebrow>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h1>

            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: {updated}
            </p>

            <p className="mt-4 text-base text-muted-foreground">{intro}</p>
          </div>
        </div>
      </header>

      <Section className="pt-10">
        <article className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-foreground/90 [&_a]:text-primary [&_a:hover]:underline [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul>li]:mt-1.5">
          {children}
        </article>
      </Section>
    </>
  );
}