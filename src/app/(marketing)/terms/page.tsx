import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-pages";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Terms & Conditions — ${site.name}`,
  description: `Terms of use for ${site.name}.`,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: `Terms & Conditions — ${site.name}`,
    description: `Terms of use for ${site.name}.`,
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="July 1, 2026"
      intro={`These terms describe how you may use ${site.name}. By accessing the site or enrolling in a course, you agree to these terms.`}
    >
      <h2>Use of the site</h2>

      <p>
        You agree to use the site lawfully and not to interfere with its
        operation. You may not scrape, republish, or resell content without
        written permission.
      </p>

      <h2>Course enrollment</h2>

      <ul>
        <li>Enrollment is per learner and non-transferable.</li>
        <li>Live cohorts follow a schedule communicated at enrollment.</li>
        <li>
          Refund terms, if any, will be shared at the point of purchase.
        </li>
      </ul>

      <h2>Intellectual property</h2>

      <p>
        Course materials, articles, and templates are owned by {site.name}
        unless stated otherwise. You may use them for personal learning;
        commercial redistribution requires written permission.
      </p>

      <h2>User submissions</h2>

      <p>
        By submitting assignments or feedback, you grant us a limited right to
        use them for teaching purposes (for example, anonymized review) unless
        you object.
      </p>

      <h2>Disclaimers</h2>

      <p>
        Content is provided for educational purposes. We do our best to keep it
        accurate but do not guarantee specific career or salary outcomes.
      </p>

      <h2>Limitation of liability</h2>

      <p>
        To the extent permitted by law, {site.name} is not liable for any
        indirect or incidental damages arising from your use of the site.
      </p>

      <h2>Changes to these terms</h2>

      <p>
        We may update these terms from time to time. Continued use of the site
        after changes constitutes acceptance.
      </p>
    </LegalPage>
  );
}