import type { Metadata } from "next";
import SpecializedServiceClient from "@/components/specialized-service/SpecializedServiceClient";

export const metadata: Metadata = {
  title: "Specialized Services | Security & Compliance | St. Fox",
  description:
    "Proactive security, compliance, and risk management. ISO, SOC 2, VAPT, vCISO, vDPO, Incident Response, and more—delivered by experts.",
  openGraph: {
    title: "Specialized Services | St. Fox",
    description:
      "Proactive Security, Compliance, and Risk Management Built for Resilience, Delivered by Experts.",
    url: "https://stfox.com/SpecializedService",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "Specialized Services",
    "ISO",
    "SOC 2",
    "VAPT",
    "vCISO",
    "vDPO",
    "St. Fox",
  ],
};

export default function SpecializedServicePage() {
  return <SpecializedServiceClient />;
}
