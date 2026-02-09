"use client";

import ReusableCard from "@/components/atoms/ReusableCard";
import Wrapper from "@/components/atoms/Wrapper";
import { IsoFaqs } from "@/constants/ISOConstant";

function ISOQuestions() {
  return (
    <Wrapper className="bg-[rgba(26,63,126,0.05)] lg:h-[515px] items-center justify-center flex">
      <div className="mt-5 items-center flex flex-col relative">
        <h2 className="text-xl lg:text-2xl font-bold text-center ">
          Frequently Asked Questions
        </h2>
        <div className="absolute lg:bg-gray-500 lg:border-b md:border-b md:bg-gray-500 w-full top-[65%]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10  lg:px-10 md:px-5 ">
          {IsoFaqs.map((card, index) => (
            <ReusableCard
              key={index}
              title={card.title}
              description={card.description}
              className={
                index === 2
                  ? "md:col-span-2 flex justify-center mx-auto w-full lg:w-[420px] md:w-[330px] border-l lg:h-[145px] md:h-[145px] h-[180px] md:pt-5"
                  : "  border-l h-[200px]  lg:py-5 md:py-0 py-4"
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

export default ISOQuestions;
