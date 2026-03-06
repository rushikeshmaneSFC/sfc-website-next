import type { Metadata } from "next";
import IdentityAssessmentClient from "@/components/identity-assessment/IdentityAssessmentClient";

export const metadata: Metadata = {
  title: "Identity Assessment | IAM Evaluation | St. Fox",
  description:
    "Secure access and prevent breaches with St. Fox Identity Assessment services. Evaluate and enhance your Identity and Access Management (IAM) to protect critical assets.",
  openGraph: {
    title: "Identity Assessment | IAM Evaluation | St. Fox",
    description:
      "Strengthen identity security across your organization. St. Fox Identity Assessment provides comprehensive IAM evaluation guided by the VIGILE Framework.",
    url: "https://stfox.com/identity-assessment",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "Identity Assessment",
    "IAM",
    "Identity and Access Management",
    "PAM",
    "cybersecurity",
    "St. Fox",
    "VIGILE Framework",
    "identity security",
    "access control",
  ],
};

export default function IdentityAssessmentPage() {
  return <IdentityAssessmentClient />;
}
