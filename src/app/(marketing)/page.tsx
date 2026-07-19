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
import { WhatYouWillLearnSection } from "@/components/sections/what-you-will-learn-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";

export const metadata: Metadata = {
  title: "SQA with Abdullah",
  description:
    "Learn Software Quality Assurance through real projects, live mentorship, automation tools, and career-focused training.",
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection />

      {/* Trust & Credibility */}
      <TrustSection />

      {/* Skills Students Will Learn */}
      <WhatYouWillLearnSection />

      {/* Learning Roadmap */}
      <RoadmapSection />

      {/* Featured Courses */}
      <FeaturedCoursesSection />

      {/* Hands-on Projects */}
      <PortfolioSection />

      {/* Why Choose SQA with Abdullah */}
      <WhyChooseSection />

      {/* Student Success Stories */}
      <StudentSuccessSection />

      {/* Free Learning Resources */}
      <LearningHubSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Final Call to Action */}
      <CtaBand />
    </main>
  );
}