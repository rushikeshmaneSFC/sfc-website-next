"use client";

import ReusableCard from "@/components/atoms/ReusableCard";
import Wrapper from "@/components/atoms/Wrapper";
import { SocFaqs } from "@/constants/socConstant";

function SOCQuestions() {
  return (
    <Wrapper className="bg-[#FFFFFF] lg:h-[515px] items-center justify-center flex ">
      <div className="  mt-5 items-center flex flex-col relative">
        <h2 className="text-[20px] lg:text-[24px] font-bold text-center ">
          Frequently Asked Questions
        </h2>
        <div className="absolute lg:bg-gray-500 lg:border-b md:border-b md:bg-gray-500 w-full top-[65%] "></div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10  lg:px-10 md:px-5 ">
          {SocFaqs.map((card, index) => (
            <ReusableCard
              key={index}
              title={card.title}
              description={card.description}
              className={
                index === 2
                  ? "md:col-span-2 flex justify-center mx-auto w-full lg:w-[420px] md:w-[330px] border-l lg:h-[147px] md:h-[145px] h-[180px] md:pt-5"
                  : "  border-l h-[200px]  "
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

export default SOCQuestions;
