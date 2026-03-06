import type { Metadata } from "next";
import CloudSecurityClient from "@/components/cloud-security/CloudSecurityClient";

export const metadata: Metadata = {
  title: "Cloud Security Posture Assessment (CSPA) | St. Fox",
  description:
    "Secure your cloud environment with St. Fox Cloud Security Posture Assessment. Identify risks, mitigate vulnerabilities, and enhance your cloud security posture with expert guidance.",
  openGraph: {
    title: "Cloud Security Posture Assessment (CSPA) | St. Fox",
    description:
      "Identify Risks, Mitigate Vulnerabilities, and Enhance Your Cloud Security Posture. St. Fox provides comprehensive cloud security evaluation aligned with the VIGILE Framework.",
    url: "https://stfox.com/cloud-security",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "cloud security",
    "CSPA",
    "cloud security posture assessment",
    "cloud vulnerabilities",
    "St. Fox",
    "VIGILE Framework",
    "AWS security",
    "Azure security",
    "GCP security",
    "cloud compliance",
    "cloud risk assessment",
  ],
};

export default function CloudSecurityPage() {
  return <CloudSecurityClient />;
}
