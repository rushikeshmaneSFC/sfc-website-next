"use client";

import Wrapper from "@/components/atoms/Wrapper";

export default function VAPTStrategy() {
  return (
    <Wrapper className="flex items-center justify-center   lg:py-6 md:py-6 py-8">
      <h1 className="text-center text-xl md:text-2xl font-bold mb-6 md:mb-8">
        A Strategic Approach Powered by the
        <br className="hidden lg:block" /> VIGILE Framework
      </h1>
      <div className="xl:h-[364px] flex justify-center">
        <img
          loading="lazy"
          className="object-cover"
          src="/images/VAPT/VAPTVigile.webp"
          alt="Vulnerability Assessment and Penetration Testing_vigileframework"
        />
      </div>
    </Wrapper>
  );
}
