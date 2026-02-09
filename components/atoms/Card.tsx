// @ts-nocheck
"use client";

import { useRouter, usePathname } from "next/navigation";
import ReusableBtn from "./ReusableBtn";
import { FaArrowRightLong } from "react-icons/fa6";

interface ProductCardProps {
  imgurl: string;
  name: string;
  title: string;
  icon?: string;
  subname?: string;
  role?: string;
  text?: string;
  className?: string;
  PclassName?: string;
  nameBgColor?: string;
  date?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imgurl,
  name,
  title,
  subname,
  role,
  text,
  className,
  PclassName,
  nameBgColor,
  date,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const routes: { [key: string]: string } = {
    "Being Human in era of AI": "/casestudies/era-of-ai",
    "Prompt Injection - Practical Mitigations": "/casestudies/prompt-injection",
    "Cybersecurity Concerns and Preparedness for the Paris 2024 Olympics":
      "/casestudies/cybersecurity-concerns",
    "Democratic Elections and AI": "/casestudies/democratic-election",
    "Navigating the Next Frontier: The State of Data Centers in India":
      "/casestudies/navigating-frontier",
    "AI Attack Mitigation": "/casestudies/attack-migitation",
    "Unleashing Creativity & Efficiency": "/casestudies/unleashing-creativity",
    "The Guardian Angel in the Cloud": "/casestudies/guardian-angel",
    "Securing the Code in a Gen AI World": "/casestudies/securing-the-code",
    "Intricate world of New age Tech": "/casestudies/Intricateworld",
    "TikTok Banned Reasons": "/casestudies/tiktok",
    "National Defense in Cyberspace": "/casestudies/Nationaldefense",
    "AI Integration & What could go wrong": "/casestudies/AIIntegration",
    "Bridging the Language Divide: The Quest for Linguistic Equity in AI":
      "/casestudies/Linguisticequity",
    "How Tech can expedite Sustainability": "/casestudies/Sustainability",
    "AI for India": "/casestudies/AIforindia",
    "Scalable & Flexible Security Architectures":
      "/casestudies/ScalableSecurity",
    "EU adopts a new AI law": "/casestudies/EUAIlaw",
    "Automated Response Mechanisms": "/casestudies/Automatedmechanisms",
    "Navigating the Crossroads": "/casestudies/Crossroads",
    "Embracing the Hybrid Cloud": "/casestudies/Hybridcloud",
    "Saviynt Partners with St. Fox to Build a Scalable, Trusted Identity Ecosystem for India":
      "/casestudies/Saviynt",
    "Protecting Our Digital World": "/casestudies/protecting-digital-world",
  };

  const navigateToCaseStudy = () => {
    const isOnLandingPage = pathname === "/";
    const isOnBlogsPage = pathname === "/casestudies";
    const isOnVigilePage = pathname === "/vigile";

    if (isOnLandingPage || isOnVigilePage) {
      router.push("/casestudies");
    } else if (isOnBlogsPage && routes[title]) {
      router.push(routes[title]);
    }
  };

  return (
    <div
      className={`rounded-md border border-[#DDE1E6] ${className}`}
      onClick={navigateToCaseStudy}
    >
      <img
        loading="lazy"
        onClick={navigateToCaseStudy}
        src={imgurl}
        alt={title}
        className="w-full cursor-pointer rounded-t-md"
      />
      <div className="flex items-center justify-between">
        <p
          className={`font-montserrat mx-3 mt-[18.26px] h-[23.04px] rounded px-2 pt-[1.52px] text-[13px] font-medium ${PclassName} ${nameBgColor}`}
        >
          {name}
        </p>
        <p className="mx-3 mt-[18.26px] pl-[7.61px] pt-[1.52px] text-[11px] text-[#697077]">
          {date}
        </p>
      </div>
      <h2 className="text-gray-900 dark:text-white font-montserrat mx-3 mt-3 h-auto pb-5 font-bold sm:text-xs md:h-11 md:text-sm lg:h-11 lg:text-sm">
        {title}
      </h2>

      {(subname || role) && (
        <div className="mx-3 mt-3 flex items-center">
          <div></div>
        </div>
      )}

      {(subname || role) && (
        <div className="my-3 flex justify-between">
          <div className="flex gap-2"></div>
          {text && (
            <button
              onClick={navigateToCaseStudy}
              className={`mx-3 ${!role ? "mt-3 flex justify-center" : ""}`}
            >
              <ReusableBtn
                as="span"
                icon={<FaArrowRightLong className="-mt-[2px]" />}
                name={text}
                className="font-montserrat -mt-9 flex gap-2 text-xs font-medium text-[#1A3F7E]"
                type="button"
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
