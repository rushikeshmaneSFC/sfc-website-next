import type { Metadata } from "next";
import CompromiseAssessmentClient from "@/components/compromise-assessment/CompromiseAssessmentClient";

export const metadata: Metadata = {
  title: "Compromise Assessment | Threat Hunting | St. Fox",
  description:
    "Uncover hidden threats with St. Fox Compromise Assessment services. Detect and eliminate threat actors lurking in your network before they cause damage.",
  openGraph: {
    title: "Compromise Assessment | Threat Hunting | St. Fox",
    description:
      "Comprehensive threat discovery and mitigation. St. Fox uses AI-powered tools and expert forensic analysis to identify, analyze, and mitigate hidden compromises.",
    url: "https://stfox.com/Compromise-Assessment",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "Compromise Assessment",
    "threat hunting",
    "APT",
    "forensic investigation",
    "cybersecurity",
    "St. Fox",
    "VIGILE Framework",
    "threat detection",
    "remediation",
  ],
};

export default function CompromiseAssessmentPage() {
  return <CompromiseAssessmentClient />;
}
