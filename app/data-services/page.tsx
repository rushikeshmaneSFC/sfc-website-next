import type { Metadata } from "next";
import DataServicesClient from "@/components/data-services/DataServicesClient";

export const metadata: Metadata = {
  title: "Data Services | Security & Compliance | St. Fox",
  description:
    "Proactive security, compliance, and risk management built for resilience. Privacy Ops, DSPM, DLP delivered by experts.",
  openGraph: {
    title: "Data Services | St. Fox",
    description:
      "Proactive Security, Compliance, and Risk Management Built for Resilience, Delivered by Experts.",
    url: "https://stfox.com/data-services",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["Data Services", "compliance", "security", "St. Fox", "DSPM", "DLP", "Privacy Ops"],
};

export default function DataServicesPage() {
  return <DataServicesClient />;
}
