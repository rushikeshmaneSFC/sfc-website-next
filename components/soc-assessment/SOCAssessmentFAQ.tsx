import ReusableCard from "@/components/atoms/ReusableCard";
import Wrapper from "@/components/atoms/Wrapper";
import { SOCASSESSMENT_FAQ } from "@/constants/SOCAssessmentConstant";

function SOCAssessmentFAQ() {
  return (
    <Wrapper className="bg-[rgba(26,63,126,0.05)] lg:h-[573px] items-center justify-center flex text-[#1F1F1F] md:h-[580px]">
      <div className="  mt-5 items-center flex flex-col relative">
        <h2 className="text-[20px] lg:text-[24px] font-bold text-center ">
          Frequently Asked Questions
        </h2>
        <div className="absolute lg:bg-gray-500 lg:border-b md:border-b md:bg-gray-500 w-full lg:top-[65%] md:top-[62%] "></div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10  lg:px-10 md:px-5 ">
          {SOCASSESSMENT_FAQ.map((card, index) => (
            <ReusableCard
              key={index}
              title={card.title}
              description={card.description}
              className={
                index === 2
                  ? "md:col-span-2 flex justify-center mx-auto w-full lg:w-[420px] md:w-[330px] border-l lg:h-[145px] md:h-[170px] h-[180px] md:pt-10 "
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

export default SOCAssessmentFAQ;
