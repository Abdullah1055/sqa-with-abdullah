import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-pages";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Cookie Policy — ${site.name}`,
  description: "How this site uses cookies.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: `Cookie Policy — ${site.name}`,
    description: "How this site uses cookies.",
    url: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="July 1, 2026"
      intro="This policy describes the cookies used on this site and how you can control them."
    >
      <h2>What are cookies?</h2>

      <p>
        Small text files placed on your device by a website. They help sites
        remember preferences and understand usage.
      </p>

      <h2>Cookies we use</h2>

      <ul>
        <li>
          <strong>Essential:</strong> required for the site to function
          (session, security).
        </li>
        <li>
          <strong>Analytics:</strong> anonymized usage metrics that help us
          improve content.
        </li>
        <li>
          <strong>Preferences:</strong> remember your theme and non-sensitive
          settings.
        </li>
      </ul>

      <h2>Managing cookies</h2>

      <p>
        You can control or delete cookies through your browser settings.
        Blocking essential cookies may affect core site functionality.
      </p>

      <h2>Third-party cookies</h2>

      <p>
        Embedded content (for example, YouTube) may set its own cookies. We
        recommend reviewing those services&apos; policies.
      </p>

      <h2>Contact</h2>

      <p>Questions? Email hello@sqawithabdullah.com.</p>
    </LegalPage>
  );
}