"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ApproachCards from "./ApproachCards";
import { MANAGED_APPROACHED } from "@/constants/ManagedIdentityConstant";

const ManagedApproach = () => {
  return (
    <Wrapper
      className={`bg-[url('/images/ManagedIdentity/ManagedApproach.webp')] lg:h-[614px] md:h-[700px] h-auto py-10 flex items-center justify-center overflow-hidden`}
    >
      <h1 className="text-[#fff] lg:text-[28px] md:text-2xl text-lg font-bold text-center">
        Our 6-Step Managed Identity Approach
      </h1>
      <div className="grid grid-cols-12 gap-2 pt-10 ">
        {MANAGED_APPROACHED.map((item) => (
          <div
            key={item.id}
            className="lg:col-span-4 md:col-span-6 col-span-12 "
          >
            <ApproachCards
              heading={item.heading}
              text={item.text}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default ManagedApproach;
