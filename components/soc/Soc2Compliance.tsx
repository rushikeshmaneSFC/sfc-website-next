"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { FifthcontainerArray } from "@/constants/socConstant";

function Soc2Compliance() {
  return (
    <Wrapper className="flex justify-center items-center pt-16 bg-[#FAFAFA]">
      <div className=" justify-center items-center">
        <h1 className="lg:text-2xl text-xl text-center font-bold mb-4 md:mb-8">
          Why Choose St. Fox for SOC 2 Compliance?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[19px]  ">
          {FifthcontainerArray.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#1C1C1C] p-6 md:p-4 lg:p-6 rounded-lg shadow-lg   border-l-4 border-[#A96432]"
            >
              <h2 className="text-lg  font-semibold mb-2 md:mb-2">
                {item.title}
              </h2>
              <p className="text-base font-normal">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Soc2Compliance;
