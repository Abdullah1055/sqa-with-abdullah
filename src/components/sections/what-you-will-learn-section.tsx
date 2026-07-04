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
    icon: Bug,
  },
  {
    title: "Automation Testing",
    icon: Bot,
  },
  {
    title: "API Testing",
    icon: Network,
  },
  {
    title: "Performance Testing",
    icon: Gauge,
  },
  {
    title: "Web Testing",
    icon: Globe,
  },
  {
    title: "Mobile App Testing",
    icon: MonitorSmartphone,
  },
  {
    title: "Jira & Agile",
    icon: BadgeCheck,
  },
  {
    title: "Git & GitHub",
    icon: GitBranch,
  },
  {
    title: "SQL Basics",
    icon: Database,
  },
  {
    title: "Test Case Writing",
    icon: FileText,
  },
  {
    title: "Live Projects",
    icon: FolderGit2,
  },
  {
    title: "Resume & Mock Interview",
    icon: Briefcase,
  },
];

export function WhatYouWillLearnSection() {
  return (
    <Section ariaLabelledby="learn-title">
      <SectionHeader
        id="learn-title"
        eyebrow="Course Curriculum"
        title="What You'll Learn"
        description="Master the complete Software Testing roadmap with practical skills, modern tools, live projects, and career-focused training designed for beginners and aspiring QA Engineers."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {learningTopics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Learn through practical examples, assignments, and real industry
                scenarios.
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}