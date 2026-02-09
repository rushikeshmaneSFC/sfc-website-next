// @ts-nocheck
"use client";

import Wrapper from "@/components/atoms/Wrapper";

const LandingInnovate = () => {
  return (
    <Wrapper className="flex justify-center items-center lg:h-[544px] md:h-[544px] h-auto bg-[#000] lg:py-0 md:py-0 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[40%,60%] lg:gap-10 md:gap-8 gap-4 text-[#fff]">
        <div className="flex items-center justify-center">
          <img
            loading="lazy"
            src="/images/Landingpage/Infographic Design.webp"
            className="rounded-lg "
          />
        </div>
        <div className="lg:py-20 md:py-20 space-y-4 lg:text-start md:text-start text-center">
          <h2 className="text-lg lg:text-[40px] lg:leading-[48px] md:text-2xl font-medium ">
            Innovate Fearlessly & Protect Relentlessly
          </h2>
          <p className="text-base lg:text-xl font-normal lg:leading-[31px]">
            Sitting at the intersection of Security and Privacy to help you
            secure your organization and grow fearlessly.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default LandingInnovate;
