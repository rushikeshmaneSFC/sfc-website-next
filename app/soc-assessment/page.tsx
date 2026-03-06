import type { Metadata } from "next";
import SocAssessmentClient from "@/components/soc-assessment/SocAssessmentClient";

export const metadata: Metadata = {
  title: "SOC Assessment | Security Operations Center | St. Fox",
  description:
    "Optimize your SOC with St. Fox SOC Assessment services. Uncover gaps, enhance efficiency, and fortify your Security Operations Center.",
  openGraph: {
    title: "SOC Assessment | St. Fox",
    description:
      "Uncover Gaps, Enhance Efficiency, and Fortify Your Security Operations Center for Peak Performance.",
    url: "https://stfox.com/soc-assessment",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["SOC Assessment", "Security Operations Center", "St. Fox", "VIGILE"],
};

export default function SocAssessmentPage() {
  return <SocAssessmentClient />;
}
