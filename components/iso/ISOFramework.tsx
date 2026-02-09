"use client";

import Wrapper from "@/components/atoms/Wrapper";

function ISOFramework() {
  return (
    <Wrapper className="bg-[#07111A] flex flex-col items-center py-8 lg:mt-0 mt-5">
      <h2 className="text-xl font-bold text-[#FFF] text-center mb-10 lg:hidden">
        ISO Audits Backed by the VIGILE Framework
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
        <div className="flex flex-col items-center text-[#FFF]">
          <h2 className="font-semibold text-[15px] mb-1">Validate</h2>
          <div className="border border-[#FFFFFF26] bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px] text-[#FFF] rounded-full p-4 shadow-md w-[251px] h-[73px]">
            <p className="text-[13px] font-normal text-center">
              Assess your current compliance posture through gap analysis
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-[#FFF]">
          <h2 className="font-semibold text-[15px] mb-1">Identify</h2>
          <div className="border border-[#FFFFFF26] bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px] text-[#FFF] rounded-full p-4 shadow-md w-[251px] h-[73px]">
            <p className="text-[13px] font-normal text-center">
              Detect security weaknesses and control gaps
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-14 mt-7 gap-6">
        <div className="flex flex-col items-center text-[#FFF]">
          <h2 className="font-semibold text-[15px] mb-1">Guard</h2>
          <div className="border border-[#FFFFFF26] bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px] text-[#FFF] rounded-full p-4 shadow-md w-[251px] h-[73px]">
            <p className="text-[13px] font-normal text-center">
              Implement ISO 27001 controls to mitigate risks
            </p>
          </div>
        </div>
        <h2 className="hidden lg:block text-xl font-bold text-[#FFF] text-center mt-[-20px]">
          ISO Audits Backed by the VIGILE Framework
        </h2>
        <div className="flex flex-col items-center text-[#FFF]">
          <h2 className="font-semibold text-[15px] mb-1">Implement</h2>
          <div className="border border-[#FFFFFF26] bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px] text-[#FFF] rounded-full p-4 w-[251px] h-[73px]">
            <p className="text-[13px] font-normal text-center">
              Documentation & policies aligned with ISO standard
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-[168px] mt-7 gap-6">
        <div className="flex flex-col items-center text-[#FFF]">
          <h2 className="font-semibold text-[15px] mb-1">Learn</h2>
          <div className="border border-[#FFFFFF26] bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px] text-[#FFF] rounded-full p-4 w-[251px] h-[73px]">
            <p className="text-[13px] font-normal text-center">
              Use audit insights to refine your processes
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-[#FFF]">
          <h2 className="font-semibold text-[15px] mb-1">Enhance</h2>
          <div className="border border-[#FFFFFF26] bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px] text-[#FFF] rounded-full p-4 w-[251px] h-[73px]">
            <p className="text-[13px] font-normal text-center">
              Continuously monitor and adapt to maintain certification
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ISOFramework;
