"use client";

import { Suspense, useEffect } from "react";
import CookieConsent from "./CookieConsent";
import AnalyticsTracker from "./AnalyticsTracker";
import { getConsent } from "@/lib/consent";
import { initGA, initClarity } from "@/lib/analytics";

/**
 * Mounts cookie consent UI and analytics route tracker.
 * Place once in root layout.
 * Initializes GA + Clarity on mount when consent was already accepted (e.g. refresh).
 */
export default function ConsentProvider() {
  useEffect(() => {
    if (getConsent() === "accepted") {
      initGA();
      initClarity();
    }
  }, []);

  return (
    <>
      <CookieConsent />
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  );
}
