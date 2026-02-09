import type { Metadata } from "next";
import ManagedIdentityClient from "@/components/managed-identity/ManagedIdentityClient";

export const metadata: Metadata = {
  title: "Managed Identity Solutions | St. Fox",
  description:
    "Empower your workforce securely with St. Fox Managed Identity Solutions. Protect access to critical systems and data while enabling seamless user experiences.",
  openGraph: {
    title: "Managed Identity Solutions | St. Fox",
    description:
      "Reimagine identity security with comprehensive, proactive, and scalable solutions. Secure your systems, empower your users, and enhance compliance.",
    url: "https://stfox.com/managed-identity",
    siteName: "St. Fox",
    type: "website",
  },
  keywords: [
    "managed identity",
    "identity security",
    "IAM",
    "identity access management",
    "St. Fox",
    "Azure AD",
    "Okta",
    "compliance",
    "GDPR",
    "HIPAA",
  ],
};

export default function ManagedIdentityPage() {
  return <ManagedIdentityClient />;
}
