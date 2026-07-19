import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/layout/legal-pages";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How ${site.name} collects, uses, and protects your information.`,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: `Privacy Policy — ${site.name}`,
    description: `How ${site.name} collects, uses, and protects your information.`,
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 1, 2026"
      intro={`This Privacy Policy describes how ${site.name} collects, uses, and safeguards your personal information when you use this website and services.`}
    >
      <p>
        This policy applies to visitors, learners, and anyone who contacts us
        through the site. By using the site, you agree to the practices
        described below. If you do not agree, please stop using the site.
      </p>

      <h2>Information we collect</h2>

      <ul>
        <li>Contact details you submit (name, email, message).</li>
        <li>Optional account details if you register for a student account.</li>
        <li>
          Basic analytics such as pages viewed, device type, and referring
          source.
        </li>
      </ul>

      <h2>How we use your information</h2>

      <ul>
        <li>To reply to your enquiries and provide requested resources.</li>
        <li>To operate and improve courses, content, and platform features.</li>
        <li>
          To send occasional emails you have subscribed to. You can unsubscribe
          anytime.
        </li>
      </ul>

      <h2>Sharing</h2>

      <p>
        We do not sell your personal information. We may share limited data
        with service providers who help us operate the site (for example, email
        delivery or analytics), only to the extent necessary.
      </p>

      <h2>Cookies</h2>

      <p>
        We use cookies to remember preferences and understand usage. See our{" "}
        <Link href="/cookies">Cookie Policy</Link> for details.
      </p>

      <h2>Data retention</h2>

      <p>
        We keep personal information only as long as needed for the purposes
        above, or as required by law. You may request deletion of your account
        and associated data at any time.
      </p>

      <h2>Your rights</h2>

      <ul>
        <li>Request a copy of the data we hold about you.</li>
        <li>Ask us to correct or delete your data.</li>
        <li>Opt out of marketing communications.</li>
      </ul>

      <h2>Contact</h2>

      <p>
        Questions about this policy? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}