import type { Metadata } from "next";
import ServerErrorClient from "@/components/errors/ServerErrorClient";

export const metadata: Metadata = {
  title: "500 - Server Error",
  description:
    "Something has gone seriously wrong. We're working on it. Please try again later. St. Fox - Innovate Fearlessly, Protect Relentlessly.",
  robots: { index: false, follow: false },
};

export default function ServerErrorPageRoute() {
  return <ServerErrorClient />;
}
