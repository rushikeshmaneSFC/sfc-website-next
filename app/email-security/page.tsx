import type { Metadata } from "next";
import EmailSecurityClient from "@/components/email-security/EmailSecurityClient";

export const metadata: Metadata = {
  title: "Email Security | Managed Email Protection | St. Fox",
  description:
    "Protect your business from email-based threats with St. Fox Managed Email Security. Detect, prevent, and neutralize phishing, malware and ransomware attacks.",
  openGraph: {
    title: "Email Security | Managed Email Protection | St. Fox",
    description:
      "Comprehensive email security aligned with the VIGILE Framework. Advanced protection for a modern threat landscape.",
    url: "https://stfox.com/email-security",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "Email Security",
    "Managed Email Security",
    "phishing",
    "malware",
    "ransomware",
    "St. Fox",
    "VIGILE Framework",
    "email protection",
  ],
};

export default function EmailSecurityPage() {
  return <EmailSecurityClient />;
}
