import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Error 404
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Page not found
        </h1>

        <p className="mt-4 text-base text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist, has been moved,
          or the link may be broken.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover"
          >
            Go home
          </Link>

          <Link
            href="/courses"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Explore courses
          </Link>
        </div>
      </div>
    </div>
  );
}