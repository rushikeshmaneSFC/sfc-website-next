import DottedList from "@/components/atoms/DottedList";
import Wrapper from "@/components/atoms/Wrapper";
import { VDPO_DATAPROTECTION } from "@/constants/VDPOConstant";

const VDPODataProtection = () => {
  return (
    <Wrapper className=" flex justify-center items-center h-auto py-5 ">
      <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-center md:mb-6 ">
        Simplified Data Protection with On-Demand Expertise
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[50%,50%]  l:grid-cols-[50%,50%] md:gap-5 lg:gap-0 gap-4 ">
        <div className="flex flex-col lg:gap-4 md:gap-3 md:py-10 lg:py-32 gap-3 ">
          <h2 className="lg:text-xl md:text-xl text-base font-medium text-center md:text-left max-w-lg mb-4 lg:mt-0 md:mt-0 mt-4 ">
            St. Fox Virtual Data Protection Officer (vDPO) services offer
            tailored, expert guidance to:
          </h2>
          <span className="text-[#061018] rounded-lg bg-[rgba(26,63,126,0.05)] font-semibold text-sm lg:w-[345px] md:w-[280px] px-4 py-2">
            Expert guidance on global data regulations
          </span>
          <span className="text-[#183359] rounded-lg bg-[rgba(26,63,126,0.05)] font-semibold text-sm lg:w-[272px] md:w-[280px] px-4 py-2">
            Tailored data privacy frameworks
          </span>
          <span className="text-[#431312] bg-[rgba(26,63,126,0.05)] rounded-lg font-semibold text-sm lg:w-[294px] md:w-[280px] px-4 py-2">
            Continuous compliance monitoring
          </span>
          <span className="text-[#2E2D0C] bg-[rgba(26,63,126,0.05)] rounded-lg  font-semibold text-sm lg:w-[345px] md:w-[280px] px-4 py-2">
            Comprehensive breach response planning
          </span>
        </div>

        <div>
          <DottedList
            steps={VDPO_DATAPROTECTION}
            className="lg:space-y-10 md:space-y-7 space-y-6"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default VDPODataProtection;
