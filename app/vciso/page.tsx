import type { Metadata } from "next";
import VcisoClient from "@/components/vciso/VcisoClient";

export const metadata: Metadata = {
  title: "vCISO | Virtual CISO Services | St. Fox",
  description:
    "Expert cybersecurity leadership with St. Fox vCISO services. On-demand CISO expertise, strategic planning, and compliance guidance.",
  openGraph: {
    title: "vCISO | Virtual CISO Services | St. Fox",
    description:
      "Strategic guidance and oversight to strengthen your cybersecurity posture without a full-time CISO.",
    url: "https://stfox.com/vciso",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "vCISO",
    "Virtual CISO",
    "cybersecurity leadership",
    "CISO",
    "St. Fox",
    "VIGILE Framework",
    "security strategy",
  ],
};

export default function VcisoPage() {
  return <VcisoClient />;
}
