import type { Metadata } from "next";
import SocClient from "@/components/soc/SocClient";

export const metadata: Metadata = {
  title: "SOC 2 Compliance & Assessment Services | St. Fox",
  description:
    "Achieve SOC 2 compliance with St. Fox SOC 2 Assessment Services. Build customer trust and meet compliance standards with expert SOC 2 guidance, gap analysis, risk assessment, and audit preparation.",
  openGraph: {
    title: "SOC 2 Compliance & Assessment Services | St. Fox",
    description:
      "Build Customer Trust and Meet Compliance Standards with Expert SOC 2 Guidance. St. Fox provides end-to-end SOC 2 compliance support including gap analysis, risk assessment, policy development, and audit preparation.",
    url: "https://stfox.com/soc",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "SOC 2",
    "SOC 2 compliance",
    "SOC 2 certification",
    "SOC 2 assessment",
    "cybersecurity compliance",
    "St. Fox",
    "trust principles",
    "security",
    "availability",
    "confidentiality",
    "privacy",
    "audit preparation",
    "gap analysis",
  ],
};

export default function SocPage() {
  return <SocClient />;
}
