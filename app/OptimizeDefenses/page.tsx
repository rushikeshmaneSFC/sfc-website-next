import type { Metadata } from "next";
import OptimizeDefensesClient from "@/components/optimize-defenses/OptimizeDefensesClient";

export const metadata: Metadata = {
  title: "Optimize Defenses | Red, Purple & Blue Teaming | St. Fox",
  description:
    "Test, strengthen, and optimize your defenses with St. Fox Red, Purple, and Blue Teaming services. Simulate real-world attacks, enhance collaboration, and fortify your cybersecurity posture.",
  openGraph: {
    title: "Optimize Defenses | Red, Purple & Blue Teaming | St. Fox",
    description:
      "Comprehensive Red, Purple, and Blue Teaming for enterprise-grade security. St. Fox helps you simulate, collaborate, and strengthen defenses against advanced threats.",
    url: "https://stfox.com/OptimizeDefenses",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "Optimize Defenses",
    "Red Teaming",
    "Purple Teaming",
    "Blue Teaming",
    "cybersecurity",
    "St. Fox",
    "VIGILE Framework",
    "threat simulation",
    "security assessment",
  ],
};

export default function OptimizeDefensesPage() {
  return <OptimizeDefensesClient />;
}
