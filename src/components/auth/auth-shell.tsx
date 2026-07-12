import type { ReactNode } from "react";

interface AuthShellProps {
  children: ReactNode;
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Branding Section */}
      <div className="hidden bg-primary text-primary-foreground lg:flex lg:flex-col lg:justify-center lg:px-16">
        <div className="max-w-lg">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] opacity-80">
            SQA with Abdullah
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Learn Software Testing from Industry Experts.
          </h1>

          <p className="mt-6 text-lg opacity-90">
            Join live classes, work on real-world projects, build your
            portfolio, and become a job-ready QA Engineer.
          </p>

          <ul className="mt-10 space-y-4 text-base">
            <li>✅ 40+ Live Interactive Classes</li>
            <li>✅ Real Industry Projects</li>
            <li>✅ Manual + Automation Testing</li>
            <li>✅ Interview & Career Support</li>
          </ul>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex items-center justify-center bg-background px-6 py-12">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}