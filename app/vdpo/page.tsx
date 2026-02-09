import type { Metadata } from "next";
import VdpoClient from "@/components/vdpo/VdpoClient";

export const metadata: Metadata = {
  title: "vDPO | Virtual Data Protection Officer | St. Fox",
  description:
    "Ensure data privacy compliance with St. Fox vDPO services. Virtual Data Protection Officer expertise for GDPR, regulations, and data protection.",
  openGraph: {
    title: "vDPO | Virtual Data Protection Officer | St. Fox",
    description:
      "Simplified data protection with on-demand expertise. VIGILE Framework for data privacy.",
    url: "https://stfox.com/vdpo",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "vDPO",
    "Virtual Data Protection Officer",
    "data privacy",
    "GDPR",
    "compliance",
    "St. Fox",
    "VIGILE Framework",
    "data protection",
  ],
};

export default function VdpoPage() {
  return <VdpoClient />;
}
