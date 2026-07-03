import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="SQA with Abdullah"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm ring-1 ring-primary/20 transition-transform group-hover:scale-[1.03]"
      >
        <span className="text-sm font-bold tracking-tight">SQA</span>
      </span>

      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight">
          SQA with Abdullah
        </span>

        <span className="text-[11px] text-muted-foreground">
          Practical QA Training
        </span>
      </span>
    </Link>
  );
}