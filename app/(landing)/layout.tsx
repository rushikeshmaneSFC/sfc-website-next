import type { ReactNode } from "react";

/**
 * Landing-page-only layout. Adds LCP preload hints for hero background images.
 * Preload links are body-ok per HTML5 and help the browser discover LCP early.
 */
export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://saintfox.azureedge.net" />
      <link
        rel="preload"
        href="https://saintfox.azureedge.net/datav2/bg.webp"
        as="image"
        fetchPriority="high"
        media="(min-width: 768px)"
      />
      <link
        rel="preload"
        href="https://saintfox.azureedge.net/datav2/LandingHerosection_Mobile.webp"
        as="image"
        fetchPriority="high"
        media="(max-width: 767px)"
      />
      {children}
    </>
  );
}
