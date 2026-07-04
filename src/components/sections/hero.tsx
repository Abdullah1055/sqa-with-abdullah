import Link from "next/link";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Users,
  Rocket,
  CalendarDays,
  GraduationCap,
  BookOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/common/section";
import { stats } from "@/lib/site-data";

const features = [
  {
    icon: ShieldCheck,
    title: "Real Industry Projects",
    description: "Work on practical QA projects used in real software companies.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Live Mentorship",
    description: "Learn directly from experienced QA Engineers through live sessions.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Rocket,
    title: "Career Preparation",
    description: "Resume review, interview preparation and career guidance.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
      />

      <div className="container-page relative pt-16 pb-20 md:pt-24 md:pb-28">

        <div className="mx-auto max-w-6xl text-center">

          <div className="flex justify-center">
            <SectionEyebrow>
              Next Live Batch • Enrollment Open
            </SectionEyebrow>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Master Software Testing
            <br />

            <span className="mt-2 block text-3xl font-bold text-gradient sm:text-4xl lg:text-5xl">
               From Beginner to Job-Ready QA Engineer
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-7xl text-lg leading-9 text-muted-foreground">
            Build real QA skills through Manual Testing, Automation Testing,
            API Testing, Performance Testing, live projects, expert mentorship,
            and career-focused guidance designed to help you confidently launch
            your Software Testing career.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button
              asChild
              size="lg"
              className="h-14 rounded-2xl px-8 text-base font-semibold shadow-lg"
            >
              <Link href="/contact">
                Join Free Live Class
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-2xl px-8 text-base"
            >
              <Link href="/courses">
                <Play className="mr-2 h-5 w-5" />
                Explore Courses
              </Link>
            </Button>

          </div>

          {/* Feature Cards */}

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-border bg-white p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.iconBg}`}
                  >
                    <Icon
                      className={`h-8 w-8 ${feature.iconColor}`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

        {/* Statistics Cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const styles = [
              {
                icon: CalendarDays,
                bg: "bg-blue-50",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
              },
              {
                icon: GraduationCap,
                bg: "bg-emerald-50",
                iconBg: "bg-emerald-100",
                iconColor: "text-emerald-600",
              },
              {
                icon: BookOpen,
                bg: "bg-orange-50",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
              },
              {
                icon: Rocket,
                bg: "bg-violet-50",
                iconBg: "bg-violet-100",
                iconColor: "text-violet-600",
              },
            ];

            const style = styles[index % styles.length];
            const Icon = style.icon;

            return (
              <div
                key={item.label}
                className={`group rounded-3xl border border-border ${style.bg} p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.iconBg}`}
                >
                  <Icon className={`h-7 w-7 ${style.iconColor}`} />
                </div>

                <div className="mt-6 text-4xl font-extrabold tracking-tight text-foreground">
                  {item.value}
                </div>

                <p className="mt-3 text-base font-medium text-muted-foreground">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}