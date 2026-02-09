import type { Metadata } from "next";
import TermsOfUseClient from "@/components/legal/terms-of-use/TermsOfUseClient";

export const metadata: Metadata = {
  title: "Terms of Use | St. Fox",
  description:
    "Terms of Use for St. Fox website. Acceptance, definitions, ownership, disclaimer, liability, governing law.",
  openGraph: {
    title: "Terms of Use | St. Fox",
    description:
      "Terms and conditions governing your use of the St. Fox website.",
    url: "https://stfox.com/terms-of-use",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: ["terms of use", "St. Fox", "legal", "website terms"],
};

export default function TermsOfUsePage() {
  return <TermsOfUseClient />;
}
