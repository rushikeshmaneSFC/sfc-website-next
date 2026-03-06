import type { Metadata } from "next";
import SaviyntClient from "@/components/casestudies/Saviynt/SaviyntClient";

export const metadata: Metadata = {
  title:
    "Saviynt Partners with St. Fox to Build a Scalable, Trusted Identity Ecosystem for India | Blog | St. Fox",
  description:
    "Saviynt and St. Fox strategic partnership for IGA, PAM, JITA, ISPM in India. By Saviynt Press Team.",
  openGraph: {
    title:
      "Saviynt Partners with St. Fox for Identity Ecosystem in India | St. Fox",
    description:
      "Strategic collaboration for modern identity solutions: ISPM, IGA, JITA, PAM. By Saviynt Press Team.",
    url: "https://stfox.com/casestudies/Saviynt",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: ["Saviynt", "St. Fox", "IGA", "PAM", "identity", "India"],
};

export default function SaviyntPage() {
  return <SaviyntClient />;
}
