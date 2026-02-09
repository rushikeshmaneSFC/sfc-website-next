import type { Metadata } from "next";
import CsseClient from "@/components/csse/CsseClient";

export const metadata: Metadata = {
  title: "St. Fox Cisco Secure Access | CSSE | St. Fox",
  description:
    "Cloud-first, cross-platform, automated Cisco Secure Access deployment. Secure enterprise infrastructure with St. Fox's streamlined SSE deployment for hybrid environments.",
  openGraph: {
    title: "St. Fox Cisco Secure Access | CSSE | St. Fox",
    description:
      "Cloud-first. Cross-platform. Automated. Streamlined Cisco Secure Access deployment.",
    url: "https://stfox.com/csse",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["CSSE", "Cisco Secure Access", "SSE", "VIGILE", "St. Fox"],
};

export default function CssePage() {
  return <CsseClient />;
}
