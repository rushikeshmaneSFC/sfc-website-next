/**
 * Cookie consent utilities - GDPR-style consent management.
 * - Accepted: persisted in a cookie (12 months).
 * - Rejected: stored in sessionStorage only; banner shows again on next visit.
 */

export type ConsentStatus = "accepted" | "rejected" | null;

const COOKIE_NAME = "stfox_consent";
const SESSION_KEY = "stfox_consent_rejected";
const COOKIE_MAX_AGE_DAYS = 365; // 12 months

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, maxAgeDays: number): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAgeDays * 24 * 60 * 60};samesite=lax;secure`;
}

/**
 * Get stored consent status.
 * Returns "accepted" (from cookie) | "rejected" (session only) | null (not yet decided).
 */
export function getConsent(): ConsentStatus {
  const cookieValue = getCookie(COOKIE_NAME);
  if (cookieValue === "accepted") return "accepted";
  if (typeof sessionStorage !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "rejected") return "rejected";
  return null;
}

/**
 * Persist consent choice.
 * - accepted: stored in cookie (persists across visits).
 * - rejected: stored in sessionStorage only (banner will show again on next visit).
 */
export function setConsent(value: "accepted" | "rejected"): void {
  if (typeof document === "undefined") return;
  if (value === "accepted") {
    setCookie(COOKIE_NAME, value, COOKIE_MAX_AGE_DAYS);
    sessionStorage.removeItem(SESSION_KEY);
  } else {
    sessionStorage.setItem(SESSION_KEY, "rejected");
    // Do not set a cookie for rejection — no permanent storage.
  }
}
