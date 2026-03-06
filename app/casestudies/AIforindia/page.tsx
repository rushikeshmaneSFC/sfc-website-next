import type { Metadata } from "next";
import AIForIndiaClient from "@/components/casestudies/AIforindia/AIForIndiaClient";

export const metadata: Metadata = {
  title: "AI for India | Blog | St. Fox",
  description:
    "India's AI budget, infrastructure, key sectors, and ethical governance. By St. Fox.",
  openGraph: {
    title: "AI for India | St. Fox",
    description:
      "Strategic use of AI budget for India: R&D, healthcare, agriculture, education. By St. Fox.",
    url: "https://stfox.com/casestudies/AIforindia",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: ["AI for India", "India AI", "St. Fox"],
};

export default function AIForIndiaPage() {
  return <AIForIndiaClient />;
}
