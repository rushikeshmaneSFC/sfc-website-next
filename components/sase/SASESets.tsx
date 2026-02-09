"use client";

import Wrapper from "@/components/atoms/Wrapper";

function SASESets() {
  return (
    <Wrapper className=" bg-[url('/images/SASE/Framesetbg.webp')] bg-cover bg-center flex  justify-center items-center py-10 px-4 lg:py-16">
      <div className="grid grid-cols-1 w-full items-center gap-8 md:gap-12 md:py-[28px] md:grid-cols-2">
        <div className="flex justify-start items-start">
          <p className="text-2xl lg:text-[40px] font-bold lg:leading-[48px] text-[#FFF]">
            What Sets St. Fox Managed SASE Apart?
          </p>
        </div>
        <div className="grid gap-1">
          <div className="flex ">
            <img src="/images/SASE/frame.webp" className="w-7 h-7" alt="" />
            <p className="text-[#3B73CC] font-semibold lg:text-lg text-lg  ">
              Zero Trust & Secure Access
            </p>
          </div>
          <p className="text-[#FFF]">
            ZTNA and SWG ensure identity-based, context-aware access while
            protecting users from internet threats like malware and phishing.
          </p>
          <div className="flex mt-4">
            <img src="/images/SASE/frame.webp" className="w-7 h-7" alt="" />
            <p className="text-[#3B73CC] font-semibold lg:text-lg text-lg ">
              Cloud & Network Security
            </p>
          </div>
          <p className="text-[#FFF]">
            CASB and SD-WAN provide secure, high-speed connectivity while
            monitoring cloud application usage to prevent data loss.
          </p>
          <div className="flex mt-4">
            <img src="/images/SASE/frame.webp" className="w-7 h-7" alt="" />
            <p className="text-[#3B73CC] font-semibold lg:text-lg text-lg  ">
              Threat Management & Compliance
            </p>
          </div>
          <p className="text-[#FFF]">
            AI-driven threat detection, automated response, and regulatory
            compliance tools ensure security and audit readiness for GDPR,
            HIPAA, PCI-DSS, and more.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
export default SASESets;
