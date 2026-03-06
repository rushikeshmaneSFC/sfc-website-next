import type { Metadata } from "next";
import GuardianAngelClient from "@/components/casestudies/guardian-angel/GuardianAngelClient";

export const metadata: Metadata = {
  title: "The Guardian Angel in the Cloud | Blog | St. Fox",
  description:
    "How CISO-as-a-Service empowers mid-sized businesses to conquer cybersecurity. By St. Fox.",
  openGraph: {
    title: "The Guardian Angel in the Cloud | St. Fox",
    description:
      "CISOaaS: strategic security leadership for mid-sized businesses. By St. Fox.",
    url: "https://stfox.com/casestudies/guardian-angel",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "CISOaaS",
    "CISO as a Service",
    "mid-sized business",
    "cybersecurity",
    "St. Fox",
  ],
};

export default function GuardianAngelPage() {
  return <GuardianAngelClient />;
}
