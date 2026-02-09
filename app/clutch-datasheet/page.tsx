import type { Metadata } from "next";
import ClutchDatasheetClient from "@/components/clutch/datasheet/ClutchDatasheetClient";

export const metadata: Metadata = {
  title: "CLUTCH Powered by St. Fox | Datasheet | St. Fox",
  description:
    "CLUTCH datasheet: cloud-first security and engineering solutions. Cross-platform automation, industry challenges, solution stack, and customer case study.",
  openGraph: {
    title: "CLUTCH Powered by St. Fox | Datasheet",
    description:
      "Tailored, cloud-first security & engineering solutions for the modern digital enterprise.",
    url: "https://stfox.com/clutch-datasheet",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["CLUTCH", "datasheet", "Cisco Secure Access", "automation", "St. Fox"],
};

export default function ClutchDatasheetPage() {
  return <ClutchDatasheetClient />;
}
