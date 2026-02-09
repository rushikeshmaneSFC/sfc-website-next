import type { Metadata } from "next";
import BlogClient from "@/components/casestudies/BlogClient";

export const metadata: Metadata = {
  title: "Blog & Insights | Vigile",
  description:
    "Explore St. Fox blog and insights on cybersecurity, AI, compliance, and security operations. Case studies and expert perspectives.",
  openGraph: {
    title: "Blog & Insights | Vigile",
    description:
      "Blog and insights on cybersecurity, AI, and security operations.",
    url: "https://stfox.com/casestudies",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["blog", "insights", "cybersecurity", "case studies", "St. Fox"],
};

export default function CasestudiesPage() {
  return <BlogClient />;
}
