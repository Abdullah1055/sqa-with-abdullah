export function TrustSection() {
  const audiences = [
    "6+ Years Experience",
    "Real Industry Projects",
    "Live Mentorship",
    "Career Support",
    "Community",
  ];

  return (
    <section className="py-10">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by learners across Bangladesh
        </p>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-5">
          {audiences.map((label) => (
            <div
              key={label}
              className="rounded-xl border border-dashed border-border py-4 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}