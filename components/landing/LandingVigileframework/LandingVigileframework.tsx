// @ts-nocheck
"use client";

import { useEffect, useState } from "react";

function LandingVigileframework() {
  const [isIOSorMac, setIsIOSorMac] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAppleDevice = /iPad|iPhone|iPod|Macintosh/.test(userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);

    console.log("isApp", isAppleDevice, isSafari);
    if (isSafari) {
      setIsIOSorMac(true);
    } else {
      setIsIOSorMac(false);
    }
  }, []);

  const videoSrc = isIOSorMac
    ? "/video/vigile_mov_mac.mov"
    : "/video/Vigile_Video.webm";
  return (
    <div className="flex h-auto  w-full items-center justify-center  bg-cover bg-center bg-no-repeat py-5 md:h-auto md:px-4 md:py-5  lg:h-[420px] lg:px-20 lg:py-0 2xl:px-40 2xl:py-10 ">
      <div className="items-center justify-center space-y-2 text-center">
        <h2 className="text-xl font-bold md:text-2xl lg:text-4xl lg:font-semibold">
          Your Path to Cyber Resilience
        </h2>
        <p className="px-3 text-base font-medium md:text-xl lg:px-0 lg:text-lg lg:font-semibold">
          Our proprietary VIGILE Framework ensures comprehensive security for
          every layer of your organization.
        </p>

        <div className=" relative h-[180px] w-full overflow-hidden rounded-lg sm:h-[220px] md:h-[260px] lg:h-[300px]">
          <div className="absolute inset-0 z-10 rounded-lg"></div>
          <video
            key={videoSrc}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="z-0 h-full w-full rounded-lg object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default LandingVigileframework;
