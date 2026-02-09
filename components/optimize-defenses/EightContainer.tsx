import Wrapper from "@/components/atoms/Wrapper";
import ReusableCard from "@/components/atoms/ReusableCard";
import {
  OPTOMIZEDEFENSES_FIRST_ARRAY,
  OPTOMIZEDEFENSES_SECOND_ARRAY,
} from "@/constants/OptimizeDefenses";

export default function EightContainer() {
  return (
    <Wrapper className=" bg-[rgba(26,63,126,0.05)] flex justify-center items-center lg:h-[615px] md:h-[515px] h-auto lg:py-0 md:py-0 py-8">
      <div className="text-center">
        <p className="text-[24px] font-bold ">Frequently Asked Questions</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:pt-10 md:pt-5  lg:px-10 md:px-5 lg:border-b-2 md:border-b-2 mt-5 lg:mt-0 md:mt-0">
        {OPTOMIZEDEFENSES_FIRST_ARRAY.map((card, index) => (
          <ReusableCard
            key={index}
            title={card.title}
            description={card.description}
            className={
              index === 2
                ? "md:col-span-2 flex justify-center mx-auto w-full lg:w-[420px] md:w-[330px] border-l-2 lg:h-[146px] md:h-[130px] h-[180px] md:pt-5 "
                : "  border-l h-[170px] "
            }
            icon={undefined}
            boxShadowColor={card.boxShadowColor}
            ImgClassName={undefined}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {OPTOMIZEDEFENSES_SECOND_ARRAY.map((card, index) => (
          <ReusableCard
            key={index}
            title={card.title}
            description={card.description}
            className={
              index === 2
                ? "md:col-span-2 flex justify-center mx-auto w-full lg:w-[420px] md:w-[330px] border-l-2 lg:h-[130px] md:h-[150px] h-[180px] md:pt-5"
                : "  border-l h-[170px] py-10 mx-0 md:mx-0 lg:ml-20 "
            }
            icon={undefined}
            boxShadowColor={card.boxShadowColor}
            ImgClassName={undefined}
          />
        ))}
      </div>
    </Wrapper>
  );
}
