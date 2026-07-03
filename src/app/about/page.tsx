import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  GraduationCap,
  Heart,
  Target,
} from "lucide-react";

import { Section, SectionEyebrow, SectionHeader } from "@/components/common/section";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { site, stats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Abdullah",
  description:
    "The story, mission, and teaching philosophy behind SQA with Abdullah.",
};

const values = [
  {
    icon: Target,
    title: "Practical over theoretical",
    body: "Every lesson maps to something you'll actually do on the job.",
  },
  {
    icon: Heart,
    title: "Honest over hyped",
    body: "No inflated promises, no fake statistics — just useful teaching.",
  },
  {
    icon: GraduationCap,
    title: "Long-term over quick wins",
    body: "Skills that keep paying off long after a cohort ends.",
  },
  {
    icon: Compass,
    title: "Career-focused",
    body: "Portfolio, resume, and interview prep are built into the curriculum.",
  },
];

const timeline = [
  {
    year: "Early years",
    title: "Curiosity to career",
    body: "Discovered software testing and started applying it to real products.",
  },
  {
    year: "Industry work",
    title: "Multiple product teams",
    body: "QA across e-commerce, fintech, and SaaS — from manual to automation.",
  },
  {
    year: "Teaching begins",
    title: "Free lessons online",
    body: "Started sharing what worked publicly — YouTube, blog, community.",
  },
  {
    year: "Today",
    title: site.name,
    body: "A structured platform to help the next generation of QAs in Bangladesh.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      {/* Next part */}
    </>
  );
}