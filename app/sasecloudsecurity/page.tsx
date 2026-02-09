import type { Metadata } from "next";
import SaseCloudSecurityClient from "@/components/sase-cloud-security/SaseCloudSecurityClient";

export const metadata: Metadata = {
  title: "SASE Cloud Security | Managed Cloud Security | St. Fox",
  description:
    "Secure your cloud environment with St. Fox Managed Cloud Security. End-to-end protection for cloud infrastructure, compliance, and threat detection.",
  openGraph: {
    title: "SASE Cloud Security | Managed Cloud Security | St. Fox",
    description:
      "Comprehensive cloud security built on the VIGILE Framework. CSPM, CWPP, and multi-cloud support.",
    url: "https://stfox.com/sasecloudsecurity",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "SASE Cloud Security",
    "Managed Cloud Security",
    "CSPM",
    "CWPP",
    "St. Fox",
    "VIGILE Framework",
    "cloud security",
  ],
};

export default function SaseCloudSecurityPage() {
  return <SaseCloudSecurityClient />;
}
