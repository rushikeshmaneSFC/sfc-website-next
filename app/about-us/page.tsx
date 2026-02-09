import type { Metadata } from "next";
import AboutUsClient from "@/components/about-us/AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | St. Fox Tribe | Cybersecurity & Cloud",
  description:
    "United by purpose, strengthened by expertise. Meet the St. Fox Tribe—seasoned cybersecurity, cloud, and AI professionals building a secure future.",
  openGraph: {
    title: "About Us | St. Fox Tribe",
    description:
      "United by Purpose. Strengthened by Expertise. Inspired by Innovation.",
    url: "https://stfox.com/about-us",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "About St. Fox",
    "St. Fox Tribe",
    "cybersecurity",
    "cloud",
    "leadership",
  ],
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
