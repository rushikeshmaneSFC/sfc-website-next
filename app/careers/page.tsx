import type { Metadata } from "next";
import CareersClient from "@/components/careers/CareersClient";

export const metadata: Metadata = {
  title: "Careers | St. Fox",
  description:
    "Join St. Fox. Culture fueled by passion, integrity, and diversity. Check openings at St. Fox.",
  openGraph: {
    title: "Careers | St. Fox",
    description:
      "Crave a career that sparks your soul. Join the St. Fox tribe.",
    url: "https://stfox.com/careers",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["careers", "St. Fox", "jobs", "culture", "diversity"],
};

export default function CareersPage() {
  return <CareersClient />;
}
