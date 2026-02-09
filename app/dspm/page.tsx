import type { Metadata } from "next";
import DspmClient from "@/components/dspm/DspmClient";

export const metadata: Metadata = {
  title: "Data Security Posture Management (DSPM) | St. Fox",
  description:
    "Ensure data security with St. Fox DSPM services. Discover, protect, and manage data posture for GDPR, DPDPA, and compliance.",
  openGraph: {
    title: "Data Security Posture Management (DSPM) | St. Fox",
    description:
      "Discover risks, protect sensitive data, and ensure compliance with expert DSPM solutions.",
    url: "https://stfox.com/dspm",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "DSPM",
    "Data Security Posture Management",
    "data security",
    "GDPR",
    "DPDPA",
    "compliance",
    "St. Fox",
    "VIGILE Framework",
  ],
};

export default function DspmPage() {
  return <DspmClient />;
}
