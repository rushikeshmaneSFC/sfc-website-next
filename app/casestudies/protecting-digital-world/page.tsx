import type { Metadata } from "next";
import ProtectingDigitalWorldClient from "@/components/casestudies/protecting-digital-world/ProtectingDigitalWorldClient";

export const metadata: Metadata = {
  title: "Protecting Our Digital World | Blog | St. Fox",
  description:
    "Foundational disciplines and Zero Trust for personal digital security. By Manoj Nair.",
  openGraph: {
    title: "Protecting Our Digital World | St. Fox",
    description:
      "MFA, updates, secure Wi-Fi, and Zero Trust for individuals. By Manoj Nair.",
    url: "https://stfox.com/casestudies/protecting-digital-world",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "digital world",
    "Zero Trust",
    "MFA",
    "cybersecurity",
    "St. Fox",
  ],
};

export default function ProtectingDigitalWorldPage() {
  return <ProtectingDigitalWorldClient />;
}
