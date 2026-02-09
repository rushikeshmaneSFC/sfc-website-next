import type { Metadata } from "next";
import PrivacyOpsClient from "@/components/privacy-ops/PrivacyOpsClient";

export const metadata: Metadata = {
  title: "Privacy Ops | Data Privacy Compliance | St. Fox",
  description:
    "Simplify data privacy compliance with St. Fox Privacy Ops services. Streamline privacy operations, GDPR, DPDPA, and build trust.",
  openGraph: {
    title: "Privacy Ops | Data Privacy Compliance | St. Fox",
    description:
      "End-to-end privacy operations for seamless compliance. VIGILE Framework for data privacy.",
    url: "https://stfox.com/privacy-ops",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "Privacy Ops",
    "data privacy",
    "GDPR",
    "DPDPA",
    "compliance",
    "St. Fox",
    "VIGILE Framework",
    "DSAR",
  ],
};

export default function PrivacyOpsPage() {
  return <PrivacyOpsClient />;
}
