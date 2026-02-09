import DottedList from "@/components/atoms/DottedList";
import Wrapper from "@/components/atoms/Wrapper";
import { ENTERPRISE_DATA } from "@/constants/SaseCloudSecurityConstant";

function SaseCloudEnterprise() {
  return (
    <Wrapper className="flex justify-center items-center lg:h-[562px] h-auto 2xl:mt-5 mt-0 py-10 lg:py-20 md:py-10">
      <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-center mb-6 ">
        Comprehensive Cloud Security, Tailored for Your Enterprise
      </h1>
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex items-center justify-center md:justify-start">
          <h2 className="text-base md:text-lg lg:text-xl font-medium text-center md:text-left max-w-lg">
            St. Fox Managed Cloud Security offers end-to-end protection for your
            cloud infrastructure, ensuring:
          </h2>
        </div>
        <DottedList steps={ENTERPRISE_DATA} />
      </div>
      <div className="flex flex-wrap gap-2 justify-center text-center py-6">
        <p className="bg-gray-100 rounded-sm text-[15px]  font-semibold text-[#061018] px-3 py-1 inline-block">
          Cloud Security Posture Management (CSPM)
        </p>
        <p className="bg-gray-100 rounded-sm text-[15px]  font-semibold text-[#183359] px-3 py-1 inline-block">
          Cloud Workload Protection Platform (CWPP)
        </p>
        <p className="bg-gray-100 rounded-sm text-[15px]  font-semibold text-[#431312] px-3 py-1 inline-block">
          Real-Time Monitoring and Alerts
        </p>
        <p className="bg-gray-100 rounded-sm text-[15px]  font-semibold text-[#2E2D0C] px-3 py-1 inline-block">
          Regulatory Compliance Automation
        </p>
      </div>
    </Wrapper>
  );
}

export default SaseCloudEnterprise;
