/**
 * Analytics loader - GA4 and Microsoft Clarity.
 * Call initGA() and initClarity() ONLY after consent = accepted.
 * Client-only; never runs on server.
 * Idempotent: guards prevent duplicate init (including React StrictMode).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    __gaInitialized?: boolean;
    __clarityInitialized?: boolean;
  }
}

let gaInitialized = false;
let clarityInitialized = false;

/**
 * Initialize Google Analytics 4. Idempotent - safe to call multiple times.
 * Script loads first; gtag("config") runs only after script.onload.
 */
export function initGA(): void {
  if (typeof window === "undefined") return;

  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
  if (!gaId) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[GA4] Skipped: NEXT_PUBLIC_GA_ID is not set. Add it to .env.local to enable."
      );
    }
    return;
  }

  if (gaInitialized || window.__gaInitialized) return;

  const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  if (document.querySelector(`script[src="${scriptSrc}"]`)) return;

  gaInitialized = true;
  window.__gaInitialized = true;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  }
  window.gtag = gtag;

  gtag("js", new Date());

  const script = document.createElement("script");
  script.async = true;
  script.src = scriptSrc;

  script.onload = () => {
    window.gtag?.("config", gaId, {
      send_page_view: false, // SPA handled manually
    });
    const fullPath =
      window.location.pathname + (window.location.search || "");
    trackPageView(fullPath);
  };

  document.head.appendChild(script);
}

/**
 * Send page_view event for GA4. Call on initial load and route changes.
 * @param path - Full path including search params (e.g. /about?ref=home)
 */
export function trackPageView(path: string): void {
  if (typeof window === "undefined" || !window.gtag) return;
  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
  if (!gaId) return;

  window.gtag("event", "page_view", {
    page_path: path || "/",
    page_title: typeof document !== "undefined" ? document.title : "",
  });
}

/**
 * Initialize Microsoft Clarity. Idempotent - safe to call multiple times.
 * Uses @microsoft/clarity npm package. Loads only after consent = accepted.
 * Never runs on server; no re-init on SPA route changes.
 */
export function initClarity(): void {
  if (typeof window === "undefined") return;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID?.trim();
  if (!clarityId) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[Clarity] Skipped: NEXT_PUBLIC_CLARITY_ID is not set. Add it to .env.local to enable."
      );
    }
    return;
  }
  if (clarityInitialized || window.__clarityInitialized) return;

  clarityInitialized = true;
  window.__clarityInitialized = true;

  import("@microsoft/clarity")
    .then(({ default: clarity }) => {
      clarity.init(clarityId);
    })
    .catch((err) => {
      clarityInitialized = false;
      window.__clarityInitialized = false;
      if (process.env.NODE_ENV === "development") {
        console.warn("[Clarity] Failed to initialize:", err);
      }
    });
}

/**
 * Track a custom event in Microsoft Clarity.
 * Call only after initClarity() has run (consent = accepted).
 */
export function trackClarityEvent(name: string): void {
  if (typeof window === "undefined" || !clarityInitialized) return;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID?.trim();
  if (!clarityId) return;

  import("@microsoft/clarity")
    .then(({ default: clarity }) => {
      clarity.event(name);
    })
    .catch(() => {
      // Silently ignore - Clarity may not be loaded yet
    });
}
