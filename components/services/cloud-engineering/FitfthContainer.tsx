import Wrapper from "@/components/atoms/Wrapper";

export const cloud = [
  {
    title: "Cloud Discovery & Optimization",
    details: [
      {
        subtitle: "Cloud Cost Optimization: ",
        description:
          "Identify and eliminate wasteful cloud spending with detailed cost analysis and resource optimization strategies.",
      },
      {
        subtitle: "Workload Optimization: ",
        description:
          "Right-size your cloud infrastructure to match your actual needs, ensuring you pay only for what you use.",
      },
      {
        subtitle: "Cloud Health Checks:  ",
        description:
          "Identify and address potential cloud security vulnerabilities, performance bottlenecks, and compliance risks.",
      },
      {
        subtitle: "Cloud Sprawl Management: ",
        description:
          "Gain control over your hybrid cloud environment with automated governance tools and resource tagging strategies.",
      },
    ],
  },
  {
    title: "Cloud Consulting, Strategy, and Migration",
    details: [
      {
        subtitle: "Cloud Strategy & Roadmap Development: ",
        description:
          "Craft a tailored cloud strategy aligned with your business goals and ensure successful cloud adoption.",
      },

      {
        subtitle: "Hybrid Cloud Architecture Design: ",
        description:
          "Design a secure and efficient hybrid cloud architecture that leverages the strengths of both public and private clouds.",
      },
      {
        subtitle: "Cloud Migration Planning & Execution:  ",
        description:
          "Migrate your workloads to the cloud seamlessly with minimal disruption to your business operations.",
      },
      {
        subtitle: "Change Management & Training: ",
        description:
          "Prepare your team for the cloud with comprehensive training and support to ensure smooth adoption and maximize cloud benefits.",
      },
    ],
  },
  {
    title: "DevSecOps",
    details: [
      {
        subtitle: "Shift-Left Security: ",
        description:
          "Integrate security throughout the software development lifecycle to prevent vulnerabilities from reaching production.",
      },

      {
        subtitle: "Infrastructure as Code (IaC): ",
        description:
          "Automate infrastructure provisioning and configuration with IaC tools like Terraform for consistency and security.",
      },
      {
        subtitle: "Security Operations Center (SOC) for Cloud:  ",
        description:
          "Monitor your cloud environment for threats and vulnerabilities in real-time with a dedicated SOC.",
      },
      {
        subtitle: "Compliance-as-Code: ",
        description:
          "Automate compliance checks and reporting to ensure adherence to industry regulations and security best practices.",
      },
    ],
  },
  {
    title: "Cloud Security Engineering",
    details: [
      {
        subtitle: "Cloud Security Architecture:  ",
        description:
          "Design secure cloud architectures that meet your specific compliance requirements and risk tolerance.",
      },

      {
        subtitle: "Identity and Access Management (IAM): ",
        description:
          "Implement robust IAM controls to manage user access, permissions, and privileges in the cloud.",
      },
      {
        subtitle: "Data Encryption & Security:  ",
        description:
          "Protect your sensitive data at rest and in transit with best-in-class encryption solutions.",
      },
      {
        subtitle: "Threat Detection & Response: ",
        description:
          "Implement advanced threat detection and response capabilities to identify and neutralize cyberattacks in real-time.",
      },
    ],
  },
  {
    title: "Application Assessment",
    details: [
      {
        subtitle: "Vulnerability Scanning & Penetration Testing: ",
        description:
          "Identify and address security vulnerabilities in your applications before they are exploited by attackers.",
      },

      {
        subtitle: "Code Review & Static Analysis: ",
        description:
          "Identify and remediate security vulnerabilities in your code early in the development cycle.",
      },
      {
        subtitle: "Compliance Assessments: ",
        description:
          "Ensure your applications comply with relevant industry regulations and security standards.",
      },
      {
        subtitle: "DevOps & CI/CD Security Assessments: : ",
        description:
          "Evaluate the security posture of your DevOps and CI/CD pipelines to prevent vulnerabilities from entering production.",
      },
    ],
  },
  {
    title: "DATA STRATEGY",
    details: [
      {
        subtitle: "Data Monetization Strategy: ",
        description:
          "Develop a data-driven strategy to unlock the value of your data assets and generate new revenue streams.",
      },

      {
        subtitle: "Data Lake & Warehouse Architecture:  ",
        description:
          "Design and build a data infrastructure that enables efficient data ingestion, storage, and analytics.",
      },
      {
        subtitle: "Data Governance & Compliance: ",
        description:
          "Implement policies and procedures to ensure data quality, security, and compliance with relevant regulations.",
      },
      {
        subtitle: "Master Data Management (MDM): ",
        description: "Establish a consistent and unified view.",
      },
    ],
  },
];

function FifthContainer() {
  return (
    <Wrapper className="flex justify-center items-center h-auto bg-[#071119] md:py-10 py-10">
      <div className="flex flex-col justify-center items-start">
        {cloud.map((item) => (
          <div
            key={item.title}
            className="p-7 w-auto my-8 rounded-[2px] border border-[rgba(255,255,255,0.15)] 
bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] 
backdrop-blur-[21px]"
          >
            <p className="text-[#3B73CC] text-xl lg:text-2xl font-semibold lg:leading-normal uppercase">
              {item.title}
            </p>
            {item.details.map((detail) => (
              <p
                key={`${item.title}-${detail.subtitle}`}
                className="text-[#e0e0e0] text-base lg:text-lg font-normal mt-5 lg:leading-8"
              >
                <span className="font-semibold">{detail.subtitle}</span>
                {detail.description}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default FifthContainer;
