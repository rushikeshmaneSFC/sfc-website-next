import type { Metadata } from "next";
import VaptClient from "@/components/vapt/VaptClient";

export const metadata: Metadata = {
  title: "VAPT Services - Vulnerability Assessment & Penetration Testing | St. Fox",
  description:
    "Uncover and fix vulnerabilities with St. Fox VAPT Services. Proactively identify security gaps and simulate real-world attacks to fortify your defenses. Comprehensive testing for web apps, networks, and cloud security.",
  openGraph: {
    title: "VAPT Services - Vulnerability Assessment & Penetration Testing",
    description:
      "St. Fox VAPT Services combine automated tools and expert-driven testing to identify, assess and remediate vulnerabilities across your IT environment.",
    url: "https://stfox.com/vapt",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "VAPT",
    "Vulnerability Assessment",
    "Penetration Testing",
    "cybersecurity",
    "St. Fox",
    "security testing",
    "web application security",
    "network security",
    "cloud security",
    "compliance",
    "PCI-DSS",
    "ISO 27001",
    "GDPR",
    "HIPAA",
  ],
};

export default function VaptPage() {
  return <VaptClient />;
}
