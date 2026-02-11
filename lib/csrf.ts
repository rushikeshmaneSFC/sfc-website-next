/**
 * CSRF token handling for session-protected POST requests.
 * Token is cached in memory only (no localStorage/sessionStorage/cookies).
 * Each origin has its own cached token so multi-origin setups work.
 */

const CSRF_ENDPOINT_PATH = "/api/csrf-token";

/** In-memory cache: origin -> csrfToken. Not persisted to storage. */
let csrfCache: Record<string, string> = {};

/**
 * Fetches the CSRF token from the backend for the given origin.
 * Uses credentials: "include" so the session cookie is sent and the server can set/read it.
 * Caches the token per origin; subsequent calls for the same origin return the cached value.
 */
export async function fetchCsrfToken(origin: string): Promise<string> {
  const cached = csrfCache[origin];
  if (cached) {
    return cached;
  }

  const url = `${origin.replace(/\/$/, "")}${CSRF_ENDPOINT_PATH}`;
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Failed to get CSRF token: ${response.status}`);
  }

  const data = (await response.json()) as { csrfToken?: string };
  const token = data?.csrfToken;
  if (!token || typeof token !== "string") {
    throw new Error("Invalid CSRF token response");
  }

  csrfCache[origin] = token;
  return token;
}

/**
 * Clears the cached CSRF token for an origin (or all origins if none passed).
 * Used after a 403 to force a fresh token on retry.
 */
export function clearCsrfCache(origin?: string): void {
  if (origin === undefined) {
    csrfCache = {};
  } else {
    delete csrfCache[origin];
  }
}
