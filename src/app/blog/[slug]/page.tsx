import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import { BlogCard } from "@/components/cards/blog-card";
import { Section } from "@/components/common/section";
import { Newsletter } from "@/components/sections/newsletter";
import { Badge } from "@/components/ui/badge";
import { blogPosts, site } from "@/lib/site-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | ${site.name}`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | ${site.name}`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article>
        <section className="hero-gradient border-b border-border">
          <div className="container-page py-14 md:py-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Blog
            </Link>

            <div className="mx-auto mt-6 max-w-3xl text-center">
              <Badge
                variant="outline"
                className="rounded-full"
              >
                {post.category}
              </Badge>

              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {post.title}
              </h1>

              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />

                  {new Date(post.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                </span>

                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime} read
                </span>

                <span>By {site.author}</span>
              </div>
            </div>
          </div>
        </section>
                <Section className="!pt-12">
          <div className="mx-auto max-w-2xl space-y-6 text-base leading-relaxed text-foreground/90">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Section>
      </article>

      <Section className="bg-surface-2/50">
        <div className="mx-auto max-w-3xl">
          <Newsletter />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold tracking-tight">
          Continue reading
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {related.map((relatedPost) => (
            <BlogCard
              key={relatedPost.slug}
              post={relatedPost}
            />
          ))}
        </div>
      </Section>
          </>
  );
}