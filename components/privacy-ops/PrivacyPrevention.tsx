import Wrapper from "@/components/atoms/Wrapper";
import PreventionCard from "@/components/atoms/PreventionCard";

const PrivacyPrevention = () => {
  const FEAUTRES = {
    prevention: [
      {
        title: "Data Discovery and Mapping",
        description:
          "Identify and classify sensitive data to enhance visibility and control.",
      },
      {
        title: "Compliance Automation",
        description:
          "Streamline adherence to GDPR, DPDPA, HIPAA, CCPA, and other global regulations.",
      },
      {
        title: "Regulatory Audit Support",
        description:
          "Generate compliance-ready reports for audits and regulators.",
        borderRight: false,
      },
    ],

    prevention2: [
      {
        title: "Data Subject Access Request (DSAR) Management",
        description: "Manage DSAR workflows efficiently and securely.",
      },
      {
        title: "Ongoing Monitoring and Reporting",
        description:
          "Continuously track and optimize privacy practices to reduce risks.",
      },
      {
        title: "Privacy Impact Assessments (PIAs)",
        description: "Assess and mitigate risks to sensitive data.",
        borderRight: false,
      },
    ],
  };

  return (
    <Wrapper className="flex justify-center items-center  bg-[url('https://saintfox.azureedge.net/datav2/PricacyopsPrevention2x.webp')] lg:py-24 py-10 bg-no-repeat bg-cover bg-center">
      <div className="grid w-full ">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-[#fff] font-bold lg:text-[28px] text-xl lg:leading-10 text-center">
            Why Choose St. Fox for Privacy Ops?
          </h1>
        </div>

        <div className="space-y-5 mt-10">
          <div className="border border-1 border-solid border-[#242424] rounded-lg">
            <div className="grid grid-cols-12">
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

export default PrivacyPrevention;
