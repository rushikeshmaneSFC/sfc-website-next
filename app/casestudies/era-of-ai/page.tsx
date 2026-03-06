import type { Metadata } from "next";
import EraOfAIClient from "@/components/casestudies/era-of-ai/EraOfAIClient";

export const metadata: Metadata = {
  title: "Being Human in era of AI | Blog | St. Fox",
  description:
    "Exploring what it means to be human in the era of AI. Reference monitors, root of trust, and OECD AI principles for trustworthy AI.",
  openGraph: {
    title: "Being Human in era of AI | St. Fox",
    description:
      "Reference monitors, Trusted Computing Base for AI, and Human Platform Module (HPM). By Rajiv Bahl.",
    url: "https://stfox.com/casestudies/era-of-ai",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "AI",
    "era of AI",
    "trustworthy AI",
    "OECD AI principles",
    "St. Fox",
    "Rajiv Bahl",
  ],
};

export default function EraOfAIPage() {
  return <EraOfAIClient />;
}
