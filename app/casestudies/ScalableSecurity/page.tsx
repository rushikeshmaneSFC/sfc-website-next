import type { Metadata } from "next";
import ScalableSecurityClient from "@/components/casestudies/ScalableSecurity/ScalableSecurityClient";

export const metadata: Metadata = {
  title: "Scalable & Flexible Security Architectures | Blog | St. Fox",
  description:
    "Cloud-based security, Zero Trust, SOAR, microservices. By St. Fox.",
  openGraph: {
    title: "Scalable & Flexible Security Architectures | St. Fox",
    description:
      "Scalable security architectures: CASB, ZTA, SOAR, microservices. By St. Fox.",
    url: "https://stfox.com/casestudies/ScalableSecurity",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: ["scalable security", "Zero Trust", "SOAR", "St. Fox"],
};

export default function ScalableSecurityPage() {
  return <ScalableSecurityClient />;
}
