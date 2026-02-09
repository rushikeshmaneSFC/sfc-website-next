import type { Metadata } from "next";
import AttackMitigationClient from "@/components/casestudies/attack-migitation/AttackMitigationClient";

export const metadata: Metadata = {
  title: "AI Attack Mitigation | Blog | St. Fox",
  description:
    "AI-driven attacks and defense in 2024. eBPF, Package Illusion, HUMINT, and the role of human consultants in the age of AI. By St. Fox.",
  openGraph: {
    title: "AI Attack Mitigation | St. Fox",
    description:
      "Proactive and intelligent cybersecurity: AI threats, behavioral security, and human consultants. By St. Fox.",
    url: "https://stfox.com/casestudies/attack-migitation",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "AI attack mitigation",
    "cybersecurity",
    "eBPF",
    "HUMINT",
    "St. Fox",
  ],
};

export default function AttackMitigationPage() {
  return <AttackMitigationClient />;
}
