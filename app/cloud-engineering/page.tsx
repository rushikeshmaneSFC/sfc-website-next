import type { Metadata } from "next";
import CloudEngineeringClient from "@/components/services/cloud-engineering/CloudEngineeringClient";

export const metadata: Metadata = {
  title: "Cloud Engineering | St. Fox",
  description:
    "Scalable, secure, simple cloud solutions. Unleash cloud agility with hybrid cloud, DevSecOps, and fortress-grade security.",
  openGraph: {
    title: "Cloud Engineering | St. Fox",
    description:
      "Cloud done right. Hybrid cloud, security, orchestration, and partnership.",
    url: "https://stfox.com/cloud-engineering",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["cloud engineering", "hybrid cloud", "DevSecOps", "cloud security", "St. Fox"],
};

export default function CloudEngineeringPage() {
  return <CloudEngineeringClient />;
}
