export const PRIVACYOPS_REQUIREMENTS = [
  {
    imgurl: "/images/PrivacyOps/Tick_Img.webp",
    subtitle: (
      <>
        <span>
          With evolving regulations like GDPR, DPDPA, CCPA, and HIPAA, managing
          data privacy is more complex than ever.
        </span>
      </>
    ),
  },
  {
    imgurl: "/images/PrivacyOps/Tick_Img.webp",
    subtitle: (
      <>
        <span>
          Inefficient privacy operations increase the risk of fines, breaches,
          and loss of customer trust.
        </span>
      </>
    ),
  },
  {
    imgurl: "/images/PrivacyOps/Tick_Img.webp",
    subtitle: (
      <>
        <span>
          Organizations need robust privacy frameworks to protect sensitive data
          and streamline compliance efforts.
        </span>
      </>
    ),
  },
];

export const PRIVACYOPS_COMPLIANCE = [
  {
    title: "Data Discovery and Mapping",
    description:
      "Identify and classify sensitive data across your organization.",
  },
  {
    title: "Privacy Impact Assessments (PIA)",
    description: "Evaluate risks to data privacy and mitigate vulnerabilities.",
  },
  {
    title: "Compliance Automation ",
    description:
      "Streamline adherence to regulations like GDPR, DPDPA, CCPA, and HIPAA.",
  },
  {
    title: "Data Subject Access Requests (DSARs)",
    description: "Manage DSAR workflows efficiently and securely.",
  },
];

export const FAQ_ICON = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4001 7.99961C14.4001 9.69699 13.7258 11.3249 12.5256 12.5251C11.3253 13.7253 9.69748 14.3996 8.0001 14.3996C6.30271 14.3996 4.67485 13.7253 3.47461 12.5251C2.27438 11.3249 1.6001 9.69699 1.6001 7.99961C1.6001 6.30222 2.27438 4.67436 3.47461 3.47413C4.67485 2.27389 6.30271 1.59961 8.0001 1.59961C9.69748 1.59961 11.3253 2.27389 12.5256 3.47413C13.7258 4.67436 14.4001 6.30222 14.4001 7.99961ZM8.0001 5.59961C7.85954 5.59947 7.72142 5.63637 7.59966 5.70659C7.47789 5.77682 7.37678 5.87788 7.3065 5.99961C7.25575 6.09391 7.18659 6.17706 7.10311 6.24414C7.01963 6.31121 6.92353 6.36084 6.82051 6.39009C6.71749 6.41934 6.60965 6.4276 6.50338 6.4144C6.39711 6.40119 6.29457 6.36679 6.20184 6.31322C6.10912 6.25965 6.02809 6.18801 5.96356 6.10254C5.89904 6.01708 5.85233 5.91953 5.8262 5.81568C5.80007 5.71182 5.79506 5.60378 5.81147 5.49796C5.82787 5.39213 5.86536 5.29068 5.9217 5.19961C6.18587 4.7421 6.59362 4.38454 7.08172 4.18238C7.56981 3.98022 8.11097 3.94476 8.62127 4.0815C9.13157 4.21823 9.5825 4.51952 9.90412 4.93865C10.2257 5.35777 10.4001 5.87131 10.4001 6.39961C10.4002 6.8961 10.2465 7.38043 9.95991 7.78589C9.67336 8.19135 9.26816 8.498 8.8001 8.66361V8.79961C8.8001 9.01178 8.71581 9.21527 8.56578 9.36529C8.41575 9.51532 8.21227 9.59961 8.0001 9.59961C7.78792 9.59961 7.58444 9.51532 7.43441 9.36529C7.28438 9.21527 7.2001 9.01178 7.2001 8.79961V7.99961C7.2001 7.78744 7.28438 7.58395 7.43441 7.43392C7.58444 7.28389 7.78792 7.19961 8.0001 7.19961C8.21227 7.19961 8.41575 7.11532 8.56578 6.96529C8.71581 6.81527 8.8001 6.61178 8.8001 6.39961C8.8001 6.18744 8.71581 5.98395 8.56578 5.83392C8.41575 5.68389 8.21227 5.59961 8.0001 5.59961ZM8.0001 11.9996C8.21227 11.9996 8.41575 11.9153 8.56578 11.7653C8.71581 11.6153 8.8001 11.4118 8.8001 11.1996C8.8001 10.9874 8.71581 10.784 8.56578 10.6339C8.41575 10.4839 8.21227 10.3996 8.0001 10.3996C7.78792 10.3996 7.58444 10.4839 7.43441 10.6339C7.28438 10.784 7.2001 10.9874 7.2001 11.1996C7.2001 11.4118 7.28438 11.6153 7.43441 11.7653C7.58444 11.9153 7.78792 11.9996 8.0001 11.9996Z"
        fill="url(#paint0_linear_1766_10382)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1766_10382"
          x1="1.6001"
          y1="1.59961"
          x2="14.4001"
          y2="14.3996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B73CC" />
          <stop offset="1" stopColor="#1A3F7E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const FAQ_ITEM = [
  {
    id: 1,
    icon: <FAQ_ICON />,
    question: "What is Privacy Ops?",
    answer:
      "Privacy Ops refers to the management and automation of data privacy operations, including compliance, data discovery, and risk mitigation.",
  },
  {
    id: 2,
    icon: <FAQ_ICON />,
    question: "How does St. Fox streamline privacy operations?",
    answer:
      " We automate compliance, manage DSARs, and mitigate risks efficiently.",
  },
  {
    id: 3,
    icon: <FAQ_ICON />,
    question: " Which regulations does St. Fox Privacy Ops cover?",
    answer:
      "We cover GDPR, DPDPA, HIPAA, CCPA, PCI-DSS, and other global and  industry-specific data privacy standards.",
  },
];

export const SERVICES_STATS = [
  {
    id: 1,
    value: "90%",
    label: "Data Discovery",
    description: "Reduction in unidentified sensitive data.",
  },
  {
    id: 2,
    value: "60%",
    label: "DSAR Workflow Efficiency",
    description: "Faster response times for data subject requests.",
  },
  {
    id: 3,
    value: "100%",
    label: "Compliance Readiness",
    description: "Alignment with GDPR, DPDPA, HIPAA, and CCPA regulations.",
  },
  {
    id: 4,
    value: "85%",
    label: "Risk Mitigation",
    description: "Reduction in privacy-related vulnerabilities.",
  },
];
