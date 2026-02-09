import { FAQ_ICON } from "./PrivacyOpsConstant";

export const DSPM_SERVICES_STATS = [
  {
    id: 1,
    value: "90%",
    label: "Data Visibility",
    description: "Improvement in visibility into sensitive data",
  },
  {
    id: 2,
    value: "85%",
    label: "Risk Mitigation",
    description: "High-priority risks addressed within 60 days",
  },
  {
    id: 3,
    value: "70%",
    label: "Access Rights Optimization",
    description: "Reduction in over-provisioned accounts",
  },
  {
    id: 4,
    value: "100%",
    label: "Compliance Alignment",
    description: "Adherence to GDPR, DPDPA, and PCI-DSS requirements",
  },
];

export const DSPM_FAQ_ITEM = [
  {
    id: 1,
    icon: <FAQ_ICON />,
    question: "What is Data Security Posture Management (DSPM)?",
    answer:
      "DSPM evaluates and optimizes your data security across cloud, hybrid, and on-premises environments by identifying risks, misconfigurations, and compliance gaps.",
  },
  {
    id: 2,
    icon: <FAQ_ICON />,
    question: "How does St. Fox improve data security posture?",
    answer:
      "We provide automated data discovery, risk assessment, access management optimization, and real-time monitoring for actionable security improvements.",
  },
  {
    id: 3,
    icon: <FAQ_ICON />,
    question: "Which regulations does DSPM address?",
    answer:
      "Our services ensure compliance with GDPR, DPDPA, HIPAA, PCI-DSS, and other global and industry-specific standards.",
  },
];

export const DSPM_CARD_DATA = [
  {
    id: 1,
    title: "Data Discovery and Classification",
    description: "Identify and label sensitive data across your IT landscape.",
  },
  {
    id: 2,
    title: "Risk Assessment",
    description:
      "Detect misconfigurations, excessive access rights, and policy violations.",
  },
  {
    id: 3,
    title: "Remediation Guidance",
    description:
      "Prioritize and resolve risks based on impact and compliance requirements.",
  },
  {
    id: 4,
    title: "Continuous Monitoring",
    description: "Gain real-time insights into your data security posture.",
  },
];

