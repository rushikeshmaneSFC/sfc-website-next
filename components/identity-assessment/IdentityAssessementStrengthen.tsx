import Wrapper from "@/components/atoms/Wrapper";
import { STRENGTHEN_ARRAY } from "@/constants/IdentityAssessementConstant";

const IdentityAssessementStrengthen = () => {
  return (
    <Wrapper className="flex justify-center items-center  h-auto lg:py-5 md:py-5  bg-[#FAFAFA]">
      <div className="justify-center items-center lg:space-y-5 space-y-5">
        <h1 className="lg:text-[28px] lg:leading-[40px] md:text-2xl text-2xl text-center font-bold">
          Strengthen Identity Security Across Your Organization
        </h1>
        <p className="text-base font-normal text-center ">
          St. Fox Identity Assessment Services provide a comprehensive
          evaluation of your Identity and Access Management (IAM) landscape to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[19px] lg:mt-10">
          {STRENGTHEN_ARRAY.map((item, index) => {
            const isLastTwoCentered =
              STRENGTHEN_ARRAY.length % 3 === 2 &&
              (index === STRENGTHEN_ARRAY.length - 2 ||
                index === STRENGTHEN_ARRAY.length - 1);

            return (
              <div
                key={index}
                className={`bg-white relative text-[#1C1C1C] p-5 md:p-4 lg:p-5 rounded-lg shadow-lg text-center   border-t-2 border-[#223780] ${
                  isLastTwoCentered
                    ? "lg:col-span flex flex-col  absolute lg:left-40 md:left-28 justify-center "
                    : ""
                }`}
              >
                <h2 className="text-base font-semibold mb-2 md:mb-2">
                  {item.title}
                </h2>
                <p className="text-[15px] font-normal">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default IdentityAssessementStrengthen;
