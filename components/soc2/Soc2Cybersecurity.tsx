"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { Cyberservices } from "@/constants/SOC2Constant";

function Soc2Cybersecurity() {
  return (
    <Wrapper className="flex justify-center items-center lg:h-[843px] md:h-[843px] h-auto">
      <div>
        <div className="flex flex-col justify-center items-center text-center lg:text-start md:text-start lg:items-start md:justify-start">
          <div className="flex items-center  gap-2">
            <img
              loading="lazy"
              src="/images/ManagedIdentity/Solutionimg.webp"
              alt="Cybersecurity Icon"
              className="w-4 h-4 "
            />
            <h3 className="text-[#1A3F7E] font-semibold text-[14px] lg:leading-[24px]">
              Why St. Fox Managed SOC?
            </h3>
          </div>

          <h2 className="lg:text-[32px] text-xl md:text-[28px] font-semibold lg:leading-[40px] mt-2">
            Your Trusted Partner in Cybersecurity
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 bg-[#F9F9F9] p-6 rounded-lg shadow-sm mt-4">
          {Cyberservices.map((service, index) => (
            <div
              key={index}
              className="border-b pb-4 last:border-none text-center lg:text-start md:text-start"
            >
              <h3 className="lg:text-[22px] md:text-[18px] text-lg  lg:leading-[30.8px] font-semibold">
                {service.title}
              </h3>
              <p className="text-base font-normal lg:leading-[22.4px] mt-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Soc2Cybersecurity;
