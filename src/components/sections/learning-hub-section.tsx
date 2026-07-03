import Link from "next/link";
import { ArrowRight, BookOpen, PlayCircle } from "lucide-react";

import { BlogCard } from "@/components/cards/blog-card";
import { Newsletter } from "@/components/sections/newsletter";
import {
  Section,
  SectionHeader,
} from "@/components/common/section";
import { blogPosts, site } from "@/lib/site-data";

export function LearningHubSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <Section ariaLabelledby="hub-title">
      <SectionHeader
        id="hub-title"
        eyebrow="Free learning hub"
        title="Start learning today — no cost, no signup"
        description="Free content designed to teach, not to sell."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <article className="rounded-2xl border border-border bg-card p-6">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
            <PlayCircle className="h-5 w-5" aria-hidden="true" />
          </div>

          <h3 className="mt-4 text-base font-semibold">
            YouTube Channel
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Free lessons on manual testing, API testing, and QA career.
          </p>

          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Watch on YouTube
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
            <BookOpen className="h-5 w-5" aria-hidden="true" />
          </div>

          <h3 className="mt-4 text-base font-semibold">
            Latest from the Blog
          </h3>

          <ul className="mt-3 space-y-2 text-sm">
            {featuredPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-foreground/90 hover:text-primary"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/blog"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Read the Blog
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </article>

        <Newsletter />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {featuredPosts.map((post) => (
          <BlogCard
            key={post.slug}
            post={post}
          />
        ))}
      </div>
    </Section>
  );
}