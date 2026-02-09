import ReusableCard from "@/components/atoms/ReusableCard";
import Wrapper from "@/components/atoms/Wrapper";
import { FAQ_ARRAY } from "@/constants/IdentityAssessementConstant";

const IdentityAssessementFAQ = () => {
  return (
    <Wrapper
      className="bg-[rgba(26,63,126,0.05)] bg-[#FFFFFF] bg-no-repeat bg-cover bg-center
lg:h-[515px] h-auto items-center justify-center flex"
    >
      <div className="lg:mt-5 md:mt-5 mt-4 items-center flex flex-col relative">
        <h2 className="text-xl lg:text-2xl font-bold text-center ">
          Frequently Asked Questions
        </h2>
        <div className="absolute lg:bg-gray-500 lg:border-b md:border-b md:bg-gray-500 w-full lg:top-[65.6%] md:top-[63%] "></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:pt-10 md:pt-5  lg:px-10 md:px-5 lg:mt-0 mt-5 ">
          {FAQ_ARRAY.map((card, index) => (
            <ReusableCard
              key={index}
              title={card.title}
              description={card.description}
              className={
                index === 2
                  ? "md:col-span-2 flex justify-center mx-auto w-full lg:w-[420px] md:w-[330px] border-l lg:h-[145px] md:h-[145px] h-[180px] md:pt-5 "
                  : "border-l h-[200px]  "
              }
              icon={undefined}
              boxShadowColor={card.boxShadowColor}
              ImgClassName={undefined}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default IdentityAssessementFAQ;
