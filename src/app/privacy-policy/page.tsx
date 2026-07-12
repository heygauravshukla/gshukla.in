import Link from "next/link";
import { Metadata } from "next";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for gshukla.in, explaining how Gaurav Shukla collects, uses, and protects your information when you visit the site.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const SITE_URL = "gshukla.in";
const CONTACT_EMAIL = "heygauravshukla@gmail.com";
const EFFECTIVE_DATE = "July 12, 2026";

const sections = [
  {
    id: "collect",
    title: "1. Information We Collect",
    body: (
      <>
        <p>
          We aim to collect as little personal information as necessary. The
          Site may collect:
        </p>
        <h3>a) Automatically Collected Information</h3>
        <p>
          The Site does not use analytics, tracking, or advertising cookies. Our
          hosting provider may automatically log basic technical information as
          part of standard server operation, such as:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Date and time of access</li>
        </ul>
        <p>
          This information is used only for security, troubleshooting, and
          maintaining the Site, and is not used to track or profile individual
          visitors.
        </p>
        <h3>b) Information You Provide Directly</h3>
        <p>
          The Site does not have a contact form. If you reach out via the email
          address or social media links provided on the Site, we may receive
          your name, email address (or social media handle), and any information
          you choose to include in your message. We do not knowingly collect
          sensitive personal information (such as financial, health, or
          government ID data) through this Site.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "2. Cookies and Tracking Technologies",
    body: (
      <>
        <p>
          The Site does not use analytics, advertising, or tracking cookies, and
          does not use any non-essential cookies. Because we do not set
          non-essential cookies, we do not use a cookie consent banner.
        </p>
        <p>
          Our hosting provider may use strictly necessary technical mechanisms
          to serve the Site reliably, but these do not track you across sessions
          or websites. If this changes in the future (for example, if we add
          analytics tools), we will update this section and implement an
          appropriate consent mechanism.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "3. How We Use Your Information",
    body: (
      <>
        <p>We use collected information to:</p>
        <ul>
          <li>Operate, maintain, and secure the Site</li>
          <li>Respond to inquiries sent via email or social media</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing (For Visitors in the EU/UK)",
    body: (
      <>
        <p>
          If you are located in the European Economic Area (EEA) or United
          Kingdom, we process your personal data based on:
        </p>
        <ul>
          <li>
            <span>Legitimate interests</span> — such as maintaining the security
            and technical operation of the Site
          </li>
          <li>
            <span>Contractual necessity</span> — if you contact us regarding a
            potential business engagement
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "5. Data Sharing and Third Parties",
    body: (
      <>
        <p>We may share information with:</p>
        <ul>
          <li>
            <span>Our hosting provider</span>, which processes basic technical
            data as part of operating the Site
          </li>
          <li>
            <span>Legal authorities</span>, if required to comply with a legal
            obligation, court order, or governmental request
          </li>
        </ul>
        <p>
          We do not share personal information with third parties for their own
          marketing purposes.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "6. Data Retention",
    body: (
      <p>
        We retain information only as long as necessary to fulfill the purposes
        outlined in this policy, unless a longer retention period is required by
        law.
      </p>
    ),
  },
  {
    id: "rights",
    title: "7. Your Privacy Rights",
    body: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent (where processing is based on consent)</li>
          <li>Data portability (where applicable)</li>
        </ul>
        <p>
          <span>For EU/UK visitors:</span> These rights are provided under the
          General Data Protection Regulation (GDPR).
        </p>
        <p>
          <span>For California residents:</span> You may have rights under the
          California Consumer Privacy Act (CCPA), including the right to know
          what personal information is collected and to request deletion.
        </p>
        <p>
          To exercise any of these rights, contact us using the details in
          Section 10.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "8. International Data Transfers",
    body: (
      <p>
        Since our visitors are located worldwide, your information may be
        transferred to and processed in countries other than your own, which may
        have different data protection laws. Where required, we take steps to
        ensure appropriate safeguards are in place for such transfers.
      </p>
    ),
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    body: (
      <p>
        The Site is not directed at children under 16, and we do not knowingly
        collect personal information from children. If you believe a child has
        provided us with personal information, please contact us so we can
        remove it.
      </p>
    ),
  },
  {
    id: "contact",
    title: "10. Contact Us",
    body: (
      <p>
        If you have questions about this Privacy Policy or wish to exercise your
        privacy rights, please contact us at:
        <br />
        <span>Email:</span>{" "}
        <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
        <br />
        <span>Website:</span>{" "}
        <Link href={`https://${SITE_URL}`}>{SITE_URL}</Link>
      </p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with a revised "Effective Date." We encourage you to
        review this policy periodically.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <main className="container my-12">
        <div className="typeset typeset-docs">
          <h1>Privacy Policy</h1>
          <p>Effective Date: {EFFECTIVE_DATE}</p>

          <p>
            This Privacy Policy explains how Gaurav Shukla ("we," "us," or
            "our") collects, uses, and protects information when you visit{" "}
            <Link href={`https://${SITE_URL}`}>{SITE_URL}</Link> (the "Site").
            By using the Site, you agree to the collection and use of
            information in accordance with this policy.
          </p>

          <div>
            {sections.map((s) => (
              <section key={s.id} id={s.id}>
                <h2>{s.title}</h2>
                <div>{s.body}</div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
