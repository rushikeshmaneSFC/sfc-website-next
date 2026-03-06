import type { Metadata } from "next";
import IntricateWorldClient from "@/components/casestudies/intricateworld/IntricateWorldClient";

export const metadata: Metadata = {
  title: "Intricate world of New age Tech | Blog | St. Fox",
  description:
    "Cybersecurity, AI, data protection, privacy, and cloud computing as an interconnected ecosystem. By St. Fox.",
  openGraph: {
    title: "Intricate world of New age Tech | St. Fox",
    description:
      "The synergy among cybersecurity, AI, data protection, privacy, and cloud computing. By St. Fox.",
    url: "https://stfox.com/casestudies/intricateworld",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "cybersecurity",
    "AI",
    "data protection",
    "cloud computing",
    "St. Fox",
  ],
};

export default function IntricateWorldPage() {
  return <IntricateWorldClient />;
}
