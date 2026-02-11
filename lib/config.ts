/**
 * App config from environment.
 * NEXT_PUBLIC_* vars are available in the browser.
 */
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export { API_BASE_URL };
