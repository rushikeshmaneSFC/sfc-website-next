/**
 * Shared API helper for POST requests that require CSRF protection.
 * Ensures a CSRF token is sent and retries once on 403 (e.g. expired token).
 */

import { fetchCsrfToken, clearCsrfCache } from "@/lib/csrf";

const CSRF_RETRY_MESSAGE =
  "Request failed. Please try again.";

/**
 * Sends a POST request with session credentials and the CSRF token in the x-csrf-token header.
 * If the server returns 403 (e.g. invalid/expired CSRF token), the cached token is cleared,
 * a new one is fetched, and the POST is retried once. If it still fails, throws with a generic message.
 */
export async function postWithCsrf(
  url: string,
  body: Record<string, unknown>
): Promise<Response> {
  const origin = new URL(url).origin;

  const doPost = async (): Promise<Response> => {

    console.log(origin,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    
    
    const csrfToken = await fetchCsrfToken(origin);
    
    console.log(csrfToken,"333333333333333333#######################################################################33333333333333333333333333333333333333333333333333333333333")


    
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": csrfToken,
      },
      body: JSON.stringify(body),
    });
    return response;
  };

  let response = await doPost();

  if (response.status === 403) {
    clearCsrfCache(origin);
    response = await doPost();
  }

  if (response.status === 403) {
    throw new Error(CSRF_RETRY_MESSAGE);
  }

  return response;
}
