import type { Metadata } from "next";
import MdrClient from "@/components/mdr/MdrClient";

export const metadata: Metadata = {
  title: "Managed Detection and Response (MDR) | St. Fox",
  description:
    "Proactive cybersecurity with St. Fox MDR. Real-time threat detection, rapid response, expert mitigation, and 24/7 managed detection and response for unmatched protection.",
  openGraph: {
    title: "Managed Detection and Response (MDR) | St. Fox",
    description:
      "Real-time Threat Detection, Rapid Response, and Expert Mitigation. St. Fox MDR combines cutting-edge technology and human expertise for comprehensive protection.",
    url: "https://stfox.com/mdr",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "MDR",
    "Managed Detection and Response",
    "threat detection",
    "incident response",
    "cybersecurity",
    "St. Fox",
    "VIGILE Framework",
    "24/7 monitoring",
    "SOAR",
    "behavioral analytics",
  ],
};

export default function MdrPage() {
  return <MdrClient />;
}
