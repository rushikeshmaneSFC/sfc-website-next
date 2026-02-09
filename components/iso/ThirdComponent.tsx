"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { IsoItems } from "@/constants/ISOConstant";

function ThirdComponent() {
  return (
    <Wrapper className=" bg-[url('/images/ISO/ISOAuditbg.webp')]  flex justify-center items-center bg-no-repeat bg-cover bg-center lg:h-[734px] md:h-[734px] h-auto">
      <div className="flex flex-col justify-center text-center items-center lg:text-2xl text-xl font-bold ">
        <p>Comprehensive ISO Audit Support for Seamless Certification</p>
        <div className="mt-8 lg:mt-12 md:mt-4">
          <img
            loading="lazy"
            src="/images/ISO/ISO_audit_support.webp"
            alt="ISO_audit_support"
            width="800"
            height="400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 md:gap-2 mt-5 justify-center items-center">
        {IsoItems.map((item, index) => (
          <div
            key={index}
            className="border py-2 px-4 font-semibold text-[11px] bg-white rounded-md"
          >
            {item.name}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default ThirdComponent;
