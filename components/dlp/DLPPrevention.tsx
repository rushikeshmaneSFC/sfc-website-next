import PreventionCard from "@/components/atoms/PreventionCard";
import Wrapper from "@/components/atoms/Wrapper";

const DLPPrevention = () => {
  const FEAUTRES = {
    prevention: [
      {
        title: "Data Discovery and Classification",
        description:
          "St. Fox DLP Services comprehensively protect sensitive data from loss.",
      },
      {
        title: "Custom Policy Development",
        description:
          "Enforce tailored policies to control data sharing and access.",
      },
      {
        title: "Cloud and Endpoint Protection",
        description:
          "Secure data across on-premises, cloud, and endpoint environments.",
        borderRight: false,
      },
    ],

    prevention2: [
      {
        title: "Insider Threat Mitigation",
        description:
          "Prevent intentional or accidental data leaks by monitoring user activity.",
      },
      {
        title: "Real-Time Monitoring and alerts",
        description: "Get instant notifications of suspicious data movements.",
      },
      {
        title: "Compliance Support",
        description:
          "Ensure compliance with GDPR, DPDPA, HIPAA, PCI-DSS, and more.",
        borderRight: false,
      },
    ],
  };

  return (
    <Wrapper className="flex justify-center items-center bg-[url('https://saintfox.azureedge.net/datav2/Lossprevention.webp')] bg-no-repeat bg-cover object-fill lg:py-14 py-10">
      <div className="grid w-full ">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-[#fff] font-bold lg:text-[28px] text-xl lg:leading-10 text-center">
            Why Choose St. Fox for Data Loss Prevention?
          </h1>
          <p className="text-base lg:text-xl text-[#fff] justify-center items-center text-center">
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

export default DLPPrevention;
