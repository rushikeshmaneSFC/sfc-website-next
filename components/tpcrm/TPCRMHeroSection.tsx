"use client";

import { TPCRM_HEROSECTION } from "@/constants/TPCRM";
import HeroSection from "@/components/atoms/HeroSection";

const TPCRMHeroSection = () => {
  return (
    <HeroSection className=" flex justify-center items-center  bg-[url('https://saintfox.azureedge.net/datav2/TPCRM_bg.webp')] bg-cover bg-center bg-no-repeat lg:h-[775px] md:h-[775px] h-auto lg:py-0 md:py-0 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-[50%,50%] lg:grid-cols-[50%,50%] lg:gap-5  md:gap-2 gap-6 items-center text-[#ffff]">
        <div
          className="absolute top-0 left-0 lg:h-[775px] md:h-[775px]  w-1/2 "
          style={{
            background:
              "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
            backdropFilter: "blur(21px)",
          }}
        ></div>
        <div className="relative">
          <div>
            <h1 className="lg:text-[36px] font-bold  md:text-[24px] text-xl lg:leading-[48px]">
              Secure Your Supply Chain with St. Fox TPCRM Services
            </h1>
            <p className="lg:text-[16px] md:text-base text-base  mt-2">
              <span className="text-[#3B73CC] font-bold">Identify</span>,{" "}
              <span className="text-[#3B73CC] font-bold">Assess</span> and{" "}
              <span className="text-[#3B73CC] font-bold ">Mitigate</span>{" "}
              Third-Party Cyber Risks to Protect Your Business Ecosystem.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-10 md:gap-8 gap-4 ">
          {TPCRM_HEROSECTION.map((feature, index) => (
            <div
              key={index}
              className={`flex lg:items-center md:items-center text-start lg:gap-2   md:gap-3 gap-3 text-white lg:py-4 lg:px-5 rounded-full  ${
                index === 1 ? "lg:ml-20 md:ml-10" : ""
              }`}
            >
              <img
                loading="lazy"
                src={feature.image}
                alt="Feature Icon"
                className="w-[78px] h-[78px] object-contain"
              />
              <p className="text-center lg:text-[15px] md:text-[15px] text-[15px] ">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </HeroSection>
  );
};

export default TPCRMHeroSection;
