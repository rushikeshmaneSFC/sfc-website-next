import type { Metadata } from "next";
import NotFoundClient from "@/components/errors/NotFoundClient";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you are looking for could not be found. St. Fox - Innovate Fearlessly, Protect Relentlessly.",
  robots: { index: false, follow: false },
};

export default function NotFoundPageRoute() {
  return <NotFoundClient />;
}
