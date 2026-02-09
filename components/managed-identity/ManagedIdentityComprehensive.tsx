"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { COMPREHENSIVE_DATA } from "@/constants/ManagedIdentityConstant";

function ManagedIdentityComprehensive() {
  return (
    <Wrapper className="flex items-center justify-center py-10 lg:h-[536px] md:h-[436px] h-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="md:col-span-2 lg:hidden text-center">
          <h2 className="text-2xl md:text-[28px] lg:text-[28px] font-bold text-[#1F1F1F]">
            Comprehensive Features That Secure Your Enterprise
          </h2>
        </div>

        <div className="space-y-6">
          {COMPREHENSIVE_DATA.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex  space-x-3  items-center lg:mt-0 mt-4">
              <img
                loading="lazy"
                src={feature.imgurl}
                alt="icon"
                className="w-9 h-9"
              />
              <div>
                <h3 className="text-lg  font-bold text-[#1A3F7E]">
                  {feature.title}
                </h3>
                <p className="text-[#7A7A7A] text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex items-center justify-center text-center">
          <h2 className="text-[28px] font-bold text-[#1F1F1F]">
            Comprehensive Features That Secure Your Enterprise
          </h2>
        </div>

        <div className="space-y-6">
          {COMPREHENSIVE_DATA.slice(3, 6).map((feature, index) => (
            <div
              key={index}
              className="flex space-x-3 lg:mt-0 mt-6 items-center"
            >
              <img
                loading="lazy"
                src={feature.imgurl}
                alt="icon"
                className="w-9 h-9"
              />
              <div>
                <h3 className="text-lg font-bold text-[#1A3F7E]">
                  {feature.title}
                </h3>
                <p className="text-[#7A7A7A]  text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default ManagedIdentityComprehensive;
