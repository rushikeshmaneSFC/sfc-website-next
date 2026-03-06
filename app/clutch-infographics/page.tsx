import type { Metadata } from "next";
import ClutchInfographicsClient from "@/components/clutch/infographics/ClutchInfographicsClient";

export const metadata: Metadata = {
  title: "CLUTCH Infographics | St. Fox",
  description:
    "CLUTCH Cisco Secure Access capability infographics. SIA and SPA feature comparison and security capabilities.",
  openGraph: {
    title: "CLUTCH Infographics | St. Fox",
    description:
      "Cisco Secure Access capability infographics and feature overview.",
    url: "https://stfox.com/clutch-infographics",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["CLUTCH", "infographics", "Cisco Secure Access", "SIA", "SPA", "St. Fox"],
};

export default function ClutchInfographicsPage() {
  return <ClutchInfographicsClient />;
}
