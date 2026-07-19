import type { Metadata } from "next";
import {
  Briefcase,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";

import { ContactForm } from "./contact-form";

import { Section, SectionEyebrow } from "@/components/common/section";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description:
    "Join a free live class, ask about a course, or reach out about corporate QA training.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${site.name}`,
    description:
      "Join a free live class, ask about a course, or reach out about corporate QA training.",
    url: "/contact",
  },
};

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
  },
  {
    icon: MessageSquare,
    label: "Response Time",
    value: "1–2 working days",
  },
  {
    icon: Globe,
    label: "YouTube",
    value: "@sqawithabdullah",
    href: site.social.youtube,
  },
  {
    icon: Briefcase,
    label: "LinkedIn",
    value: "in/sqawithabdullah",
    href: site.social.linkedin,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-page py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Contact</SectionEyebrow>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s talk about your QA journey
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Join the next free live class, ask about a course, or reach out
              about corporate training.
            </p>
          </div>
        </div>
      </section>

      <Section className="pt-12">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <ContactForm />

          <aside className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              const content = (
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </div>

                    <div className="truncate text-sm font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block transition-transform hover:-translate-y-0.5"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </aside>
        </div>
      </Section>
    </>
  );
}