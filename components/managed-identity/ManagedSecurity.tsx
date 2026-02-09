"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { SECURITY_DATA } from "@/constants/ManagedIdentityConstant";

function ManagedSecurity() {
  return (
    <Wrapper className="flex items-center justify-center lg:h-[452px] md:h-[452px] h-auto py-10">
      <div className="grid grid-cols-[100%] max-w-6xl w-full items-center md:pb-[28px] md:grid-cols-[50%,50%]  ">
        <div className="flex flex-col text-[#1F1F1F] justify-center lg:mt-10 md:mt-10 mt-0">
          <div className="flex items-center gap-2">
            <img
              loading="lazy"
              src="/images/ManagedIdentity/Solutionimg.webp"
              alt="icon"
              className="w-4 h-4 "
            />
            <h3 className="text-[#1A3F7E] font-semibold text-xs lg:text-sm lg:leading-[20px]">
              Solution Overview
            </h3>
          </div>
          <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold  text-[#1F1F1F] mt-2">
            Reimagine Identity Security with St. Fox
          </h2>
          <p className="text-base md:text-lg lg:text-lg font-medium  mt-3 text-[#1C1C1C]">
            At St. Fox, we simplify identity security by providing
            comprehensive, proactive, and scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 mt-10 gap-16 ">
          {SECURITY_DATA.map((item, index) => (
            <div key={index} className="flex">
              <div className="min-w-[40px] min-h-[40px] ">
                <img
                  loading="lazy"
                  src={item.imgurl}
                  alt="icon"
                  className="mt-1 w-5 h-5 "
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#1C1C1C] text-base  font-normal ">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default ManagedSecurity;
