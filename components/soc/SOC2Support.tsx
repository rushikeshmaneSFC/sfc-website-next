"use client";

import DottedList from "@/components/atoms/DottedList";
import Wrapper from "@/components/atoms/Wrapper";
import { services } from "@/constants/socConstant";

function SOC2Support() {
  return (
    <Wrapper className="flex justify-center items-center md:mt-5 mt-0 ">
      <h1 className="lg:text-2xl text-xl font-bold text-center mb-2 ">
        Simplify Your SOC 2 Journey with Expert Support
      </h1>
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex items-center justify-center md:justify-start">
          <h2 className="text-base lg:text-xl font-medium text-center md:text-left max-w-lg">
            St. Fox SOC 2 Assessment Services provide a structured approach to
            achieve compliance efficiently and effectively.
          </h2>
        </div>

        <DottedList steps={services} />
      </div>
    </Wrapper>
  );
}

export default SOC2Support;
