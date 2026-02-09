import type { Metadata } from "next";
import DemocraticElectionClient from "@/components/casestudies/democratic-election/DemocraticElectionClient";

export const metadata: Metadata = {
  title: "Democratic Elections and AI | Blog | St. Fox",
  description:
    "Safeguarding democracies in the AI era. Deepfakes, microtargeting, and electoral integrity. Case studies on India and the US. By St. Fox.",
  openGraph: {
    title: "Democratic Elections and AI | St. Fox",
    description:
      "Navigating the digital wave: AI, deepfakes, and democratic elections. Strategies for mitigation and a call to action.",
    url: "https://stfox.com/casestudies/democratic-election",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "democratic elections",
    "AI",
    "deepfake",
    "electoral integrity",
    "St. Fox",
  ],
};

export default function DemocraticElectionPage() {
  return <DemocraticElectionClient />;
}
