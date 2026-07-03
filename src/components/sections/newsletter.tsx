"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email").max(255),
});

interface NewsletterProps {
  compact?: boolean;
}

export function Newsletter({
  compact = false,
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const parsed = newsletterSchema.safeParse({ email });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }

    try {
      setPending(true);

      // TODO:
      // Replace with API call or Server Action.
      await new Promise((resolve) => setTimeout(resolve, 600));

      toast.success(
        "You're subscribed! Watch your inbox for the next QA lesson."
      );

      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div
      className={
        compact
          ? ""
          : "rounded-2xl border border-border bg-surface p-6 md:p-8"
      }
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        <Mail className="h-4 w-4" aria-hidden="true" />
        Newsletter
      </div>

      <h4 className="mt-3 text-lg font-semibold text-foreground">
        Practical QA lessons in your inbox
      </h4>

      <p className="mt-1 text-sm text-muted-foreground">
        One short, useful email — never spam. Unsubscribe anytime.
      </p>

      <form
        onSubmit={onSubmit}
        aria-busy={pending}
        className="mt-4 flex flex-col gap-2 sm:flex-row"
      >
        <label
          htmlFor="newsletter-email"
          className="sr-only"
        >
          Email address
        </label>

        <Input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="h-11 rounded-xl"
        />

        <Button
          type="submit"
          disabled={pending}
          className="h-11 rounded-xl"
        >
          {pending ? "Subscribing..." : "Subscribe"}

          <ArrowRight
            className="h-4 w-4"
            aria-hidden="true"
          />
        </Button>
      </form>
    </div>
  );
}