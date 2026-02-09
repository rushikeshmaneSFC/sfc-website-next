// @ts-nocheck
"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { LANDING_SERVICES } from "@/constants/LandingpageConstant";

export default function LandingServices() {
  return (
    <Wrapper className="bg-[url('/images/Landingpage/Servicesbg.png')] bg-no-repeat bg-cover lg:h-[551px] h-auto flex flex-col items-center justify-center text-center overflow-hidden lg:py-10 md:py-20 py-20">
      <h2 className="text-[30px] font-semibold mb-8 text-[#fff]">
        Comprehensive Cybersecurity Services for Every Need
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {LANDING_SERVICES.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-sm flex flex-col items-center border-2 border-white/10 bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px]"
          >
            <img
              loading="lazy"
              src={service.img}
              alt={service.title}
              className="w-[35.339px] h-[35.339px] mb-4"
            />
            <h3 className="text-xl font-bold text-[#fff] mb-2">
              {service.title}
            </h3>
            <p className="text-[#fff] font-normal text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
