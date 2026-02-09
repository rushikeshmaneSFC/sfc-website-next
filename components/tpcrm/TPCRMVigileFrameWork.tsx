"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ReusableCard from "@/components/atoms/ReusableCard";
import { TPCRM_VIGILEFRAMEWORK_ARRAY } from "@/constants/TPCRM";

const TPCRMVigileFrameWork = () => {
  return (
    <Wrapper className=" bg-[url('/images/ISO/ISOAuditbg.webp')] bg-center bg-no-repeat bg-cover flex justify-center items-center lg:h-[721px] md:h-[721px] h-auto lg:py-16 md:py-8 py-5 relative ">
      <div className="absolute lg:left-0 md:left-0 md:right-0 lg:right-0 lg:border-b md:border-b  lg:bg-gray-500 md:bg-gray-500 lg:top-[62%] md:top-[60%] "></div>
      <div className="absolute lg:left-0 lg:right-0  md:left-0 md:right-0 lg:border-b md:border-b  lg:bg-gray-500 md:bg-gray-500 lg:top-[98%] md:top-[96%] "></div>
      <div className="justify-center items-center text-[#1F1F1F] ">
        <div className="flex flex-col justify-center items-center text-center lg:gap-2 md:gap-2 gap-2  ">
          <h1 className="lg:text-[24px] md:text-xl text-xl lg:leading-[40px] font-bold mb-2">
            Strengthened by the VIGILE Framework
          </h1>
          <p className="lg:text-xl md:text-base text-base  font-medium">
            St. Fox TPCRM Services align with the VIGILE Framework, offering a
            strategic, proactive approach to third-party risk management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-8 items-center justify-center">
          {TPCRM_VIGILEFRAMEWORK_ARRAY.map((card, index) => (
            <ReusableCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              className="lg:ml-20 border-l border-dashed border-gray-300 lg:h-[274px] lg:py-4 md:h-[270px] md:py-4 "
              boxShadowColor={card.boxShadowColor}
              ImgClassName="w-[54px] h-[54px]"
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default TPCRMVigileFrameWork;
