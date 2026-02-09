import type { Metadata } from "next";
import LandingPageClient from "@/components/landing/LandingPageClient";

export const metadata: Metadata = {
  title: "St. Fox - Home",
  description:
    "Cybersecurity services by Saint Fox Consultancy Pvt Ltd. Innovate fearlessly, protect relentlessly with managed security, cloud, data, and AI security solutions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "St. Fox - Innovate Fearlessly, Protect Relentlessly",
    description:
      "Saint Fox delivers end-to-end cybersecurity, cloud security, data protection, and AI security services for modern enterprises.",
    url: "/",
    siteName: "St. Fox",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "St. Fox" }],
  },
  twitter: { card: "summary_large_image", title: "St. Fox - Innovate Fearlessly, Protect Relentlessly" },
};

export default function Page() {
  return <LandingPageClient />;
}

