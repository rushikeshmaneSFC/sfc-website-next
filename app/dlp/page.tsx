import type { Metadata } from "next";
import DlpClient from "@/components/dlp/DlpClient";

export const metadata: Metadata = {
  title: "Data Loss Prevention (DLP) | St. Fox",
  description:
    "Prevent data breaches with St. Fox DLP services. Protect sensitive data, ensure compliance with GDPR, DPDPA, and other regulations.",
  openGraph: {
    title: "Data Loss Prevention (DLP) | St. Fox",
    description:
      "Protect sensitive data, prevent unauthorized access, and ensure compliance with expert DLP solutions.",
    url: "https://stfox.com/dlp",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "DLP",
    "Data Loss Prevention",
    "data protection",
    "GDPR",
    "DPDPA",
    "compliance",
    "St. Fox",
    "VIGILE Framework",
  ],
};

export default function DlpPage() {
  return <DlpClient />;
}
