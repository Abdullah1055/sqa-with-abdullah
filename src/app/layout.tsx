import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site-data";

import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

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