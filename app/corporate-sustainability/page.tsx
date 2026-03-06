import type { Metadata } from "next";
import CorporateSustainabilityClient from "@/components/corporate-sustainability/CorporateSustainabilityClient";

export const metadata: Metadata = {
  title: "Corporate Sustainability | St. Fox",
  description:
    "Growth with purpose. ESG principles, environmental stewardship, social responsibility, and sustainable business practices.",
  openGraph: {
    title: "Corporate Sustainability | St. Fox",
    description:
      "Beyond profit, purpose. Building a better future through ESG and sustainability.",
    url: "https://stfox.com/corporate-sustainability",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["corporate sustainability", "ESG", "environmental", "social responsibility", "St. Fox"],
};

export default function CorporateSustainabilityPage() {
  return <CorporateSustainabilityClient />;
}
