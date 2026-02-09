import DottedList from "@/components/atoms/DottedList";
import Wrapper from "@/components/atoms/Wrapper";
import { STRATEGICNEEDS_DATA } from "@/constants/VcisoConstant";

function VcisoStrategic() {
  return (
    <Wrapper className=" flex justify-center items-center  h-auto  py-5">
      <h1 className="lg:text-2xl text-xl font-bold text-center mb-6 ">
        Strategic Cybersecurity Leadership Tailored to Your Business Needs
      </h1>
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex flex-col items-center md:items-start  lg:items-start justify-start">
          <h2 className="text-base lg:text-xl font-medium text-center md:text-left max-w-lg">
            St. Fox vCISO Services provide organizations with on-demand access
            to seasoned cybersecurity professionals who:
          </h2>
          <div className=" grid grid-cols-1 lg:gap-2 md:gap-4  gap-4 py-6 ">
            <p className="bg-[#0610180D] rounded-md text-sm sm:text-xs md:text-base font-semibold text-[#061018] px-3 py-1 inline-block">
              Expert Cybersecurity Team
            </p>
            <p className="bg-[#1833590D] rounded-md text-sm sm:text-xs md:text-base font-semibold text-[#183359] px-3 py-1 inline-block">
              Flexible Engagement
            </p>
            <p className="bg-[#4313120D] rounded-md text-sm sm:text-xs md:text-base font-semibold text-[#431312] px-3 py-1 inline-block">
              Strategic Security Planning
            </p>
            <p className="bg-[#2E2D0C0D] rounded-md text-sm sm:text-xs md:text-base font-semibold text-[#2E2D0C] px-3 py-1 inline-block">
              Comprehensive Reporting
            </p>
          </div>
        </div>
        <DottedList steps={STRATEGICNEEDS_DATA} />
      </div>
    </Wrapper>
  );
}

export default VcisoStrategic;
