import DottedList from "@/components/atoms/DottedList";
import Wrapper from "@/components/atoms/Wrapper";

function SecurityNeeds() {
  const securitySteps = [
    {
      title: "Real-Time Threat Monitoring",
      description: "Continuous visibility into network traffic.",
    },
    {
      title: "Advanced Threat Detection",
      description: "Block malware, ransomware, and zero-day exploits.",
    },
    {
      title: "Firewall Policy Management",
      description: "Optimize and enforce rules for maximum security.",
    },
    {
      title: "Proactive Threat Mitigation",
      description: "Stop threats before they impact your operations.",
    },
  ];
  return (
    <Wrapper className="flex justify-center items-center md:mt-16 lg:mt-5">
      <h1 className="lg:text-[24px] text-xl font-bold text-center mb-4">
        Comprehensive Firewall Management for Dynamic Security Needs
      </h1>
      <div className="grid grid-cols-1 gap-10 lg:gap-0 items-center md:grid-cols-2">
        <h2 className="lg:text-xl text-base font-medium text-center md:text-left">
          St. Fox Managed Firewall Services go beyond traditional firewall
          solutions, offering:
        </h2>
        <DottedList steps={securitySteps} />
      </div>
      <div className="flex flex-wrap gap-3 justify-center text-center py-6">
        <p className="bg-gray-100 rounded-md text-sm font-semibold text-[#061018] px-3 py-1 ">
          Unified Threat Management (UTM)
        </p>
        <p className="bg-gray-100 rounded-md text-sm font-semibold text-[#183359] px-3 py-1 ">
          Next-Generation Firewall (NGFW) Deployment
        </p>
        <p className="bg-gray-100 rounded-md text-sm font-semibold text-[#431312] px-3 py-1  ">
          24/7 Monitoring and Incident Response
        </p>
        <p className="bg-gray-100 rounded-md text-sm font-semibold text-[#2E2D0C] px-3 py-1">
          Compliance and Audit Support
        </p>
      </div>
    </Wrapper>
  );
}

export default SecurityNeeds;
