import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { SiteLayout } from "@/components/layout/site-layout";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site-data";

import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  authors: [
    {
      name: site.author,
    },
  ],

  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
          >
            Skip to content
          </a>

          <SiteLayout>{children}</SiteLayout>

          <Toaster
            position="top-center"
            richColors
            closeButton
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: site.name,
                url: site.url,
                description: site.description,
                sameAs: [
                  site.social.youtube,
                  site.social.linkedin,
                  site.social.github,
                  site.social.facebook,
                  site.social.x,
                ],
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}