import type { Metadata } from "next";
import CybersecurityConcernsClient from "@/components/casestudies/cybersecurity-concerns/CybersecurityConcernsClient";

export const metadata: Metadata = {
  title:
    "Cybersecurity Concerns and Preparedness for the Paris 2024 Olympics | Blog | St. Fox",
  description:
    "How the Paris 2024 Olympics cybersecurity committee is planning to curtail cyber threats. Historical attacks, preparedness strategy, and robust framework. By St. Fox.",
  openGraph: {
    title:
      "Cybersecurity Concerns and Preparedness for the Paris 2024 Olympics | St. Fox",
    description:
      "Comprehensive cybersecurity approach for Paris 2024 Olympics: threat detection, supply chain security, IoT, and continuous monitoring.",
    url: "https://stfox.com/casestudies/cybersecurity-concerns",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "Paris 2024 Olympics",
    "cybersecurity",
    "Olympic Destroyer",
    "St. Fox",
  ],
};

export default function CybersecurityConcernsPage() {
  return <CybersecurityConcernsClient />;
}
