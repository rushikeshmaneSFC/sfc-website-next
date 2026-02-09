import type { Metadata } from "next";
import MaintenanceClient from "@/components/maintenance/MaintenanceClient";

export const metadata: Metadata = {
  title: "Under Maintenance",
  description:
    "We're currently performing maintenance. Please check back soon. St. Fox - Innovate Fearlessly, Protect Relentlessly.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return <MaintenanceClient />;
}
