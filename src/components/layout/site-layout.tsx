import type { PropsWithChildren } from "react";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

interface SiteLayoutProps extends PropsWithChildren {
  hideAnnouncement?: boolean;
}

export function SiteLayout({
  children,
  hideAnnouncement = false,
}: SiteLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      {!hideAnnouncement && <AnnouncementBar />}

      <Navbar />

      <main id="main" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}