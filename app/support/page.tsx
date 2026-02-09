import type { Metadata } from "next";
import SupportClient from "@/components/support/SupportClient";

export const metadata: Metadata = {
  title: "Breach Support | St. Fox",
  description:
    "We've got your back after a breach. 24/7 breach investigation, containment, recovery, and support with legal and regulatory obligations.",
  openGraph: {
    title: "Breach Support | St. Fox",
    description:
      "Expert breach response and recovery support. Regain control and confidence.",
    url: "https://stfox.com/support",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["breach support", "incident response", "cybersecurity", "St. Fox"],
};

export default function SupportPage() {
  return <SupportClient />;
}
