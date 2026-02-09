import type { Metadata } from "next";
import ManagedFirewallClient from "@/components/managed-firewall/ManagedFirewallClient";

export const metadata: Metadata = {
  title: "Managed Firewall | SASE Firewall Management | St. Fox",
  description:
    "Fortify your network perimeter with St. Fox Managed Firewall services. Comprehensive firewall management to protect against evolving cyber threats.",
  openGraph: {
    title: "Managed Firewall | SASE Firewall Management | St. Fox",
    description:
      "Real-time threat monitoring, advanced threat detection, and firewall policy management. Powered by the VIGILE Framework.",
    url: "https://stfox.com/managed",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "Managed Firewall",
    "SASE",
    "firewall management",
    "NGFW",
    "UTM",
    "St. Fox",
    "VIGILE Framework",
    "network security",
  ],
};

export default function ManagedPage() {
  return <ManagedFirewallClient />;
}
