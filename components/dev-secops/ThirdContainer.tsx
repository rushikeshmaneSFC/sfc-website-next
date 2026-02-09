import Wrapper from "@/components/atoms/Wrapper";
import { BsCheck2Circle } from "react-icons/bs";

const items = [
  {
    title: (
      <>
        <span className="text-[#4485EC] font-semibold ">
          Integrated Security Scanning:
        </span>{" "}
        Identify vulnerabilities in code, containers, and dependencies
      </>
    ),
  },
  {
    title: (
      <>
        <span className="text-[#4485EC] font-semibold ">
          Automated Threat Mitigation:
        </span>{" "}
        Remediate issues during the development process
      </>
    ),
  },
  {
    title: (
      <>
        <span className="text-[#4485EC] font-semibold ">
          Compliance Readiness:
        </span>{" "}
        Automate security checks to meet industry standards like GDPR, HIPAA,
        and ISO 27001
      </>
    ),
  },
  {
    title: (
      <>
        <span className="text-[#4485EC] font-semibold ">
          Enhanced Collaboration:
        </span>{" "}
        Enable development, security, and operations teams to work together
        seamlessly
      </>
    ),
  },
];

export default function ThirdContainer() {
  return (
    <Wrapper className="flex justify-center items-center bg-gradient-to-t from-black/20 to-black/20 bg-[#071119] md:h-[680px] lg:h-[680px] sm:h-auto py-10 lg:py-0 md:py-0 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-[50%,50%] lg:grid-cols-[50%,50%]">
        <div className="text-[#fff]">
          <p className="lg:text-2xl text-xl lg:text-start text-center mb-2 font-bold">
            Seamlessly Integrating Security into Your CI/CD Pipeline
          </p>
          <p className="text-base font-normal lg:text-start text-center">
            St. Fox Managed DevSecOps embeds proactive, automated security into
            your software lifecycle.
          </p>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-4 mb-4 mt-5"
            >
              <div>
                <BsCheck2Circle className="text-3xl font-bold text-[#4485EC] w-5 h-5" />
              </div>
              <p className="text-base font-normal">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 relative bg-[url('https://saintfox.azureedge.net/datav2/Threat.png')] bg-contain bg-no-repeat">
          <div className="space-y-8 flex flex-col mt-16">
            <div className="flex justify-start items-start">
              <p
                className="border border-[rgba(255,255,255,0.15)]
          bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)]
          text-[#FFF] py-3 px-6 rounded-full lg:text-base font-medium text-sm text-center"
              >
                Static and Dynamic Application <br />
                Security Testing (SAST/DAST)
              </p>
            </div>
            <div className="flex justify-end items-end text-center">
              <p
                className="border border-[rgba(255,255,255,0.15)]
          bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)]
          text-[#FFF] py-3 px-8 rounded-full lg:text-base font-medium text-sm"
              >
                Container Security and Image <br />
                Scanning
              </p>
            </div>
            <div className="flex justify-start items-start lg:ml-7 text-center">
              <p
                className="border border-[rgba(255,255,255,0.15)]
          bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)]
          text-[#FFF] py-3 px-8 rounded-full lg:text-base font-medium text-sm"
              >
                Infrastructure as Code (IaC) <br /> Security
              </p>
            </div>
            <div className="flex justify-end items-end text-center">
              <p
                className="border border-[rgba(255,255,255,0.15)]
          bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)]
          text-[#FFF] py-3 px-12 rounded-full lg:text-base font-medium text-sm"
              >
                Threat Modeling and Risk
                <br /> Assessments
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
