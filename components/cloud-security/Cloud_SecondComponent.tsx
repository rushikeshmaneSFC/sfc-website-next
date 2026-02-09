"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { securityTexts } from "@/constants/CloudConstant";

function Cloud_SecondComponent() {
  return (
    <Wrapper className=" flex justify-center items-center">
      <div className="flex flex-col items-center justify-center lg:py-10">
        <h2 className="lg:text-[28px] text-2xl font-[700] text-center md:mb-6 mb-8 lg:leading-[40px]">
          Are You Confident in Your Cloud Security Posture?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-[19px] lg:gap-x-[450px] text-center lg:mt-10">
          {securityTexts.map((item, index) => {
            const isLastTwoCentered =
              securityTexts.length % 2 === 1 &&
              (index === securityTexts.length - 1 ||
                index === securityTexts.length - 1);

            return (
              <div
                key={index}
                className={` bg-white flex flex-col items-center justify-center md:left-28  lg:left-0 relative text-[#1C1C1C] p-5 md:p-4 lg:p-5  rounded-lg shadow-lg lg:h-[119px] lg:w-[432px] h-[145px] md:h-auto  hover:border-t-2 hover:border-t-[#223780] transition-all duration-300
${
  isLastTwoCentered
    ? "  lg:col-span-2 md:col-span-2   flex flex-col  absolute lg:left-44 md:left-56 justify-center items-center lg:w-[500px] md:w-[220.67px] md:h-[145px] h-[160px] "
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
}

export default Cloud_SecondComponent;
