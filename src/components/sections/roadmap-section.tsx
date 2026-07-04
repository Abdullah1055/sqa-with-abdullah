import {
  BookOpen,
  Briefcase,
  CheckCircle2,
  Bot,
  Server,
  Wrench,
  ArrowRight,
} from "lucide-react";

import {
  Section,
  SectionHeader,
} from "@/components/common/section";
import { roadmap } from "@/lib/site-data";

const roadmapIcons = [
  BookOpen,
  Wrench,
  Server,
  Bot,
  Briefcase,
];

const roadmapColors = [
  {
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
    border: "hover:border-blue-500",
  },
  {
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    border: "hover:border-emerald-500",
  },
  {
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    badge: "bg-orange-100 text-orange-700",
    border: "hover:border-orange-500",
  },
  {
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    badge: "bg-violet-100 text-violet-700",
    border: "hover:border-violet-500",
  },
  {
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    badge: "bg-cyan-100 text-cyan-700",
    border: "hover:border-cyan-500",
  },
];

export function RoadmapSection() {
  return (
    <Section
      id="roadmap"
      ariaLabelledby="roadmap-title"
    >
      <SectionHeader
        id="roadmap-title"
        eyebrow="Learning Roadmap"
        title="Your Complete QA Learning Journey"
        description="A structured step-by-step roadmap designed to transform beginners into confident, job-ready Software Quality Assurance Engineers."
      />

      <div className="relative mx-auto mt-16 max-w-7xl">

        {/* Timeline Line (Desktop) */}

        <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-slate-200 lg:block" />

        <ol className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {roadmap.map((step, index) => {
            const Icon = roadmapIcons[index] ?? BookOpen;
            const color = roadmapColors[index % roadmapColors.length];

            return (
                            <li
                key={step.step}
                className={`group flex min-h-[430px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${color.border}`}
              >
                {/* Step Number */}
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color.iconBg} transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      className={`h-8 w-8 ${color.iconColor}`}
                      aria-hidden="true"
                    />
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${color.badge}`}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {step.description}
                </p>

                {/* Modules */}
                <ul className="mt-6 flex-1 space-y-3">
                  {step.modules.map((module) => (
                    <li
                      key={module}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="mt-1 h-5 w-5 shrink-0 text-emerald-500"
                        aria-hidden="true"
                      />

                      <span className="text-[15px] leading-6 text-slate-700">
                        {module}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-semibold text-slate-500">
                    Step {index + 1}
                  </span>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3">
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}