import type { Metadata } from "next";
import TpcrmClient from "@/components/tpcrm/TpcrmClient";

export const metadata: Metadata = {
  title: "Third-Party Cyber Risk Management (TPCRM) | St. Fox",
  description:
    "Secure your supply chain with St. Fox TPCRM Services. Identify, assess, and mitigate third-party cyber risks to protect your business ecosystem.",
  openGraph: {
    title: "Third-Party Cyber Risk Management (TPCRM) | St. Fox",
    description:
      "Comprehensive third-party cyber risk management. End-to-end management to secure your supply chain and protect your organization. Built on the VIGILE Framework.",
    url: "https://stfox.com/tpcrm",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "TPCRM",
    "third-party risk management",
    "supply chain security",
    "cyber risk",
    "St. Fox",
    "VIGILE Framework",
    "vendor risk",
    "compliance",
  ],
};

export default function TpcrmPage() {
  return <TpcrmClient />;
}
