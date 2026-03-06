import type { Metadata } from "next";
import HybridcloudClient from "@/components/casestudies/Hybridcloud/HybridcloudClient";

export const metadata: Metadata = {
  title: "Embracing the Hybrid Cloud | Blog | St. Fox",
  description:
    "Microservices, CI/CD, and DevSecOps for hybrid cloud. By St. Fox.",
  openGraph: {
    title: "Embracing the Hybrid Cloud | St. Fox",
    description:
      "Hybrid cloud with microservices, CI/CD, DevSecOps. By St. Fox.",
    url: "https://stfox.com/casestudies/Hybridcloud",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: ["hybrid cloud", "microservices", "CI/CD", "DevSecOps", "St. Fox"],
};

export default function HybridcloudPage() {
  return <HybridcloudClient />;
}
