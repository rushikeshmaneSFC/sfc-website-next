import type { Metadata } from "next";
import NavigatingFrontierClient from "@/components/casestudies/navigating-frontier/NavigatingFrontierClient";

export const metadata: Metadata = {
  title:
    "Navigating the Next Frontier: The State of Data Centers in India | Blog | St. Fox",
  description:
    "Current landscape of data centers in India, challenges, and adaptive strategies. Growth factors, power supply, compliance, and edge computing. By St. Fox.",
  openGraph: {
    title:
      "Navigating the Next Frontier: The State of Data Centers in India | St. Fox",
    description:
      "Data centers in India: landscape, challenges, and how organizations adapt. By St. Fox.",
    url: "https://stfox.com/casestudies/navigating-frontier",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "data centers India",
    "data center",
    "St. Fox",
    "digital economy",
  ],
};

export default function NavigatingFrontierPage() {
  return <NavigatingFrontierClient />;
}
