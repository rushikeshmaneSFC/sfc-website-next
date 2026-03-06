import type { Metadata } from "next";
import AutomatedMechanismsClient from "@/components/casestudies/Automatedmechanisms/AutomatedMechanismsClient";

export const metadata: Metadata = {
  title: "Automated Response Mechanisms | Blog | St. Fox",
  description:
    "SOAR, AI/ML, EDR and best practices for automated response in cybersecurity. By St. Fox.",
  openGraph: {
    title: "Automated Response Mechanisms | St. Fox",
    description:
      "Advanced automated response mechanisms in cybersecurity. By St. Fox.",
    url: "https://stfox.com/casestudies/Automatedmechanisms",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: ["automated response", "SOAR", "EDR", "cybersecurity", "St. Fox"],
};

export default function AutomatedMechanismsPage() {
  return <AutomatedMechanismsClient />;
}
