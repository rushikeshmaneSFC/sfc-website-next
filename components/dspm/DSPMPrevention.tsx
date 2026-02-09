import Wrapper from "@/components/atoms/Wrapper";
import PreventionCard from "@/components/atoms/PreventionCard";

const DSPMPrevention = () => {
  const FEAUTRES = {
    prevention: [
      {
        title: "Automated Data Discovery",
        description:
          "Gain complete visibility into sensitive data across all environments.",
      },
      {
        title: "Risk Assessment & Prioritization",
        description:
          "Identify critical risks and focus on high-priority remediation.",
      },
      {
        title: "Access Management Optimization",
        description:
          "Reduce over-provisioned access rights and enforce least-privilege principles.",
        borderRight: false,
      },
    ],

    prevention2: [
      {
        title: "Compliance Alignment",
        description:
          "Ensure data practices align with GDPR, DPDPA, HIPAA, and PCI- DSS.",
      },
      {
        title: "Real-Time Monitoring",
        description: "Detect unauthorized access and data movements instantly.",
      },
      {
        title: "Compliance-Ready Reporting",
        description:
          "Generate detailed reports for regulatory audits and internal reviews.",
        borderRight: false,
      },
    ],
  };

  return (
    <Wrapper className="flex justify-center items-center  bg-[url('/images/DSPM/Datasecurityposturemanagement.webp')] bg-no-repeat bg-cover object-fill  lg:py-16 py-10">
      <div className="grid w-full ">
        <div className="flex flex-col gap-y-3">
          <h1 className=" text-[#fff] font-bold lg:text-[28px] text-xl lg:leading-10 text-center">
            Why Choose St. Fox for Data Security Posture Management?
          </h1>
          <p className="text-base sm:text-xl text-[#fff] justify-center items-center text-center">
            St. Fox DLP Services provide a comprehensive approach to protect
            sensitive data from accidental or intentional loss:
          </p>
        </div>

        <div className="space-y-5 mt-10">
          <div className="border border-1 border-solid border-[#242424] rounded-lg">
            <div className="grid grid-cols-12 ">
              {FEAUTRES?.prevention?.map((feature, index) => (
                <PreventionCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  borderRight={feature.borderRight ?? index !== FEAUTRES.prevention.length - 1}
                />
              ))}
            </div>
          </div>

          <div className="border border-1 border-solid border-[#242424] rounded-lg">
            <div className="grid grid-cols-12">
              {FEAUTRES?.prevention2?.map((feature, index) => (
                <PreventionCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  borderRight={feature.borderRight ?? index !== FEAUTRES.prevention2.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DSPMPrevention;
