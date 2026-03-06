import type { Metadata } from "next";
import ManagedServicesClient from "@/components/managed-services/ManagedServicesClient";

export const metadata: Metadata = {
  title: "Managed Services | Managed Cybersecurity | St. Fox",
  description:
    "End-to-end managed cybersecurity to protect, detect, and respond everywhere your business operates. SOC, MDR, SASE, and more.",
  openGraph: {
    title: "Managed Services | Managed Cybersecurity | St. Fox",
    description:
      "Managed Identity, SOC, MDR, Cloud Security, SASE, Email Security, and Firewall services.",
    url: "https://stfox.com/managed-services",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "Managed Services",
    "managed cybersecurity",
    "SOC",
    "MDR",
    "St. Fox",
  ],
};

export default function ManagedServicesPage() {
  return <ManagedServicesClient />;
}
