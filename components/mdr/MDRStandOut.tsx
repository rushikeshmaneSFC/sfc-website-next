"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { MDR_STANDOUT } from "@/constants/MDRConstant";

function MDRStandOut() {
  return (
    <Wrapper className="flex justify-center items-center lg:h-[430px] md:h-[430px] h-auto py-10">
      <div className=" w-full max-w-5xl">
        <div className="text-xl lg:text-[32px] md:text-3xl font-bold lg:leading-10 text-center lg:mb-12 mb-10">
          What Makes St. Fox MDR Stand Out?
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {MDR_STANDOUT.map((standout, index) => (
            <div key={index} className="">
              <p className="text-lg font-semibold text-[#1A3F7E] leading-6">
                {standout.title}
              </p>
              <p className="text-base font-normal leading-6">
                {standout.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default MDRStandOut;
