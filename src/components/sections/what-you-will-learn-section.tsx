import {
  BadgeCheck,
  Bot,
  Briefcase,
  Bug,
  Database,
  FileText,
  FolderGit2,
  Gauge,
  GitBranch,
  Globe,
  MonitorSmartphone,
  Network,
} from "lucide-react";

import {
  Section,
  SectionHeader,
} from "@/components/common/section";

const learningTopics = [
  {
    title: "Manual Testing",
    description:
      "Learn testing concepts, test case design, bug reporting and quality assurance.",
    icon: Bug,
  },
  {
    title: "Automation Testing",
    description:
      "Master Selenium, Cypress and automation frameworks with hands-on projects.",
    icon: Bot,
  },
  {
    title: "API Testing",
    description:
      "Test REST APIs using Postman, Swagger and real-world API workflows.",
    icon: Network,
  },
  {
    title: "Performance Testing",
    description:
      "Learn JMeter, load testing, performance analysis and optimization.",
    icon: Gauge,
  },
  {
    title: "Web Testing",
    description:
      "Practice browser testing, validation techniques and responsive testing.",
    icon: Globe,
  },
  {
    title: "Mobile App Testing",
    description:
      "Understand Android & iOS application testing with real devices.",
    icon: MonitorSmartphone,
  },
  {
    title: "Jira & Agile",
    description:
      "Work with Scrum, Jira boards, sprint planning and issue tracking.",
    icon: BadgeCheck,
  },
  {
    title: "Git & GitHub",
    description:
      "Learn version control, repositories, branching and collaboration.",
    icon: GitBranch,
  },
  {
    title: "SQL Basics",
    description:
      "Write SQL queries, joins and validations required for Software Testing.",
    icon: Database,
  },
  {
    title: "Test Case Writing",
    description:
      "Create professional test cases, scenarios and QA documentation.",
    icon: FileText,
  },
  {
    title: "Live Projects",
    description:
      "Apply everything through industry-style real QA projects.",
    icon: FolderGit2,
  },
  {
    title: "Resume & Mock Interview",
    description:
      "Build your QA CV and prepare through mock interview sessions.",
    icon: Briefcase,
  },
];

export function WhatYouWillLearnSection() {
  return (
    <Section ariaLabelledby="learn-title">
      <SectionHeader
        id="learn-title"
        eyebrow="Core Skills You'll Master"
        title="What You'll Learn"
        description="Master the complete Software Testing roadmap with practical skills, modern tools, live projects, and career-focused training designed for beginners and aspiring QA Engineers."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {learningTopics.map((item) => {
          const Icon = item.icon;

          return (
                        <div
              key={item.title}
              className="group flex min-h-[250px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-600">
                {item.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}