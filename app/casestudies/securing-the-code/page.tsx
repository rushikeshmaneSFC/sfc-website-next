import type { Metadata } from "next";
import SecuringTheCodeClient from "@/components/casestudies/securing-the-code/SecuringTheCodeClient";

export const metadata: Metadata = {
  title: "Securing the Code in a Gen AI World | Blog | St. Fox",
  description:
    "Defending against AI-injected malware. Secure codebase strategies, formal verification, and the human factor. By St. Fox.",
  openGraph: {
    title: "Securing the Code in a Gen AI World | St. Fox",
    description:
      "AI-injected malware, securing the codebase, and secure coding in the Gen AI era. By St. Fox.",
    url: "https://stfox.com/casestudies/securing-the-code",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "Gen AI",
    "AI-injected malware",
    "secure coding",
    "OWASP",
    "St. Fox",
  ],
};

export default function SecuringTheCodePage() {
  return <SecuringTheCodeClient />;
}
