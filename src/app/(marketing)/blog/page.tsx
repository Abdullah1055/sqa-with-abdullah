import type { Metadata } from "next";

import { BlogCard } from "@/components/cards/blog-card";
import { Newsletter } from "@/components/sections/newsletter";
import { Section, SectionEyebrow } from "@/components/common/section";
import { blogPosts, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Blog | ${site.name}`,
  description:
    "Practical writing on manual testing, API testing, automation, and QA careers.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog | ${site.name}`,
    description:
      "Practical writing on manual testing, API testing, automation, and QA careers.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="hero-gradient">
        <div className="container-page py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Blog</SectionEyebrow>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ideas, guides, and lessons from the QA field
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Long-form writing on how QA works in real teams—no fluff, no
              clickbait.
            </p>
          </div>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Newsletter />
        </div>
      </Section>
    </>
  );
}