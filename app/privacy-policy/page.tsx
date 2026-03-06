import type { Metadata } from "next";
import PrivacyPolicyClient from "@/components/legal/privacy-policy/PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | St. Fox",
  description:
    "St. Fox privacy policy. Data collection, use, sharing, cookies, and your choices. DPDP, EU-U.S. DPF, GDPR.",
  openGraph: {
    title: "Privacy Policy | St. Fox",
    description:
      "How we collect, use, and protect your personal information.",
    url: "https://stfox.com/privacy-policy",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["privacy policy", "St. Fox", "DPDP", "GDPR", "data protection"],
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
