"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorPageProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);

  }, [error]);

  const handleRetry = () => {
    router.refresh();
    reset();
  };

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-destructive">
          Something went wrong
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          This page didn&apos;t load
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          You can try again or head back home. If the problem continues,
          please contact us.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={handleRetry}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover"
          >
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}