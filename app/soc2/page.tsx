import type { Metadata } from "next";
import Soc2Client from "@/components/soc2/Soc2Client";

export const metadata: Metadata = {
  title: "Managed SOC - Security Operations Center | St. Fox",
  description:
    "Always-on defense with St. Fox Managed SOC. Autonomous AI analysts, 24/7 monitoring, expert incident response, and SIEM engineering for enterprise security.",
  openGraph: {
    title: "Managed SOC - Security Operations Center | St. Fox",
    description:
      "Proactive threat detection, expert incident response, and autonomous SOC operations to protect your business 24/7. Built on the VIGILE Framework.",
    url: "https://stfox.com/soc2",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "Managed SOC",
    "Security Operations Center",
    "SOC",
    "SIEM",
    "threat detection",
    "incident response",
    "24/7 monitoring",
    "St. Fox",
    "VIGILE Framework",
    "cybersecurity",
  ],
};

export default function Soc2Page() {
  return <Soc2Client />;
}
