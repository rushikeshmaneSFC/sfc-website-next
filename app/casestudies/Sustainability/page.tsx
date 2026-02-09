import type { Metadata } from "next";
import SustainabilityClient from "@/components/casestudies/Sustainability/SustainabilityClient";

export const metadata: Metadata = {
  title: "How Tech can expedite Sustainability | Blog | St. Fox",
  description:
    "Cybersecurity, AI, data protection, and cloud computing for sustainability. European Green Deal, Singapore, Canada. By St. Fox.",
  openGraph: {
    title: "How Tech can expedite Sustainability | St. Fox",
    description:
      "Bridging the digital and green divide. By St. Fox.",
    url: "https://stfox.com/casestudies/Sustainability",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: ["sustainability", "cybersecurity", "AI", "cloud", "St. Fox"],
};

export default function SustainabilityPage() {
  return <SustainabilityClient />;
}
