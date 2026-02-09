import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Enforce canonical domain: redirect www to non-www (or vice versa).
 * Prevents WWW vs non-WWW URL duplication for SEO.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";

  // Redirect www to non-www (e.g. www.stfox.com → stfox.com)
  if (hostname.startsWith("www.")) {
    url.host = hostname.replace(/^www\./, "");
    url.protocol = request.nextUrl.protocol;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except for
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
