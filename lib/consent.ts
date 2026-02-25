/**
 * Cookie consent utilities - GDPR-style consent management.
 * Persists user choice in a cookie (6-12 months expiry).
 */

export type ConsentStatus = "accepted" | "rejected" | null;

const COOKIE_NAME = "stfox_consent";
const COOKIE_MAX_AGE_DAYS = 365; // 12 months

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, maxAgeDays: number): void {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setTime(expires.getTime() + maxAgeDays * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAgeDays * 24 * 60 * 60};samesite=lax;secure`;
}

/**
 * Get stored consent status.
 * Returns "accepted" | "rejected" | null (not yet decided).
 */
export function getConsent(): ConsentStatus {
  const value = getCookie(COOKIE_NAME);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

/**
 * Persist consent choice. Call only after user explicitly accepts or rejects.
 */
export function setConsent(value: "accepted" | "rejected"): void {
  setCookie(COOKIE_NAME, value, COOKIE_MAX_AGE_DAYS);
}
