import type { Metadata } from "next";
import AiSecurityClient from "@/components/ai-security/AiSecurityClient";

export const metadata: Metadata = {
  title: "AI Security | AI for Security | St. Fox",
  description:
    "Harness AI to revolutionize cybersecurity. St. Fox AI for Security delivers proactive threat detection, AI system protection, and VIGILE Framework-driven solutions.",
  openGraph: {
    title: "AI Security | AI for Security | St. Fox",
    description:
      "AI-driven threat detection, securing AI systems, and expert cybersecurity innovation.",
    url: "https://stfox.com/ai-security",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "AI Security",
    "AI for Security",
    "cybersecurity",
    "threat detection",
    "St. Fox",
    "VIGILE Framework",
  ],
};

export default function AiSecurityPage() {
  return <AiSecurityClient />;
}
