import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "VIGILE Framework - St. Fox Cybersecurity",
  description:
    "Transform your cybersecurity strategy with St. Fox's comprehensive VIGILE Framework - designed for enterprises to combat evolving threats with confidence. Innovate Fearlessly, Protect Relentlessly.",
  openGraph: {
    title: "VIGILE Framework - Innovate Fearlessly, Protect Relentlessly",
    description:
      "The VIGILE Framework by St. Fox is a strategic approach to cybersecurity that ensures continuous protection, innovation, and compliance for CIOs, DPOs, and CISOs.",
    url: "https://stfox.com/vigile",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "VIGILE Framework",
    "cybersecurity",
    "St. Fox",
    "enterprise security",
    "CISO",
    "CIO",
    "DPO",
    "managed security",
    "cyber resilience",
  ],
};

export default function VigilePage() {
  return <HomeClient />;
}
