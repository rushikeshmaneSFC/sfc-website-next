import type { Metadata } from "next";
import NationalDefenseClient from "@/components/casestudies/Nationaldefense/NationalDefenseClient";

export const metadata: Metadata = {
  title: "National Defense in Cyberspace | Blog | St. Fox",
  description:
    "Creating a national defense network free from cyberattacks. Strategy, scalability, and CISA. By St. Fox.",
  openGraph: {
    title: "National Defense in Cyberspace | St. Fox",
    description:
      "Comprehensive strategy for national defense in cyberspace. By St. Fox.",
    url: "https://stfox.com/casestudies/Nationaldefense",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "national defense",
    "cyberspace",
    "cybersecurity",
    "CISA",
    "St. Fox",
  ],
};

export default function NationalDefensePage() {
  return <NationalDefenseClient />;
}
