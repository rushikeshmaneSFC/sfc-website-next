import type { Metadata } from "next";
import PromptInjectionClient from "@/components/casestudies/prompt-injection/PromptInjectionClient";

export const metadata: Metadata = {
  title: "Prompt Injection – Practical Mitigations | Blog | St. Fox",
  description:
    "Practical mitigations for prompt injection in LLMs. Secure-by-design principles, OWASP Top 10 for LLM Applications, and defender-focused guidance. By Rajiv Bahl.",
  openGraph: {
    title: "Prompt Injection – Practical Mitigations | St. Fox",
    description:
      "Practical implementable mitigation steps for prompt injection. Security by design for LLM applications.",
    url: "https://stfox.com/casestudies/prompt-injection",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "prompt injection",
    "LLM security",
    "OWASP Top 10 LLM",
    "MITRE ATLAS",
    "St. Fox",
    "Rajiv Bahl",
  ],
};

export default function PromptInjectionPage() {
  return <PromptInjectionClient />;
}
