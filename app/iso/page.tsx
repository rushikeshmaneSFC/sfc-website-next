import type { Metadata } from "next";
import ISOClient from "@/components/iso/ISOClient";

export const metadata: Metadata = {
  title: "ISO 27001 Certification & Audit Services | St. Fox",
  description:
    "Achieve ISO 27001 certification with St. Fox ISO Audit Services. Streamline compliance, strengthen security, and build trust with expert ISO 27001 certification guidance, gap analysis, and audit preparation.",
  openGraph: {
    title: "ISO 27001 Certification & Audit Services | St. Fox",
    description:
      "Streamline Compliance, Strengthen Security, and Build Trust with ISO 27001 Certification. St. Fox provides comprehensive ISO audit support including gap analysis, documentation, and certification preparation.",
    url: "https://stfox.com/iso",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "ISO 27001",
    "ISO certification",
    "ISO audit",
    "information security",
    "cybersecurity compliance",
    "St. Fox",
    "ISMS",
    "information security management system",
    "gap analysis",
    "audit preparation",
    "security controls",
    "compliance",
  ],
};

export default function ISOPage() {
  return <ISOClient />;
}
