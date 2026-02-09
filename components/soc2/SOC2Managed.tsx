"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { Socmanageddata } from "@/constants/SOC2Constant";

function SOC2Managed() {
  return (
    <Wrapper className="flex justify-center items-center h-auto py-5">
      <div className="grid w-full max-w-5xl">
        <div className="md:text-3xl text-xl lg:text-[32px] font-bold lg:leading-10 text-center lg:mb-12">
          What Sets St. Fox Managed SOC Apart?
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ">
          {Socmanageddata.map((item, index) => (
            <div key={index} className="p-4">
              <p className="text-lg font-semibold text-[#1A3F7E] ">
                {item.title}
              </p>
              <p className="text-base font-normal ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
export default SOC2Managed;
