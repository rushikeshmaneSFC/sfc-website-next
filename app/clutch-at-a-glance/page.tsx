import type { Metadata } from "next";
import ClutchAtAGlanceClient from "@/components/clutch/at-a-glance/ClutchAtAGlanceClient";

export const metadata: Metadata = {
  title: "CLUTCH by St. Fox | At a Glance | St. Fox",
  description:
    "CLUTCH by St. Fox - Cross-platform automation for Cisco Secure Access. Cloud-first security and engineering solutions for modern businesses.",
  openGraph: {
    title: "CLUTCH by St. Fox | At a Glance",
    description:
      "Cross-platform automation solution for Cisco Secure Access deployment.",
    url: "https://stfox.com/clutch-at-a-glance",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["CLUTCH", "Cisco Secure Access", "automation", "VIGILE", "St. Fox"],
};

export default function ClutchAtAGlancePage() {
  return <ClutchAtAGlanceClient />;
}
