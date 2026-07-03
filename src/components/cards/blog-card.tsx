import Link from "next/link";

import type { BlogPost } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read "${post.title}"`}
        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
      >
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="rounded-full">
            {post.category}
          </Badge>

          <span className="text-xs text-muted-foreground">
            {post.readTime} read
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 text-xs text-muted-foreground">
          <time dateTime={post.publishedAt}>{publishedDate}</time>
        </div>
      </Link>
    </article>
  );
}