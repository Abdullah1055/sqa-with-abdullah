import {
  Award,
  BookOpen,
  Clock3,
  TrendingUp,
} from "lucide-react";

import { DashboardStatCard } from "@/components/dashboard/dashboard-stat-card";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, Abdullah
        </h1>

        <p className="mt-2 text-muted-foreground">
          Continue your QA learning journey with SQA with Abdullah.
        </p>
      </section>

      {/* Stats */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard
          title="My Courses"
          value="2"
          description="Active Courses"
          icon={BookOpen}
        />

        <DashboardStatCard
          title="Learning Progress"
          value="45%"
          description="Course Completion"
          icon={TrendingUp}
        />

        <DashboardStatCard
          title="Certificates"
          value="1"
          description="Earned"
          icon={Award}
        />

        <DashboardStatCard
          title="Recent Activity"
          value="Today"
          description="Last Login"
          icon={Clock3}
        />
      </section>
    </div>
  );
}