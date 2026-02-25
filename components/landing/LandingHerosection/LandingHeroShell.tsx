import type { ReactNode } from "react";

/**
 * Server-rendered hero container with LCP background.
 * Ensures hero markup and background are in initial HTML for fast LCP.
 * No "use client" - renders on server.
 */
export default function LandingHeroShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="flex flex-col justify-center items-center text-[#fff] bg-[url('https://saintfox.azureedge.net/datav2/LandingHerosection_Mobile.webp')] md:bg-[url('https://saintfox.azureedge.net/datav2/bg.webp')] bg-cover bg-center bg-no-repeat lg:w-full w-[100%] h-[520px] min-h-[520px] md:min-h-[580px] md:h-auto lg:h-[638px] lg:min-h-[638px] 2xl:h-[638px] 2xl:min-h-[638px] 2xl:px-40 lg:px-20 md:px-4 2xl:py-0 lg:py-0 md:py-20 pt-24"
    >
      {children}
    </div>
  );
}
