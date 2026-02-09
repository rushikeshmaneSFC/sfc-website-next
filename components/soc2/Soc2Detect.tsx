"use client";

import ReusableCard from "@/components/atoms/ReusableCard";
import Wrapper from "@/components/atoms/Wrapper";
import { Soc2DetectFQS } from "@/constants/SOC2Constant";

const Soc2Detect = () => {
  return (
    <Wrapper
      className="bg-no-repeat bg-cover bg-center
lg:h-[515px] h-auto md:h-[515px] items-center justify-center flex py-10"
    >
      <div className="  mt-5 items-center flex flex-col relative">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <img
              loading="lazy"
              src="/images/ManagedIdentity/Solutionimg.webp"
              alt="icon"
              className="w-4 h-4 "
            />
            <h3 className="text-[#1A3F7E] font-semibold text-[14px] lg:leading-[24px]">
              How We Excel in Triaging
            </h3>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-center ">
            Detect, Investigate, and Resolve Threats in Real Time
          </h2>
          <div className="absolute lg:bg-gray-500 lg:border-b md:border-b md:bg-gray-500 w-full lg:top-[67%] md:top-[64%] top-[64%]"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10  lg:px-10 md:px-5  ">
            {Soc2DetectFQS.map((card, index) => (
              <ReusableCard
                key={index}
                title={card.title}
                description={card.description}
                boxShadowColor={card.boxShadowColor}
                className={
                  index === 2
                    ? "md:col-span-2 flex justify-center mx-auto w-full lg:w-[420px] md:w-[330px] border-l lg:h-[145px] md:h-[160px] h-[100px] md:pt-5"
                    : "border-l lg:h-[200px] md:h-[170px] h-[150px]   md:py-5 lg:py-0"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Soc2Detect;
