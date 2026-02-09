"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { CrisisTexts } from "@/constants/ManagedIdentityConstant";

const ManagedCrisis = () => {
  return (
    <Wrapper className="flex justify-center items-center bg-[url('/images/ManagedIdentity/Whitebackground.webp')] bg-cover bg-no-repeat bg-center lg:h-[438px] md:h-[438px] h-auto lg:py-5 md:py-10 py-5">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="lg:text-2xl text-xl md:text-2xl font-bold text-center mb-6 leading-[40px]">
          The Identity Crisis in Cybersecurity
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-[19px] lg:gap-x-[450px] text-center lg:mt-10">
          {CrisisTexts.map((item, index) => {
            const isLastTwoCentered =
              CrisisTexts.length % 2 === 1 &&
              (index === CrisisTexts.length - 1 ||
                index === CrisisTexts.length - 1);

            return (
              <div
                key={index}
                className={`  bg-white flex flex-col items-center justify-center md:left-28  lg:left-0 relative text-[#1C1C1C] p-5 md:p-4 lg:p-5  rounded-lg shadow-lg lg:h-[119px] lg:w-[432px] h-[145px] md:h-auto  hover:border-t-2 hover:border-t-[#223780] transition-all duration-300
${
  isLastTwoCentered
    ? "  lg:col-span-2 md:col-span-2   flex flex-col  absolute lg:left-44 md:left-56 justify-center items-center lg:w-[500px] md:w-[220.67px] md:h-[145px] h-[160px]  "
    : ""
}`}
              >
                <p className="text-base font-normal">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default ManagedCrisis;
