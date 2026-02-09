import ServiceCard from "@/components/atoms/ServiceCard";
import Wrapper from "@/components/atoms/Wrapper";

function SpecializedSecondContainer() {
  const services = [
    {
      title: "ISO Audits",
      description:
        "Achieve ISO 27001 certification with our audit services streamline compliance, strengthen security, and build trust.",
      link: "/iso",
    },
    {
      title: "SOC 2 Audits",
      description:
        "Achieve SOC 2 compliance with St. Fox expert assessments to meet standards and build customer trust.",
      link: "/soc2",
    },
    {
      title: "VAPT",
      description:
        "Uncover and fix vulnerabilities with St. Fox VAPT identify security gaps and simulate real-world attacks to strengthen your defenses.",
      link: "/vapt",
    },
    {
      title: "RED Teaming",
      description:
        "Partner with St. Fox for expert-led Virtual CISO (vCISO) Services tailored to your unique needs.",
      link: "/OptimizeDefenses",
    },
    {
      title: "TPCRM",
      description:
        "Secure your supply chain with St. Fox TPCRM identify, assess, and mitigate third-party cyber risks.",
      link: "/tpcrm",
    },
    {
      title: "vCISO",
      description:
        "Expert cybersecurity leadership with St. Fox vCISO strategic guidance to strengthen your posture without a full-time CISO.",
      link: "/vciso",
    },
    {
      title: "vDPO",
      description:
        "Ensure Data Privacy Compliance with St. Fox vDPO Services. Compliance Success, Risk Reduction and Employee Awareness.",
      link: "/vdpo",
    },
    {
      title: "Incident Response",
      description:
        "Expert Cybersecurity Support to mitigate Threats, minimize downtime and protect your business.",
      link: "/incident-response",
    },
    {
      title: "SOC Assessment",
      description:
        "Optimize security operations with St. Fox SOC Assessment uncover gaps, boost efficiency, and fortify your SOC.",
      link: "/soc-assessment",
    },
    {
      title: "Identity Assessment",
      description:
        "Secure access and prevent breaches with St. Fox Identity Assessment evaluate and enhance your IAM to protect critical assets.",
      link: "/identity-assessment",
    },
    {
      title: "Cloud Security Posture Assessment",
      description:
        "Secure your cloud with St. Fox Cloud Security Posture Assessment identify risks, fix vulnerabilities, and strengthen cloud security.",
      link: "/cloud-security",
    },
  ];

  return (
    <Wrapper className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 lg:mt-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default SpecializedSecondContainer;
