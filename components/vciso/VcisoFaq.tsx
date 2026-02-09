import ReusableCard from "@/components/atoms/ReusableCard";
import Wrapper from "@/components/atoms/Wrapper";
import { FaqsVciso } from "@/constants/VcisoConstant";

function VcisoFaq() {
  return (
    <Wrapper className="bg-[#07111A] bg-no-repeat bg-cover bg-center lg:h-[530px] md:h-[573px] h-[720px] items-center justify-center flex text-[#FFF] py-20">
      <div className="  mt-5 items-center flex flex-col relative">
        <h2 className="text-[20px] lg:text-[24px] font-bold text-center ">
          Frequently Asked Questions
        </h2>
        <div className="absolute lg:bg-gray-500 lg:border-b md:border-b md:bg-gray-500 w-full lg:top-[61%] md:top-[61%] top-[64%]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10  lg:px-10 md:px-5 ">
          {FaqsVciso.map((card, index) => (
            <ReusableCard
              key={index}
              title={card.title}
              description={card.description}
              boxShadowColor={card.boxShadowColor}
              className={
                index === 2
                  ? "md:col-span-2 flex justify-center mx-auto w-full lg:w-[420px] md:w-[330px] border-l  lg:h-[175px] md:h-[170px] h-[180px] "
                  : "border-l  h-[200px]  "
              }
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default VcisoFaq;
