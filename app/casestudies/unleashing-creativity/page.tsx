import type { Metadata } from "next";
import UnleashingCreativityClient from "@/components/casestudies/unleashing-creativity/UnleashingCreativityClient";

export const metadata: Metadata = {
  title: "Unleashing Creativity & Efficiency | Blog | St. Fox",
  description:
    "GenAI as a Service for enterprise: benefits, landscape, challenges. By St. Fox.",
  openGraph: {
    title: "Unleashing Creativity & Efficiency | St. Fox",
    description:
      "GenAIaaS: creativity, efficiency, and competitive advantage for enterprises. By St. Fox.",
    url: "https://stfox.com/casestudies/unleashing-creativity",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "GenAI",
    "GenAIaaS",
    "enterprise AI",
    "St. Fox",
  ],
};

export default function UnleashingCreativityPage() {
  return <UnleashingCreativityClient />;
}
