import type { ElementType, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClass?: string;
  as?: ElementType;
  id?: string;
  ariaLabelledby?: string;
}

export function Section({
  children,
  className = "",
  containerClass = "",
  as: Component = "section",
  id,
  ariaLabelledby,
}: SectionProps) {
  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className={`container-page md:px-6 lg:px-8 ${containerClass}`}>
        {children}
      </div>
    </Component>
  );
}

interface SectionEyebrowProps {
  children: ReactNode;
}

export function SectionEyebrow({
  children,
}: SectionEyebrowProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-primary"
      />
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <header
      className={
        isCentered
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      {eyebrow && (
        <div className={isCentered ? "flex justify-center" : ""}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </div>
      )}

      <h2
        id={id}
        className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}