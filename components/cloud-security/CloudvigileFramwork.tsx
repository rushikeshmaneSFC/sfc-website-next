"use client";

import Wrapper from "@/components/atoms/Wrapper";

function CloudvigileFramwork() {
  return (
    <Wrapper className="bg-[url('/images/ISO/ISOAuditbg.webp')] flex justify-center items-center bg-no-repeat bg-cover bg-center lg:py-10 md:py-10 py-5 ">
      <div className=" justify-center items-center text-center">
        <p className="text-xl lg:text-2xl font-bold ">
          Aligned with the VIGILE Framework for Cloud Security
        </p>
        <p className="text-sm lg:text-base font-medium mt-2">
          St. Fox Cloud Security Posture Assessment integrates the VIGILE
          Framework, offering a structured and proactive approach.
        </p>
        <div className="lg:mt-0 md:mt-0 mt-4">
          <img
            loading="lazy"
            src="/images/Cloudsecurity/VIgileframe.webp"
            width="2131"
            height="1058"
            alt="Cloud Security Posture Assessment_vigileframework"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default CloudvigileFramwork;
