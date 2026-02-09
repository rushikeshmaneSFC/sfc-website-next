import type { Metadata } from "next";
import SaseClient from "@/components/sase/SaseClient";

export const metadata: Metadata = {
  title: "Managed SASE - Secure Access Service Edge | St. Fox",
  description:
    "Simplify and secure your network with St. Fox Managed SASE. Unified network and security architecture for high-performance access, zero trust, and cloud security.",
  openGraph: {
    title: "Managed SASE - Secure Access Service Edge | St. Fox",
    description:
      "Revolutionize access security with St. Fox Managed SASE. Integrates networking and security into a unified service for secure, fast, and reliable access.",
    url: "https://stfox.com/sase",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "SASE",
    "Secure Access Service Edge",
    "managed SASE",
    "ZTNA",
    "SD-WAN",
    "CASB",
    "SWG",
    "cloud security",
    "St. Fox",
    "zero trust",
    "network security",
  ],
};

export default function SasePage() {
  return <SaseClient />;
}
