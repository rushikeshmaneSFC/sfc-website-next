import { FAQ_ICON } from "./PrivacyOpsConstant";

export const DLP_SERVICES_STATS = [
  {
    id: 1,
    value: "95%",
    label: "Data Leak Reduction",
    description: "Decrease in unauthorized data sharing incidents",
  },
  {
    id: 2,
    value: "90%",
    label: "Improved Visibility",
    description: "Enhancement in tracking data movements",
  },
  {
    id: 3,
    value: "100%",
    label: "Compliance Readiness",
    description: "Alignment with GDPR, DPDPA, and PCI-DSS requirements",
  },
  {
    id: 4,
    value: "60%",
    label: "Incident Response Time",
    description: "Reduced response times for data-related incidents",
  },
];

export const DLP_FAQ_ITEM = [
  {
    id: 1,
    icon: <FAQ_ICON />,
    question: "What is Data Loss Prevention (DLP)?",
    answer:
      "DLP is a set of practices and tools designed to detect, monitor, and prevent sensitive data from being lost, stolen, or misused.",
  },
  {
    id: 2,
    icon: <FAQ_ICON />,
    question: "How does St. Fox apply DLP solutions?",
    answer:
      "We use automation and expertise to detect sensitive data, enforce policies, monitor activity, and prevent unauthorized sharing.",
  },
  {
    id: 3,
    icon: <FAQ_ICON />,
    question: "Which environments does DLP cover?",
    answer:
      "Our DLP services protect data across cloud, on-premises infrastructure and endpoint systems.",
  },
];

export const DLP_LIST = [
  {
    id: 1,
    content: (
      <p className="text-base font-medium leading-6 text-[0.75rem] lg:text-[1rem]">
        Insider threats, misconfigurations, and unauthorized data sharing are
        leading causes of data breaches.
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p className="text-base font-medium leading-6 text-[0.75rem] lg:text-[1rem]">
        Organizations often lack the tools to monitor, control, and prevent
        sensitive data from leaving their environments.
      </p>
    ),
  },
  {
    id: 3,
    content: (
      <p className="text-base font-medium leading-6 text-[0.75rem] lg:text-[1rem]">
        Without effective DLP strategies, companies face compliance penalties
        under regulations like GDPR and DPDPA.
      </p>
    ),
  },
];

export const DLP_PREVENTION = [
  {
    title: "Data Discovery and Classification",
    description:
      "Identify and classify sensitive data to ensure visibility and control.",
    imgSrc: "/images/DLP/Datadiscovery.webp",
  },
  {
    title: "Policy Enforcement",
    description:
      "Develop and implement policies to prevent unauthorized data sharing.",
    imgSrc: "/images/DLP/Policyenforcement.webp",
  },
  {
    title: "Insider Threat Mitigation",
    description:
      "Identify and classify sensitive data to ensure visibility and control.",
    imgSrc: "/images/DLP/Threat_Mitigation.webp",
  },
  {
    title: "Compliance Support",
    description:
      "Align DLP strategies with GDPR, DPDPA, HIPAA, and PCI-DSS compliance.",
    imgSrc: "/images/DLP/Compliance.webp",
  },
  {
    title: "Real-Time Monitoring and Alerts",
    description: "Get instant notifications of unauthorized data movements.",
    imgSrc: "/images/DLP/RealTime_Monitoring.webp",
  },
];

export const DLP_VIGILE_SECTION = [
  {
    title: "Validate",
    description:
      "Assess your current data security measures and identify gaps.",
    imageSrc: "/images/DLP/DLP_Validate.png",
    alt: "Validate",
  },
  {
    title: "Implement",
    description: "Deploy DLP tools to monitor and control data movements.",
    imageSrc: "/images/DLP/DLP_Implement.png",
    alt: "Implement",
  },
  {
    title: "Identify",
    description:
      "Detect sensitive data and map its flow across your environment.",
    imageSrc: "/images/DLP/DLP_Identify.png",
    alt: "Identify",
  },
  {
    title: "Learn",
    description: "Use incident insights to refine and enhance DLP strategies.",
    imageSrc: "/images/DLP/DLP_Learn.png",
    alt: "Learn",
  },
  {
    title: "Guard",
    description: "Enforce DLP policies to block unauthorized access.",
    imageSrc: "/images/DLP/DLP_Guard.png",
    alt: "Guard",
  },
  {
    title: "Enhance",
    description: "Continuously adapt to evolving threats and regulations.",
    imageSrc: "/images/DLP/DLP_Enhance.png",
    alt: "Enhance",
  },
];
