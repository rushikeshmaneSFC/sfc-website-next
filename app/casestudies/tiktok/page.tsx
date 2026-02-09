import type { Metadata } from "next";
import TiktokClient from "@/components/casestudies/tiktok/TiktokClient";

export const metadata: Metadata = {
  title: "TikTok Banned Reasons | Blog | St. Fox",
  description:
    "Why countries ban or restrict TikTok: privacy, data security, cybersecurity risks, content concerns, and national security. By St. Fox.",
  openGraph: {
    title: "TikTok Banned Reasons | St. Fox",
    description:
      "Global bans and restrictions on TikTok. Privacy, security, and national security concerns. By St. Fox.",
    url: "https://stfox.com/casestudies/tiktok",
    siteName: "St. Fox",
    type: "article",
  },
  keywords: [
    "TikTok",
    "TikTok ban",
    "privacy",
    "data security",
    "St. Fox",
  ],
};

export default function TiktokPage() {
  return <TiktokClient />;
}
