"use client";

import Wrapper from "@/components/atoms/Wrapper";

function VigileFrameWork() {
  return (
    <Wrapper className="flex justify-center items-center sm:mt-20 md:pt-14 lg:pt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center justify-center">
          <video
            src="/video/vigile_Framework.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-[280px]"
          />
        </div>
        <div className="sm:flex flex-col">
          <div className="flex flex-col items-start sm:py-14">
            <h2 className="lg:text-2xl text-xl lg:leading-8 font-bold">
              What Makes the VIGILE Framework Unique?
            </h2>
            <p className="lg:text-xl text-base mt-2">
              Our framework is built on six pillars that ensure end-to-end
              security and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default VigileFrameWork;
