import type { Metadata } from "next";
import EUAIlawClient from "@/components/casestudies/EUAIlaw/EUAIlawClient";

export const metadata: Metadata = {
  title: "EU adopts a new AI law | Blog | St. Fox",
  description:
    "Highlights of the EU Artificial Intelligence Act: GPAI, limitations, high-risk systems, sanctions. By St. Fox.",
  openGraph: {
    title: "EU adopts a new AI law | St. Fox",
    description:
      "EU AI Act: safeguards, bans, law enforcement, high-risk systems, SMEs. By St. Fox.",
    url: "https://stfox.com/casestudies/EUAIlaw",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: ["EU AI law", "Artificial Intelligence Act", "St. Fox"],
};

export default function EUAIlawPage() {
  return <EUAIlawClient />;
}
