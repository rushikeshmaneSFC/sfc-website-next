"use client";

import ReusableCard from "@/components/atoms/ReusableCard";
import Wrapper from "@/components/atoms/Wrapper";
import { FaqsCloud } from "@/constants/CloudConstant";

function Cloud_TenthComponent() {
  return (
    <Wrapper
      className=" bg-[rgba(26,63,126,0.05)] bg-cover bg-center
lg:h-[573px] md:h-[573px] items-center justify-center flex py-10 lg:py-0 md:py-0"
    >
      <div className="  mt-5 items-center flex flex-col relative">
        <h2 className="text-[20px] lg:text-[24px] font-bold text-center lg:mb-0 md:mb-0 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="absolute lg:bg-gray-500 lg:border-b md:border-b md:bg-gray-500 w-full lg:top-[62%] md:top-[61%] top-[64%] "></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:pt-10 md:pt-10 lg:px-10 md:px-5 ">
          {FaqsCloud.map((card, index) => (
            <ReusableCard
              key={index}
              title={card.title}
              description={card.description}
              className={
                index === 2
                  ? "md:col-span-2 flex justify-center mx-auto w-full lg:w-[420px] md:w-[330px] border-l lg:h-[170px] md:h-[200px] h-[180px] md:pt-10 "
                  : "  border-l lg:h-[200px] md:h-[240px] h-[200px]   py-2 "
              }
              icon={undefined}
              boxShadowColor={card.boxShadowColor}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Cloud_TenthComponent;
