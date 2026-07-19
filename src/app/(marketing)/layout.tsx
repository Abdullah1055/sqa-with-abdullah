import type { ReactNode } from "react";

import { SiteLayout } from "@/components/layout/site-layout";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return <SiteLayout>{children}</SiteLayout>;
}