"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getConsent } from "@/lib/consent";
import { trackPageView } from "@/lib/analytics";

/**
 * Tracks page views for GA4 on route changes.
 * Only fires when consent = accepted. Sends pathname + search params.
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (getConsent() !== "accepted") return;
    const search = searchParams?.toString();
    const fullPath = pathname + (search ? `?${search}` : "");
    trackPageView(fullPath);
  }, [pathname, searchParams]);

  return null;
}
