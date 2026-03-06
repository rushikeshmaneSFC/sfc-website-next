import type { Metadata } from "next";
import CrossroadsClient from "@/components/casestudies/Crossroads/CrossroadsClient";

export const metadata: Metadata = {
  title: "Navigating the Crossroads | Blog | St. Fox",
  description:
    "Data privacy, protection, regulatory compliance, and data governance. By St. Fox.",
  openGraph: {
    title: "Navigating the Crossroads | St. Fox",
    description:
      "Why data privacy, protection, and compliance matter. By St. Fox.",
    url: "https://stfox.com/casestudies/Crossroads",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: ["data privacy", "GDPR", "CCPA", "compliance", "St. Fox"],
};

export default function CrossroadsPage() {
  return <CrossroadsClient />;
}
