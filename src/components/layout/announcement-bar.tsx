import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface AnnouncementBarProps {
  message?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function AnnouncementBar({
  message = "Next live cohort registration is open —",
  buttonText = "Reserve your seat",
  buttonHref = "/courses",
}: AnnouncementBarProps) {
  return (
    <div className="w-full bg-foreground text-background">
      <div className="container-page flex items-center justify-center gap-2 py-2 text-xs sm:text-sm">
        <Sparkles
          className="h-3.5 w-3.5 shrink-0 text-primary-soft"
          aria-hidden="true"
        />

        <span className="truncate">{message}</span>

        <Link
          href={buttonHref}
          className="inline-flex items-center gap-1 font-medium underline-offset-4 transition hover:underline"
        >
          {buttonText}

          <ArrowRight
            className="h-3.5 w-3.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}