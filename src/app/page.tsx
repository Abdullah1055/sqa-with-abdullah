import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { FeaturedCoursesSection } from "@/components/sections/featured-courses-section";
import { HeroSection } from "@/components/sections/hero";
import { LearningHubSection } from "@/components/sections/learning-hub-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { RoadmapSection } from "@/components/sections/roadmap-section";
import { StudentSuccessSection } from "@/components/sections/student-success-section";
import { TrustSection } from "@/components/sections/trust-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";

export const metadata: Metadata = {
  title: "SQA with Abdullah",
  description:
    "Learn Software Quality Assurance with practical courses, projects, blogs, and career guidance.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <RoadmapSection />
      <FeaturedCoursesSection />
      <PortfolioSection />
      <WhyChooseSection />
      <StudentSuccessSection />
      <LearningHubSection />
      <FaqSection />
      <CtaBand />
    </main>
  );
}