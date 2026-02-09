"use client";

import Wrapper from "@/components/atoms/Wrapper";

const TPCRMRiskManagement = () => {
  return (
    <Wrapper className=" flex justify-center items-center lg:h-[624px] md:h-[624px] h-auto lg:py-0 md:py-0 py-5">
      <div>
        <div className="flex flex-col text-[#1F1F1F] text-center lg:gap-3 md:gap-2 gap-3">
          <h1 className="lg:text-[24px] md:text-xl text-xl font-bold ">
            Comprehensive Third-Party Cyber Risk Management
          </h1>
          <p className="text-base ">
            St. Fox TPCRM Services provide end-to-end management of third-party
            cyber risks to secure your supply chain and protect your
            organization.
          </p>
          <div className="lg:pt-[48px] md:pt-[40px] pt-10">
            <img
              loading="lazy"
              src="/images/TPCRM/TPCRM_Riskmanagement.webp"
              alt="Third-Party Cyber Risk Management"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TPCRMRiskManagement;
