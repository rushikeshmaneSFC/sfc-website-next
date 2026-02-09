"use client";

import Wrapper from "@/components/atoms/Wrapper";

function VigileFramework() {
  return (
    <Wrapper className="bg-[url('/images/ISO/ISOAuditbg.webp')] flex justify-center items-center bg-no-repeat bg-cover bg-center py-10 lg:py-16 ">
      <h1 className="lg:text-2xl text-xl text-center font-bold">
        VIGILE Framework
      </h1>
      <p className="lg:text-xl text-base font-medium text-center text-[#1C1C1C] md:mb-8 mt-2 mb-6">
        St. Fox SOC 2 Assessment Services are grounded in the VIGILE Framework,
        offering a structured, proactive methodology.
      </p>
      <div className="flex justify-center xl:h-[417px]">
        <img
          loading="lazy"
          width="600"
          height="517"
          className="object-cover w-full max-w-[600px] h-auto"
          src="/images/SOC/SOC2Vigileframework.webp"
          alt="Security Operations Center2_vigileframework"
        />
      </div>
    </Wrapper>
  );
}

export default VigileFramework;
