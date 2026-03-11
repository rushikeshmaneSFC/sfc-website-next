/**
 * Google Tag Manager (GTM) initialization.
 * Client-only; never runs on server. Idempotent via window.__gtmInitialized.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    __gtmInitialized?: boolean;
  }
}

/**
 * Initializes Google Tag Manager: sets up dataLayer and injects the GTM script.
 * Safe to call multiple times; duplicate initialization is prevented.
 */
export function initGTM(containerId?: string): void {
  if (typeof window === "undefined") return;

  const gtmId = containerId ?? process.env.NEXT_PUBLIC_GTM_ID?.trim();
  if (!gtmId) return;

  if (window.__gtmInitialized) return;
  window.__gtmInitialized = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);
}
