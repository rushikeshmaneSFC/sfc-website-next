import PreventionCard from "@/components/atoms/PreventionCard";

const LandingManagedService = () => {
  const FEAUTRES = {
    prevention: [
      {
        title: "PQC Readiness",
        description:
          "Prepare your organization to withstand future quantum computing threats with proactive cryptographic assessments and quantum-safe transition strategies.",
        borderRight: false,
        href: "/vapt",
      },

      {
        title: "LLM Red Teaming",
        description:
          "Test and strengthen your AI models against evolving threats with GenAI Risk Assurance, ensuring your Large Language Models (LLMs) are secure, ethical, and reliable.",
        href: "/ai-security",
      },
      {
        title: "Managed ZTNA",
        description:
          "Implement a Zero Trust architecture with services like SSE, UEBA, DLP, and SSO, delivering secure, identity-driven access without exposing internal resources.",
        href: "/sase",
      },
    ],

    prevention2: [
      {
        title: "Managed SOC/XDR",
        description:
          "Get 24/7 security operations and extended threat detection and response, ensuring real-time monitoring, rapid incident handling, and continuous peace of mind.",
        href: "/soc2",
      },
      {
        title: "Managed Cloud",
        description:
          "Protect and optimize your cloud environments with modern solutions like CNAPP (Cloud-Native Application Protection Platform) to ensure comprehensive, scalable cloud security.",
        href: "/cloud-security",
      },
      {
        title: "Managed Identity",
        description:
          "Secure user access and streamline identity management with ISPM, IGA, PAM, and SSO solutions, reducing risks of credential abuse and improving compliance.",
        borderRight: false,
        href: "/managed-identity",
      },
    ],
  };
  return (
    <div className="flex justify-center items-center 2xl:h-[502px] lg:h-[600px] md:h-auto h-auto bg-no-repeat bg-cover object-fill pt-14">
      <div className="grid w-full">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-[#fff] font-semibold lg:text-[36px] text-xl lg:leading-10 text-center   lg:px-0 px-4">
            Seamless, Scalable and Smart Next-Gen Managed Services
          </h2>
          <p className="text-base font-medium lg:text-lg  text-[#fff] justify-center items-center text-center  2xl:mx-[250px] lg:mx-20 md:mx-10 lg:px-0 px-4">
            We offer a full spectrum of managed security and resilience services
            designed for the evolving digital landscape helping organizations
            stay secure, compliant, and confidently ahead of emerging threats.
          </p>
        </div>

        <div className="space-y-5 lg:mt-12 mt-3 2xl:mx-28 lg:mx-20 mx-5">
          <div className="hidden lg:block">
            <div className="border border-[#242424] rounded-lg">
              <div className="grid grid-cols-12">
                {FEAUTRES?.prevention?.map((feature, index) => (
                  <PreventionCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    borderRight={index !== FEAUTRES.prevention.length - 1}
                    href={feature.href}
                  />
                ))}
              </div>
            </div>

            <div className="border border-[#242424] rounded-lg mt-5">
              <div className="grid grid-cols-12">
                {FEAUTRES?.prevention2?.map((feature, index) => (
                  <PreventionCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    borderRight={index !== FEAUTRES.prevention2.length - 1}
                    href={feature.href}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="block lg:hidden space-y-5">
            {[
              ...(FEAUTRES?.prevention || []),
              ...(FEAUTRES?.prevention2 || []),
            ].map((feature, index) => (
              <div
                key={index}
                className="border border-[#242424] rounded-lg p-2"
              >
                <PreventionCard
                  title={feature.title}
                  description={feature.description}
                  borderRight={false}
                  href={feature.href}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingManagedService;
