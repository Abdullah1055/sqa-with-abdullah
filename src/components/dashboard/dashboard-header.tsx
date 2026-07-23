import { UserNav } from "./user-nav";

export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">
          Dashboard
        </h1>

        <p className="text-sm text-muted-foreground">
          Welcome back! Continue your learning journey.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <UserNav />
      </div>
    </header>
  );
}