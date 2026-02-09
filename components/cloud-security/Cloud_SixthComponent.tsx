"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { SixthCloudComponent } from "@/constants/CloudConstant";

function Cloud_SixthComponent() {
  return (
    <Wrapper className="flex justify-center items-center lg:py-10 md:py-10 py-5">
      <div className=" justify-center items-center ">
        <h1 className="lg:text-2xl text-xl text-center font-bold mb-8 md:mb-8">
          Why Choose St. Fox for Cloud Security Posture Assessment?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[19px]  ">
          {SixthCloudComponent.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#1C1C1C] p-6 md:p-4 lg:p-6 rounded-lg shadow-lg  border-l-4 border-[#1A3F7E]"
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

export default Cloud_SixthComponent;
