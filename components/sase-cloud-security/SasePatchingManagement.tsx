import HeroSection from "@/components/atoms/HeroSection";

export default function SasePatchingManagement() {
  const topRowFeatures = [
    {
      title: "Cloud Security Posture Management (CSPM)",
      description: "Detect and remediate misconfigurations in real-time",
    },
    {
      title: "Identity and Access Management (IAM)",
      description:
        "Enforce least-privilege access and monitor for suspicious activity",
    },
    {
      title: "Cloud Workload Protection Platform (CWPP)",
      description: "Safeguard workloads against malware, ransomware, and APIs",
    },
  ];

  const bottomRowFeatures = [
    {
      title: "Compliance Reporting",
      description: "Automated, audit-ready reports for regulatory frameworks",
    },
    {
      title: "AI-Driven Threat Detection",
      description:
        "Analyze cloud activity to uncover anomalies and insider threats",
    },
    {
      title: "Multi-Cloud Support",
      description:
        "Seamlessly secure AWS, Azure, Google Cloud, and hybrid environments",
    },
  ];

  const FeatureCard = ({
    features,
  }: {
    features: { title: string; description: string }[];
  }) => (
    <div className="border border-slate-700 rounded-2xl p-6 md:p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="relative">
            {index < features.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-3 bottom-3 w-px bg-[#2C3945]" />
            )}

            {index < features.length - 1 && (
              <div className="lg:hidden absolute left-1/2 -translate-x-1/2 bottom-0 w-1/2 h-px bg-[#2C3945]" />
            )}

            <div className="pr-0 lg:pr-8 pb-4 lg:pb-0">
              <h3 className="text-xs md:text-lg font-semibold mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed opacity-90">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <HeroSection
      className=" bg-no-repeat bg-cover bg-center lg:h-[700px] md:h-[850px] h-auto flex flex-col items-center justify-center lg:py-0 md:py-0 "
      style={{
        backgroundImage: "url(/images/Cloudsecurity/CloudSecurity.jpg)",
      }}
    >
      <div
        className="
bg-no-repeat bg-center bg-cover
space-y-8
mt-[-20px]
sm:mt-[-60px]
"
      >
        <h2 className="text-[16px] lg:text-[26px] text-[#FFF] font-bold lg:leading-[40px] text-center ">
          Why Choose St. Fox for Cloud Security?
        </h2>
        <div className=" mx-auto space-y-6">
          <FeatureCard features={topRowFeatures} />
          <FeatureCard features={bottomRowFeatures} />
        </div>
      </div>
    </HeroSection>
  );
}
