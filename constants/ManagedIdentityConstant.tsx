const VALIDATE_IMG = "/images/ManagedIdentity/Validate.webp";
const IDENTIFY_IMG = "/images/ManagedIdentity/Identify.webp";
const GUARD_IMG = "/images/ManagedIdentity/Guard.webp";
const IMPLEMENT_IMG = "/images/ManagedIdentity/Implement.webp";
const LEARN_IMG = "/images/ManagedIdentity/Learn.webp";
const ENHANCE_IMG = "/images/ManagedIdentity/Enhance.webp";

export const BADGE_ICON = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="57"
      viewBox="0 0 56 57"
      fill="none"
    >
      <g clipPath="url(#clip0_1433_14544)">
        <path
          d="M39.9436 18.3694C39.7583 17.7992 39.2745 17.3914 38.6812 17.3051L31.8429 16.3114C31.3945 16.2462 30.9783 16.5569 30.9133 17.0052C30.8482 17.4535 31.1587 17.8698 31.607 17.9349L38.2915 18.9061L33.4546 23.621C33.2612 23.8094 33.173 24.081 33.2187 24.3471L34.3604 31.0044L28.3818 27.8612C28.1427 27.7356 27.8573 27.7356 27.6183 27.8612L21.6397 31.0044L22.7815 24.3471C22.8271 24.081 22.7389 23.8094 22.5455 23.621L17.7087 18.9061L24.393 17.9349C24.6602 17.8961 24.8911 17.7283 25.0106 17.4861L27.9999 11.4291L29.4579 14.3833C29.6584 14.7894 30.15 14.9563 30.5566 14.7558C30.9628 14.5553 31.1296 14.0634 30.9291 13.6571L29.4022 10.5634C29.1368 10.0257 28.5995 9.69165 27.9999 9.69165C27.4004 9.69165 26.863 10.0257 26.5977 10.5634L23.7303 16.3732L17.3186 17.3049C16.7253 17.3912 16.2415 17.7989 16.0562 18.3692C15.8709 18.9395 16.0225 19.5538 16.4519 19.9722L21.0914 24.4947L19.9963 30.8807C19.8949 31.4717 20.1334 32.0577 20.6185 32.4102C21.1035 32.7626 21.7345 32.8082 22.2653 32.5292L28.0001 29.5142L33.7348 32.5291C33.9656 32.6504 34.2154 32.7103 34.4639 32.7103C34.7868 32.7103 35.1076 32.6092 35.3817 32.41C35.8668 32.0575 36.1052 31.4715 36.0038 30.8805L34.9085 24.4948L39.548 19.9723C39.9771 19.5539 40.1288 18.9397 39.9436 18.3694Z"
          fill="white"
        />
        <path
          d="M49.532 47.6233L42.7527 38.03C47.1196 34.0301 49.8624 28.2847 49.8624 21.9101C49.8624 9.85503 40.055 0.0476074 28 0.0476074C15.9451 0.0476074 6.13755 9.85503 6.13755 21.91C6.13755 28.2846 8.88045 34.03 13.2472 38.0299L6.46797 47.6232C6.06263 48.1969 6.02675 48.9323 6.37434 49.5427C6.72183 50.153 7.37217 50.4977 8.07261 50.4415L12.8803 50.0582L14.1243 54.7179C14.3054 55.3965 14.8474 55.8949 15.5387 56.0187C15.6471 56.0381 15.7553 56.0476 15.8623 56.0476C16.4369 56.0476 16.9748 55.7731 17.3166 55.2895L25.5526 43.6348C26.3564 43.7248 27.1727 43.7726 28.0003 43.7726C28.8277 43.7726 29.6441 43.7248 30.4478 43.6348L38.6838 55.2895C39.0256 55.7732 39.5634 56.0476 40.1381 56.0476C40.2451 56.0476 40.3533 56.0381 40.4617 56.0187C41.153 55.8949 41.695 55.3966 41.8761 54.7179L43.1201 50.0582L47.9277 50.4415C48.6274 50.4972 49.2786 50.153 49.6261 49.5427C49.9732 48.9323 49.9373 48.197 49.532 47.6233ZM15.9767 54.3427C15.963 54.3619 15.9217 54.4201 15.8278 54.4037C15.734 54.387 15.7154 54.3175 15.7094 54.2948L14.2891 48.9746C14.187 48.592 13.8263 48.3371 13.4314 48.3684L7.94223 48.806C7.91872 48.8078 7.84719 48.8135 7.80005 48.7308C7.7529 48.6479 7.79425 48.5892 7.80792 48.57L14.5023 39.0968C15.5966 39.9581 16.775 40.7171 18.0228 41.3598L15.0665 45.5433C14.805 45.9133 14.893 46.4251 15.263 46.6866C15.4068 46.7882 15.572 46.8369 15.7357 46.8369C15.9931 46.8369 16.2465 46.7162 16.4063 46.49L19.5328 42.0657C20.8732 42.6309 22.2816 43.0653 23.7415 43.3547L15.9767 54.3427ZM28 42.1319C16.8497 42.1319 7.77817 33.0604 7.77817 21.9101C7.77817 10.7598 16.8496 1.68823 28 1.68823C39.1505 1.68823 48.2219 10.7597 48.2219 21.9101C48.2219 33.0605 39.1504 42.1319 28 42.1319ZM48.1999 48.7308C48.1528 48.8135 48.081 48.8078 48.0577 48.806L42.5687 48.3684C42.1738 48.3365 41.8131 48.5919 41.7109 48.9746L40.2907 54.2948C40.2846 54.3175 40.2661 54.387 40.1722 54.4037C40.078 54.4201 40.037 54.3619 40.0234 54.3427L32.2588 43.3548C33.7187 43.0654 35.1271 42.6309 36.4675 42.0658L39.594 46.4901C39.7538 46.7163 40.0072 46.8371 40.2646 46.8371C40.4282 46.8371 40.5934 46.7883 40.7373 46.6867C41.1073 46.4251 41.1953 45.9133 40.9338 45.5434L37.9775 41.3599C39.2253 40.7172 40.4037 39.9583 41.498 39.0969L48.1924 48.5701C48.2057 48.5892 48.2472 48.6481 48.1999 48.7308Z"
          fill="white"
        />
        <path
          d="M38.9917 8.31812C35.6553 5.6135 31.4449 4.24106 27.1369 4.45237C22.7979 4.66576 18.7151 6.47635 15.6409 9.55055C12.5667 12.6247 10.756 16.7076 10.5428 21.0467C10.3309 25.355 11.7039 29.5649 14.4085 32.9015C14.5706 33.1016 14.8074 33.2053 15.0463 33.2053C15.2278 33.2053 15.4104 33.1453 15.5623 33.0222C15.9143 32.7369 15.9683 32.2203 15.6831 31.8684C13.233 28.8461 11.9895 25.0316 12.1813 21.1272C12.3746 17.1957 14.0152 13.4965 16.801 10.7107C19.5868 7.92491 23.2862 6.28429 27.2175 6.09103C31.1227 5.89929 34.9363 7.14267 37.9587 9.59266C38.3107 9.87802 38.8272 9.82399 39.1125 9.47191C39.3977 9.11994 39.3437 8.60347 38.9917 8.31812Z"
          fill="white"
        />
        <path
          d="M41.5922 10.9185C41.3069 10.5665 40.7903 10.5126 40.4384 10.7978C40.0865 11.083 40.0324 11.5996 40.3177 11.9516C42.7676 14.9739 44.0112 18.7885 43.8193 22.6927C43.6261 26.6242 41.9854 30.3235 39.1997 33.1092C36.4139 35.895 32.7145 37.5356 28.7831 37.7289C28.5205 37.7418 28.259 37.7483 27.9974 37.7483C24.3699 37.7481 20.861 36.5125 18.042 34.2274C17.6901 33.9421 17.1735 33.9962 16.8882 34.3481C16.6028 34.7001 16.657 35.2166 17.0089 35.5019C20.1215 38.025 23.9937 39.3891 27.9969 39.389C28.285 39.389 28.5744 39.382 28.8636 39.3677C33.2028 39.1544 37.2854 37.3438 40.3597 34.2695C43.434 31.1952 45.2447 27.1124 45.4579 22.7734C45.6696 18.4652 44.2967 14.2549 41.5922 10.9185Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1433_14544">
          <rect
            width="56"
            height="56"
            fill="white"
            transform="translate(0 0.0476074)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const POWER_ICON = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
    >
      <g clipPath="url(#clip0_1433_14558)">
        <mask
          id="mask0_1433_14558"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="57"
          height="57"
        >
          <path
            d="M0.722656 0.0480995H56.7227V56.0481H0.722656V0.0480995Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1433_14558)">
          <path
            d="M16.1069 45.3315C10.7302 41.4511 7.23438 35.1553 7.23438 28.0482C7.23438 18.3604 13.7302 10.1797 22.6308 7.57015"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.1509 43.8707C40.974 45.8763 38.349 47.4076 35.5215 48.3066"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.7402 10.3458C42.5457 11.558 44.1656 13.0433 45.5279 14.7384C46.897 16.4418 48.0034 18.3545 48.7918 20.3928C49.6039 22.4923 50.075 24.7195 50.1877 26.9676C50.2959 29.1235 50.0793 31.2947 49.538 33.3846C49.0195 35.3861 48.2045 37.3087 47.13 39.075C46.9971 39.2934 46.8603 39.5094 46.7197 39.7229"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.4505 17.422L16.3359 32.1509H27.6927L21.7562 55.228L41.1143 23.9458H29.7576L35.694 0.868656L27.7429 13.7174"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.4313 11.8911L23.8546 7.25208L19.0273 5.1289"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.3569 43.7388L34.9336 48.3778L39.7609 50.501"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1433_14558">
          <rect
            width="56"
            height="56"
            fill="white"
            transform="translate(0.726562 0.0476074)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const EAR_PHONE_ICON = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
    >
      <g clipPath="url(#clip0_1433_14578)">
        <mask
          id="mask0_1433_14578"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="57"
          height="57"
        >
          <path
            d="M0.449219 0.0480995H56.4492V56.0481H0.449219V0.0480995Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1433_14578)">
          <path
            d="M51.4302 43.0657V46.4784C51.4302 50.2207 48.3965 53.2544 44.6541 53.2544H39.4297"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.1544 45.6062C8.75305 45.6062 7.61719 44.4702 7.61719 43.069V27.6077C7.61719 26.2065 8.75305 25.0705 10.1544 25.0705C11.9234 25.0705 13.3575 26.5046 13.3575 28.2737V42.403C13.3575 44.1721 11.9234 45.6062 10.1544 45.6062Z"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M49.2403 37.0981V27.6077C49.2403 26.2065 48.1044 25.0705 46.7032 25.0705C44.9341 25.0705 43.5 26.5046 43.5 28.2737V42.403C43.5 44.1721 44.9341 45.6062 46.7032 45.6062C48.1044 45.6062 49.2403 44.4702 49.2403 43.069V40.9014"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.9333 30.0159C30.0109 31.9517 26.8833 31.9627 24.9475 30.0404C23.0117 28.118 23.0007 24.9904 24.9231 23.0546C26.8454 21.1188 29.9729 21.1078 31.9088 23.0302C33.8446 24.9525 33.8555 28.0801 31.9333 30.0159ZM39.3926 25.2842C39.3907 24.6944 38.9108 24.2178 38.3209 24.2199H38.3204C37.8628 24.2215 37.4546 23.9315 37.3069 23.4983C37.1728 23.1052 37.0119 22.7194 36.8241 22.3435C36.6199 21.9347 36.701 21.4411 37.0229 21.1169C37.4385 20.6983 37.4361 20.0221 37.0176 19.6066L35.2967 17.8976C34.8781 17.4818 34.2018 17.4842 33.7862 17.9028C33.4643 18.227 32.9712 18.3116 32.5611 18.1102C32.184 17.9251 31.7969 17.7669 31.4028 17.6355C30.9687 17.4907 30.6758 17.0846 30.6741 16.627V16.6265C30.6722 16.0367 30.1922 15.5601 29.6024 15.5622L27.1771 15.5707C26.5872 15.5728 26.1108 16.0526 26.1128 16.6425V16.6428C26.1144 17.1006 25.8243 17.5086 25.3912 17.6565C24.9981 17.7907 24.6121 17.9516 24.2363 18.1394C23.8276 18.3435 23.334 18.2625 23.0098 17.9406C22.5912 17.5248 21.9151 17.5272 21.4993 17.9458L19.7903 19.6667C19.3747 20.0853 19.3771 20.7616 19.7957 21.1772C20.1199 21.4991 20.2044 21.9921 20.0031 22.4023C19.818 22.7794 19.6598 23.1665 19.5283 23.5605C19.3836 23.9947 18.9775 24.2876 18.5198 24.2892H18.5194C17.9296 24.2913 17.453 24.7711 17.4551 25.3609L17.4636 27.7863C17.4657 28.3761 17.9455 28.8527 18.5354 28.8506H18.5358C18.9934 28.849 19.4015 29.139 19.5494 29.5722C19.6835 29.9652 19.8445 30.3511 20.0323 30.727C20.2364 31.1358 20.1553 31.6294 19.8334 31.9536C19.4177 32.3722 19.4201 33.0484 19.8387 33.4639L21.5597 35.1729C21.9782 35.5887 22.6544 35.5862 23.0701 35.1677C23.392 34.8435 23.885 34.7589 24.2952 34.9603C24.6723 35.1454 25.0594 35.3036 25.4533 35.435C25.8876 35.5798 26.1805 35.9859 26.1821 36.4436V36.444C26.1842 37.0339 26.664 37.5104 27.2539 37.5083L29.6793 37.4998C30.269 37.4978 30.7456 37.018 30.7435 36.428V36.4277C30.7418 35.9699 31.0319 35.5619 31.4651 35.414C31.8581 35.2799 32.2441 35.1189 32.6199 34.9311C33.0288 34.727 33.5223 34.808 33.8465 35.13C34.265 35.5457 34.9413 35.5433 35.3569 35.1247L37.0659 33.4038C37.4815 32.9852 37.4791 32.3089 37.0606 31.8933C36.7364 31.5714 36.6519 31.0784 36.8531 30.6682C37.0383 30.2911 37.1965 29.904 37.3279 29.51C37.4727 29.0758 37.8788 28.7829 38.3365 28.7813H38.337C38.9267 28.7792 39.4033 28.2995 39.4012 27.7096L39.3926 25.2842Z"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.61659 27.6076H4.62694C3.3292 27.6076 2.27734 28.6596 2.27734 29.9571V40.7161C2.27734 42.0137 3.3292 43.0657 4.62694 43.0657H7.61659"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M49.2402 43.0659H52.2723C53.57 43.0659 54.6218 42.0139 54.6218 40.7163V29.9573C54.6218 28.6598 53.57 27.6078 52.2723 27.6078H49.2402"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.61719 27.6077C7.61719 27.6069 7.61719 27.606 7.61719 27.6054V20.0046C7.61719 11.8175 14.2779 5.15692 22.4648 5.15692H34.3925C42.5797 5.15692 49.2402 11.8175 49.2402 20.0046V27.6071V27.6077"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.39062 25.0706V27.9622"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.4659 27.9363V20.0043C53.4659 9.43583 44.8985 0.868375 34.3301 0.868375H22.5265C11.9581 0.868375 3.39062 9.43583 3.39062 20.0043V21.2577"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.457 55.2278H31.8482C30.7584 55.2278 29.875 54.3444 29.875 53.2545C29.875 52.1647 30.7584 51.2813 31.8482 51.2813H37.457C38.5468 51.2813 39.4302 52.1647 39.4302 53.2545C39.4302 54.3444 38.5468 55.2278 37.457 55.2278Z"
            stroke="white"
            strokeWidth="1.64062"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1433_14578">
          <rect
            width="56"
            height="56"
            fill="white"
            transform="translate(0.453125 0.0476074)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const HERO_CARDS = [
  {
    id: 1,
    icon: <BADGE_ICON />,
    text: "Expertise in securing enterprise and SMB environments.",
  },
  {
    id: 2,
    icon: <POWER_ICON />,
    text: "Powered by the VIGILE Framework for adaptive identity security.",
  },
  {
    id: 3,
    icon: <EAR_PHONE_ICON />,
    text: "24/7 monitoring and support from our Managed SOC team.",
  },
];
export const MANAGED_APPROACHED = [
  {
    id: 0,
    icon: VALIDATE_IMG,
    heading: "Validate",
    text: " Assess your current identity security posture",
  },
  {
    id: 1,
    icon: IDENTIFY_IMG,
    heading: "Identify",
    text: "Pinpoint vulnerabilities and risks in identity workflows",
  },
  {
    id: 2,
    icon: GUARD_IMG,
    heading: "Guard",
    text: " Assess your current identity security posture",
  },
  {
    id: 3,
    icon: IMPLEMENT_IMG,
    heading: "Implement",
    text: "Automate and streamline identity lifecycle management",
  },
  {
    id: 4,
    icon: LEARN_IMG,
    heading: "Learn",
    text: "Monitor and optimize with continuous improvement strategies",
  },
  {
    id: 5,
    icon: ENHANCE_IMG,
    heading: "Enhance",
    text: "Pinpoint vulnerabilities and risks in identity workflows",
  },
];
export const CrisisTexts = [
  {
    subtitle: (
      <>
        <span className="font-bold">81% </span> of data breaches are caused by
        compromised credentials.
      </>
    ),
  },
  {
    subtitle:
      "Manual identity management processes slow down operations and leave gaps.",
  },
  {
    subtitle:
      "Increasing reliance on cloud-based solutions demands robust, scalable identity security.",
  },
];
export const SECURITY_DATA = [
  {
    imgurl: "/images/ManagedIdentity/Tickimg.webp",
    subtitle: (
      <>
        <span className="font-bold">Protect Your Workforce:</span> Keep
        credentials and identities safe from threats
      </>
    ),
  },
  {
    imgurl: "/images/ManagedIdentity/Tickimg.webp",
    subtitle: (
      <>
        <span className="font-bold">Boost Operational Efficiency:</span>{" "}
        Automate identity lifecycle management
      </>
    ),
  },
  {
    imgurl: "/images/ManagedIdentity/Tickimg.webp",
    subtitle: (
      <>
        <span className="font-bold">Enhance Compliance:</span> Align with
        regulatory requirements like GDPR, CCPA, and more
      </>
    ),
  },
];
export const COMPREHENSIVE_DATA = [
  {
    imgurl: "/images/ManagedIdentity/Managementicon.webp",
    title: "Identity and Access Management",
    description: "Centralized control over user identities.",
  },
  {
    imgurl: "/images/ManagedIdentity/Managementicon.webp",
    title: "Single Sign-On (SSO)",
    description: "Simplify access with one login for all apps.",
  },
  {
    imgurl: "/images/ManagedIdentity/Managementicon.webp",
    title: "Multi-Factor Authentication (MFA)",
    description: "Protect against credential-based breaches.",
  },
  {
    imgurl: "/images/ManagedIdentity/Managementicon.webp",
    title: "Privileged Access Management",
    description: "Limit access to sensitive systems and data.",
  },
  {
    imgurl: "/images/ManagedIdentity/Managementicon.webp",
    title: "Adaptive Access Controls",
    description: "Context-aware access management.",
  },
  {
    imgurl: "/images/ManagedIdentity/Managementicon.webp",
    title: "Auto Onboarding & Offboarding",
    description: "Reduce human error to improve efficiency.",
  },
];