export const VALIDATE_ICON = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-12 sm:w-8 sm:h-8 ${className}`}
      viewBox="0 0 30 30"
      fill="none"
    >
      <g clipPath="url(#clip0_1927_11977)">
        <path
          d="M23.3881 18.528V18.5438L23.4031 18.5486C25.754 19.3098 27.4588 21.5207 27.4588 24.1221C27.4588 27.3511 24.832 29.9783 21.603 29.9783C19.0196 29.9783 16.8213 28.2963 16.046 25.9701L16.041 25.9552H16.0254H6.70143C4.43971 25.9552 2.59983 24.1151 2.59983 21.8532V4.12353C2.59983 1.86181 4.43971 0.0217014 6.70143 0.0217014H19.2865C21.5482 0.0217014 23.3881 1.86181 23.3881 4.12353V18.528ZM15.7262 24.2408H15.7483L15.7479 24.2188C15.7475 24.1864 15.7473 24.1543 15.7473 24.1221C15.7473 20.8926 18.3743 18.2656 21.603 18.2656C21.6195 18.2656 21.6356 18.2656 21.6517 18.2659L21.6737 18.2662V18.2442V4.12353C21.6737 2.80715 20.6029 1.73611 19.2865 1.73611H6.70143C5.38505 1.73611 4.31424 2.80715 4.31424 4.12353V21.8532C4.31424 23.1698 5.38504 24.2408 6.70143 24.2408H15.7262ZM17.4617 24.1221C17.4617 26.4057 19.3194 28.2639 21.603 28.2639C23.8867 28.2639 25.7444 26.4057 25.7444 24.1221C25.7444 21.838 23.8867 19.9801 21.603 19.9801C19.3194 19.9801 17.4617 21.838 17.4617 24.1221Z"
          fill="#1A3F7E"
          stroke="#1A3F7E"
          strokeWidth="0.0434028"
        />
        <path
          d="M20.6301 24.4047L20.6454 24.4197L20.6606 24.4045L22.7727 22.2924C23.1076 21.9575 23.6505 21.9575 23.9851 22.2924L23.9851 22.2924C24.3197 22.627 24.3197 23.1699 23.9851 23.5045L21.26 26.2296L21.26 26.2296C21.0928 26.3977 20.8725 26.4823 20.6524 26.4823C20.4362 26.4823 20.22 26.4011 20.0532 26.2381L18.8179 25.0312L18.8028 25.0466L18.8179 25.0312C18.4793 24.7004 18.473 24.1577 18.8039 23.8191C19.1347 23.4804 19.6774 23.4739 20.016 23.8048L20.6301 24.4047ZM21.2754 26.2449L24.0004 23.5199C24.3435 23.1768 24.3435 22.6201 24.0004 22.277C23.6573 21.9337 23.1007 21.9337 22.7574 22.277L21.2754 26.2449Z"
          fill="#1A3F7E"
          stroke="#1A3F7E"
          strokeWidth="0.0434028"
        />
        <path
          d="M7.13574 3.51975H18.9797C19.4532 3.51975 19.8369 3.90348 19.8369 4.37695C19.8369 4.8502 19.4532 5.23416 18.9797 5.23416H7.13574C6.6625 5.23416 6.27854 4.8502 6.27854 4.37695C6.27854 3.90348 6.66249 3.51975 7.13574 3.51975Z"
          fill="#1A3F7E"
          stroke="#1A3F7E"
          strokeWidth="0.0434028"
        />
        <path
          d="M17.2219 8.25174H7.13574C6.66249 8.25174 6.27854 7.868 6.27854 7.39453C6.27854 6.92129 6.6625 6.53733 7.13574 6.53733H17.2219C17.6953 6.53733 18.0791 6.92128 18.0791 7.39453C18.0791 7.868 17.6953 8.25174 17.2219 8.25174Z"
          fill="#1A3F7E"
          stroke="#1A3F7E"
          strokeWidth="0.0434028"
        />
        <path
          d="M7.13574 9.55295H18.9158C19.3893 9.55295 19.773 9.93668 19.773 10.4102C19.773 10.8834 19.3891 11.2674 18.9158 11.2674H7.13574C6.6625 11.2674 6.27854 10.8834 6.27854 10.4102C6.27854 9.93669 6.66249 9.55295 7.13574 9.55295Z"
          fill="#1A3F7E"
          stroke="#1A3F7E"
          strokeWidth="0.0434028"
        />
        <path
          d="M7.13574 20.842H9.99676C10.4702 20.842 10.854 21.2257 10.854 21.6992C10.854 22.1725 10.4702 22.5564 9.99676 22.5564H7.13574C6.6625 22.5564 6.27854 22.1725 6.27854 21.6992C6.27854 21.2257 6.66249 20.842 7.13574 20.842Z"
          fill="#1A3F7E"
          stroke="#1A3F7E"
          strokeWidth="0.0434028"
        />
      </g>
      <defs>
        <clipPath id="clip0_1927_11977">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IDENTIFY_ICON = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-12 sm:w-8 sm:h-8 ${className}`}
      viewBox="0 0 30 30"
      fill="none"
    >
      <mask
        id="mask0_2576_11609"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="30"
        height="30"
      >
        <path d="M30 0H0V30H30V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2576_11609)">
        <mask
          id="mask1_2576_11609"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <path d="M0 3.8147e-06H30V30H0V3.8147e-06Z" fill="white" />
        </mask>
        <g mask="url(#mask1_2576_11609)">
          <path
            d="M26.8467 8.16749C26.832 7.84271 26.8237 7.52437 26.819 7.20972C26.8012 6.01007 25.8574 5.03103 24.6595 4.96405C20.9957 4.75944 18.1303 3.54075 15.71 1.18165C15.305 0.810461 14.6976 0.810461 14.2926 1.18165C11.8723 3.54075 9.00694 4.75944 5.34313 4.96405C4.14519 5.03103 3.20141 6.01007 3.1836 7.20972C3.17891 7.52437 3.17065 7.84271 3.15589 8.16749C3.02118 15.2375 2.81938 24.9274 14.579 29.0279C14.6352 29.0475 14.6931 29.0631 14.7515 29.0748L14.752 29.0749C14.9166 29.1078 15.086 29.1078 15.2506 29.0749C15.3093 29.0632 15.3675 29.0474 15.4241 29.0277C27.1497 24.9271 26.9814 15.271 26.8467 8.16749Z"
            stroke="#1A3F7E"
            strokeWidth="1.30208"
            strokeMiterlimit="10"
          />
          <path
            d="M21.586 15.0015C21.586 18.639 18.6371 21.5879 14.9995 21.5879C11.3619 21.5879 8.41309 18.639 8.41309 15.0015C8.41309 11.3639 11.3619 8.41508 14.9995 8.41508C18.6371 8.41508 21.586 11.3639 21.586 15.0015Z"
            stroke="#1A3F7E"
            strokeWidth="1.30208"
            strokeMiterlimit="10"
          />
          <path
            d="M15 11.996V15.4473"
            stroke="#1A3F7E"
            strokeWidth="1.30208"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const GUARD_ICON = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-12 sm:w-8 sm:h-8 ${className}`}
      viewBox="0 0 30 30"
      fill="none"
    >
      <mask
        id="mask0_2576_11513"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="30"
        height="30"
      >
        <path d="M0 3.8147e-06H30V30H0V3.8147e-06Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2576_11513)">
        <path
          d="M18.0469 23.151C17.5811 23.3537 17.0965 23.5225 16.5967 23.6537L16.1625 27.1289H11.9625L11.5283 23.6537C10.6523 23.424 9.82383 23.0789 9.05918 22.6348L6.09726 24.9387L3.12773 21.9686L5.43105 19.0066C4.9875 18.2426 4.64238 17.4141 4.41269 16.5381L0.9375 16.1039V11.9039L4.41269 11.4697C4.64238 10.5938 4.9875 9.76524 5.43105 9.00117L3.12773 6.03926L6.09726 3.06914L9.05918 5.37305C9.82383 4.92891 10.6523 4.58379 11.5283 4.3541L11.9625 0.87891H16.1625L16.5967 4.3541C17.4727 4.58379 18.3012 4.92891 19.0658 5.37305L22.0277 3.06914L24.9973 6.03926L22.6939 9.00117C23.1375 9.76524 23.4826 10.5938 23.7123 11.4697L27.1875 11.9039V17.0027"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.9359 16.9336C20.3771 16.0518 20.625 15.0568 20.625 14.0039C20.625 10.3793 17.6871 7.44141 14.0625 7.44141C10.4379 7.44141 7.5 10.3793 7.5 14.0039C7.5 17.6285 10.4379 20.5664 14.0625 20.5664C15.457 20.5664 16.7496 20.1316 17.8125 19.3898"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.4375 15C25.5469 17.1094 29.0625 17.3438 29.0625 17.3438V21.2148C29.0625 24.1736 27.4565 26.8604 24.9293 28.282L23.4375 29.1211L21.9457 28.282C19.4147 26.8583 17.8125 24.1685 17.8125 21.2148V17.3438C17.8125 17.3438 21.3281 17.1094 23.4375 15Z"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 22.0313L23.2031 22.7344L24.6094 21.0938"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export const IMPLEMENT_ICON = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-12 sm:w-8 sm:h-8 ${className}`}
      viewBox="0 0 30 30"
      fill="none"
    >
      <mask
        id="mask0_2576_8056"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="30"
        height="30"
      >
        <path d="M0 3.8147e-06H30V30H0V3.8147e-06Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2576_8056)">
        <path
          d="M9.72656 2.99537C10.3437 3.21352 10.9082 3.54334 11.3957 3.96047L13.2422 2.9308L15 5.97545L13.1542 7.00465C13.212 7.31719 13.2422 7.63945 13.2422 7.96875C13.2422 8.29805 13.212 8.62031 13.1542 8.93285L15 9.96205L13.2422 13.0067L11.3957 11.977C10.9082 12.3942 10.3437 12.724 9.72656 12.9421V15H6.21094V12.9421C5.59377 12.724 4.97068 12.3942 4.48324 11.977L2.63672 13.0067L0.878906 9.96205L2.72467 8.93285C2.66689 8.62031 2.63672 8.29805 2.63672 7.96875C2.63672 7.63945 2.66689 7.31719 2.72467 7.00465L0.878906 5.97545L2.63672 2.9308L4.48324 3.96047C4.97068 3.54334 5.59377 3.21352 6.21094 2.99537V0.878908H9.72656V2.99537Z"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.21094 8.84766L7.08984 9.72656L9.72656 7.08984"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.1211 7.96875H18.5156V0.878907H29.1211V7.96875Z"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.9102 4.45313C22.9102 4.93852 22.5166 5.33203 22.0312 5.33203C21.5459 5.33203 21.1523 4.93852 21.1523 4.45313C21.1523 3.96773 21.5459 3.57422 22.0312 3.57422C22.5166 3.57422 22.9102 3.96773 22.9102 4.45313Z"
          fill="#1A3F7E"
        />
        <path
          d="M26.4258 4.45313C26.4258 4.93852 26.0323 5.33203 25.5469 5.33203C25.0615 5.33203 24.668 4.93852 24.668 4.45313C24.668 3.96773 25.0615 3.57422 25.5469 3.57422C26.0323 3.57422 26.4258 3.96773 26.4258 4.45313Z"
          fill="#1A3F7E"
        />
        <path
          d="M23.7891 11.4844V7.96875"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.1211 18.5156H18.5156V11.4844H29.1211V18.5156Z"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.9102 15C22.9102 15.4854 22.5166 15.8789 22.0312 15.8789C21.5459 15.8789 21.1523 15.4854 21.1523 15C21.1523 14.5146 21.5459 14.1211 22.0312 14.1211C22.5166 14.1211 22.9102 14.5146 22.9102 15Z"
          fill="#1A3F7E"
        />
        <path
          d="M26.4258 15C26.4258 15.4854 26.0323 15.8789 25.5469 15.8789C25.0615 15.8789 24.668 15.4854 24.668 15C24.668 14.5146 25.0615 14.1211 25.5469 14.1211C26.0323 14.1211 26.4258 14.5146 26.4258 15Z"
          fill="#1A3F7E"
        />
        <path
          d="M23.7891 22.0312V18.5156"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.1211 29.1211H18.5156V22.0313H29.1211V29.1211Z"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.9102 25.5469C22.9102 26.0323 22.5166 26.4258 22.0312 26.4258C21.5459 26.4258 21.1523 26.0323 21.1523 25.5469C21.1523 25.0615 21.5459 24.668 22.0312 24.668C22.5166 24.668 22.9102 25.0615 22.9102 25.5469Z"
          fill="#1A3F7E"
        />
        <path
          d="M26.4258 25.5469C26.4258 26.0323 26.0323 26.4258 25.5469 26.4258C25.0615 26.4258 24.668 26.0323 24.668 25.5469C24.668 25.0615 25.0615 24.668 25.5469 24.668C26.0323 24.668 26.4258 25.0615 26.4258 25.5469Z"
          fill="#1A3F7E"
        />
        <path
          d="M9.72656 15V19.8585C9.72656 22.4433 9.12475 24.9927 7.96875 27.3047C6.81275 24.9927 6.21094 22.4433 6.21094 19.8585V15"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.96875 29.1211V27.3047"
          stroke="#1A3F7E"
          strokeWidth="1.75781"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export const LEARN_ICON = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-12 sm:w-8 sm:h-8 ${className}`}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M17.2852 15H25.6055"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.3633 16.7578C28.3341 16.7578 29.1211 15.9708 29.1211 15C29.1211 14.0292 28.3341 13.2422 27.3633 13.2422C26.3925 13.2422 25.6055 14.0292 25.6055 15C25.6055 15.9708 26.3925 16.7578 27.3633 16.7578Z"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.7518 5.99023L22.6758 9.72711H17.2852"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.7518 24.0103L22.6758 20.2734H17.2852"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.12064 25.4944C8.9165 25.5256 8.70896 25.5469 8.49609 25.5469C6.23086 25.5469 4.39453 23.7105 4.39453 21.4453C4.39453 21.2303 4.41603 21.0209 4.44791 20.8148C2.75965 20.5576 1.46484 19.1038 1.46484 17.3437C1.46484 16.3034 1.91941 15.3716 2.63748 14.7279C1.54998 13.574 0.878906 12.0233 0.878906 10.3125C0.878906 6.75287 3.76459 3.86719 7.32422 3.86719C7.97098 3.86719 8.59441 3.96498 9.1834 4.14223C9.59285 2.30889 11.2268 0.9375 13.1836 0.9375C15.4488 0.9375 17.2852 2.77383 17.2852 5.03906V24.9609C17.2852 27.2262 15.4488 29.0625 13.1836 29.0625C11.0996 29.0625 9.38267 27.507 9.12064 25.4944Z"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47678 23.2031C9.22365 23.7359 9.08203 24.3319 9.08203 24.9611C9.08203 27.2263 10.9184 29.0626 13.1836 29.0626"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.46484 17.3438C1.46484 19.2854 3.03885 20.8594 4.98047 20.8594C5.62084 20.8594 6.22119 20.6882 6.73834 20.389"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0308 5.03895C9.98238 4.30072 8.70392 3.86719 7.32422 3.86719C3.76459 3.86719 0.878906 6.75287 0.878906 10.3125C0.878906 12.5751 2.0448 14.5654 3.80853 15.7154"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2852 11.4844C17.2852 14.0753 15.1886 16.1719 12.5977 16.1719"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.66694 11.9698C4.75165 11.0545 4.75165 9.57051 5.66694 8.65522C6.58223 7.73993 8.06624 7.73993 8.98153 8.65522"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8398 19.1016C10.8398 20.397 11.8881 21.4453 13.1836 21.4453"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7695 9.14062C13.7695 10.4361 12.7212 11.4844 11.4258 11.4844"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6055 6.21094C26.5763 6.21094 27.3633 5.42394 27.3633 4.45312C27.3633 3.48231 26.5763 2.69531 25.6055 2.69531C24.6347 2.69531 23.8477 3.48231 23.8477 4.45312C23.8477 5.42394 24.6347 6.21094 25.6055 6.21094Z"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6055 27.3047C26.5763 27.3047 27.3633 26.5177 27.3633 25.5469C27.3633 24.5761 26.5763 23.7891 25.6055 23.7891C24.6347 23.7891 23.8477 24.5761 23.8477 25.5469C23.8477 26.5177 24.6347 27.3047 25.6055 27.3047Z"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ENHANCE_ICON = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-12 sm:w-8 sm:h-8 ${className}`}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M10.5658 23.2788C11.8999 24.0113 13.4289 24.4322 15.0585 24.4322C20.2361 24.4322 24.4335 20.2348 24.4335 15.0572C24.4335 14.1125 24.2906 13.2017 24.0307 12.3418L28.8826 12.488C29.0366 13.3214 29.121 14.1792 29.121 15.0572C29.121 22.8237 22.825 29.1197 15.0585 29.1197C12.1286 29.1197 9.41457 28.2153 7.1627 26.6819L5.2267 28.6179L5.12598 21.2608L12.3654 21.4791L10.5658 23.2788Z"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4341 6.71977C18.1 5.98728 16.571 5.56641 14.9414 5.56641C9.76377 5.56641 5.56641 9.76377 5.56641 14.9414C5.56641 15.8861 5.70932 16.7969 5.96924 17.6568L1.11732 17.5106C0.96334 16.6772 0.878906 15.8194 0.878906 14.9414C0.878906 7.17492 7.17492 0.878906 14.9414 0.878906C17.8713 0.878906 20.5853 1.78336 22.8372 3.31676L24.7732 1.38076L24.8739 8.73779L17.6345 8.51947L19.4341 6.71977Z"
        stroke="#1A3F7E"
        strokeWidth="1.75781"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
