import type { Metadata } from "next";
import AIIntegrationClient from "@/components/casestudies/AIIntegration/AIIntegrationClient";

export const metadata: Metadata = {
  title: "AI Integration & What could go wrong | Blog | St. Fox",
  description:
    "Integrating AI into cybersecurity: challenges, risks, and a balanced approach. By St. Fox.",
  openGraph: {
    title: "AI Integration & What could go wrong | St. Fox",
    description:
      "AI in cybersecurity: optimization of attacks, malware creation, and addressing challenges. By St. Fox.",
    url: "https://stfox.com/casestudies/AIIntegration",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: ["AI integration", "cybersecurity", "St. Fox"],
};

export default function AIIntegrationPage() {
  return <AIIntegrationClient />;
}
