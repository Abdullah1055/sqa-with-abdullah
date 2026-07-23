import Link from "next/link";

export function DashboardSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r bg-background lg:block">
      <div className="flex h-16 items-center border-b px-6">
        <Link
          href="/dashboard"
          className="text-lg font-bold tracking-tight"
        >
          SQA with Abdullah
        </Link>
      </div>

      <nav className="space-y-2 p-4">
        <Link
          href="/dashboard"
          className="block rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/my-courses"
          className="block rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          My Courses
        </Link>

        <Link
          href="/dashboard/progress"
          className="block rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          Learning Progress
        </Link>

        <Link
          href="/dashboard/certificates"
          className="block rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          Certificates
        </Link>

        <Link
          href="/dashboard/profile"
          className="block rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          Profile
        </Link>

        <Link
          href="/dashboard/settings"
          className="block rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}