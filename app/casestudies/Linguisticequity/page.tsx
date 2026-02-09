import type { Metadata } from "next";
import LinguisticEquityClient from "@/components/casestudies/Linguisticequity/LinguisticEquityClient";

export const metadata: Metadata = {
  title:
    "Bridging the Language Divide: The Quest for Linguistic Equity in AI | Blog | St. Fox",
  description:
    "Linguistic bias in AI, non-English AI models, and the quest for a language-agnostic AI future. By St. Fox.",
  openGraph: {
    title:
      "Bridging the Language Divide: The Quest for Linguistic Equity in AI | St. Fox",
    description:
      "Linguistic equity in AI: bias, non-English models, and language-agnostic future. By St. Fox.",
    url: "https://stfox.com/casestudies/Linguisticequity",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "linguistic equity",
    "AI",
    "language",
    "multilingual AI",
    "St. Fox",
  ],
};

export default function LinguisticEquityPage() {
  return <LinguisticEquityClient />;
}
