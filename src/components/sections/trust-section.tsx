export function TrustSection() {
  const highlights = [
    "4+ Years Experience",
    "Real Industry Projects",
    "Live Mentorship",
    "Career Preparation",
    "Lifetime Community",
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why Learn With Us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything You Need to Become a QA Engineer
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Learn through real industry projects, expert mentorship, and a
            career-focused roadmap designed to help you confidently start your
            Software Testing career.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-background px-5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
            >
              <p className="text-sm font-semibold text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}