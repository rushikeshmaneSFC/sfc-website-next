import Wrapper from "@/components/atoms/Wrapper";

export default function FifthContainer() {
  return (
    <Wrapper className=" bg-[url('https://saintfox.azureedge.net/datav2/Whitebackground.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center lg:h-[470px] md:h-[470px] h-auto ">
      <div className="text-center md:mt-6 lg:mb-8">
        <p className="text-xl sm:text-2xl font-bold">
          Why Choose St. Fox for Compromise Assessment?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mt-6">
        <div className="bg-[#FFF] border rounded-lg p-4 shadow-md">
          <p className="text-lg font-semibold mb-2">Proactive Threat Hunting</p>
          <p className="text-base font-medium">
            Identify advanced threats, backdoors, and malware.
          </p>
        </div>
        <div className="bg-[#FFF] border rounded-lg p-4 shadow-md">
          <p className="text-lg font-semibold mb-2">Network and Monitoring</p>
          <p className="text-base font-medium">
            Detect unusual behavior across all systems and devices.
          </p>
        </div>
        <div className="bg-[#FFF] border rounded-lg p-4 shadow-md">
          <p className="text-lg font-semibold mb-2">Forensic Log Analysis</p>
          <p className="text-base font-medium">
            Pinpoint the source and scope of breaches through investigation.
          </p>
        </div>
        <div className="bg-[#FFF] border rounded-lg p-4 shadow-md">
          <p className="text-lg font-semibold mb-2">
            Actionable Remediation Plans
          </p>
          <p className="text-base font-medium">
            Receive clear, step-by-step guidance to eliminate threats.
          </p>
        </div>
        <div className="bg-[#FFF] border rounded-lg p-4 shadow-md">
          <p className="text-lg font-semibold mb-2">AI-Powered Insights</p>
          <p className="text-base font-medium">
            Use advanced tools to identify sophisticated and evolving threats.
          </p>
        </div>
        <div className="bg-[#FFF] border rounded-lg p-4 shadow-md">
          <p className="text-lg font-semibold mb-2">Post-Assessment Support</p>
          <p className="text-base font-medium">
            Implement long-term solutions to prevent future compromises.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
