import type { Metadata } from "next";
import IncidentResponseClient from "@/components/incident-response/IncidentResponseClient";

export const metadata: Metadata = {
  title: "Incident Response | IR Services | St. Fox",
  description:
    "Expert incident response to mitigate threats, minimize downtime, and protect your business. 24/7 IR support, containment, and recovery.",
  openGraph: {
    title: "Incident Response | IR Services | St. Fox",
    description:
      "Respond, recover, and prevent with St. Fox Incident Response services.",
    url: "https://stfox.com/incident-response",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "Incident Response",
    "IR",
    "cybersecurity",
    "threat response",
    "St. Fox",
    "VIGILE Framework",
  ],
};

export default function IncidentResponsePage() {
  return <IncidentResponseClient />;
}
