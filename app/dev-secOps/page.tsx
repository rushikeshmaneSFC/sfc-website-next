import type { Metadata } from "next";
import DevSecOpsClient from "@/components/dev-secops/DevSecOpsClient";

export const metadata: Metadata = {
  title: "DevSecOps | Managed DevSecOps | St. Fox",
  description:
    "Secure your development lifecycle with St. Fox Managed DevSecOps. Integrate security into every stage of your software development pipeline.",
  openGraph: {
    title: "DevSecOps | Managed DevSecOps | St. Fox",
    description:
      "Seamlessly integrate security into your CI/CD pipeline. VIGILE Framework-driven DevSecOps for faster, safer releases.",
    url: "https://stfox.com/dev-secOps",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "DevSecOps",
    "Managed DevSecOps",
    "CI/CD",
    "SAST",
    "DAST",
    "St. Fox",
    "VIGILE Framework",
    "secure development",
  ],
};

export default function DevSecOpsPage() {
  return <DevSecOpsClient />;
}
