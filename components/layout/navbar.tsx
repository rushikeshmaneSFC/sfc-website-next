"use client";
// @ts-nocheck

import { HiMenuAlt1, HiSearch, HiX } from "react-icons/hi";
import { useSidebarContext } from "@/context/SidebarContext";
import isSmallScreen from "@/helpers/is-small-screen";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa6";
import { TextInput } from "flowbite-react";
import { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import Link from "next/link";

const ExampleNavbar: FC = function () {
  const { isPageWithSidebar } = useSidebarContext();

  const [logoSrc, setLogoSrc] = useState("/images/home/Stfoxlogo.webp"); 
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [resource, setResource] = useState(false);
  const [companyToggle, setCompanyToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [practices, setPractices] = useState(false);
  const [mobileResources, setMobileResources] = useState(false);
  const [mobileCompany, setMobileCompany] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [specializedServices, setSpecializedServices] = useState(false);
  const [data, setData] = useState(false);
  const [securityAI, setSecurityAI] = useState(false);
  const [cloudengineering, setCloudEngineering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [whiteBackgroundPages] = useState([
    "/cloud-security",
    "/vulnerability",
    "/dlp",
    "/casestudies",
    "/casestudies/era-of-ai",
    "/casestudies/prompt-injection",
    "/casestudies/cybersecurity-concerns",
    "/casestudies/democratic-election",
    "/casestudies/navigating-frontier",
    "/casestudies/tiktok",
    "/casestudies/Intricateworld",
    "/casestudies/attack-migitation",
    "/casestudies/Nationaldefense",
    "/casestudies/AIIntegration",
    "/casestudies/Linguisticequity",
    "/casestudies/Sustainability",
    "/casestudies/AIforindia",
    "/casestudies/ScalableSecurity",
    "/casestudies/Automatedmechanisms",
    "/casestudies/EUAIlaw",
    "/casestudies/Crossroads",
    "/casestudies/Hybridcloud",
    "/casestudies/securing-the-code",
    "/casestudies/guardian-angel",
    "/casestudies/unleashing-creativity",
    "/clutch-at-a-glance",
    "/clutch-infographics",
    "/clutch-datasheet",
    "/casestudies/era-of-ai",
    "/casestudies/Saviynt",
    "/casestudies/protecting-digital-world",
  ]);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;

      if (localStorage.getItem("fromFooter") === "true" && isScrolled) {
        localStorage.setItem("navbarToggle", "false");
        localStorage.setItem("fromFooter", "false");
        setNavbarToggle(false);
      }

      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



const updateLogoSrc = () => {
  if (
    whiteBackgroundPages.includes(pathname) ||
    scrolled ||
    isSmallScreen()
  ) {
    setLogoSrc("/images/home/Stfoxlogo.webp");
  } else {
    setLogoSrc("/images/home/StfoxLogo1.webp");
  }
};


useEffect(() => {
  updateLogoSrc();
}, [pathname, scrolled]);

  const services = {
    managedServices: [
      { id: 1, name: "Managed Identity", link: "/managed-identity" },
      {
        id: 2,
        name: "Managed Security Operations Center (SOC)",
        link: "/soc2",
      },
      {
        id: 3,
        name: "Managed Detection And Response",
        link: "/mdr",
      },

      { id: 4, name: "Managed Cloud Security", link: "/sasecloudsecurity" },
      {
        id: 5,
        name: "Managed Secure Access Service Edge (SASE)",
        link: "/sase",
      },
      { id: 6, name: "Managed Email Security", link: "/email-security" },

      { id: 7, name: "Managed Firewall", link: "/managed" },
      {
        id: 8,
        name: "Managed Vulnerability and Patching",
        link: "/vulnerability",
      },
      { id: 9, name: "Managed DevSecOps", link: "/dev-secOps" },
    ],
    securityServices: [
      { id: 1, name: "ISO Audits", link: "/iso" },
      { id: 2, name: "SOC 2 Audits", link: "/soc" },
      { id: 3, name: "VAPT", link: "/vapt" },
      { id: 4, name: "RED Teaming", link: "/OptimizeDefenses" },
      { id: 5, name: "TPCRM", link: "/tpcrm" },
      { id: 6, name: "vCISO", link: "/vciso" },
      { id: 7, name: "vDPO", link: "/vdpo" },
      { id: 8, name: "Incident Response", link: "/incident-response" },
      { id: 9, name: "SOC Assessment", link: "/soc-assessment" },
      { id: 10, name: "Identity Assessment", link: "/identity-assessment" },
      {
        id: 11,
        name: "Cloud Security Posture Assessment",
        link: "/cloud-security",
      },
    ],
    dataSecurityServices: [
      { id: 1, name: "Privacy Ops", link: "/privacy-ops" },
      { id: 2, name: "Data Security Posture Management", link: "/dspm" },
      { id: 3, name: "Data Loss Prevention", link: "/dlp" },
    ],
    securityAIServices: [
      {
        id: 1,
        name: "Security for AI",
        link: "/ai-security",
        img: "/images/Navbar/SecurityforAI.webp",
      },
    ],

    cloudAIServices: [
      {
        id: 1,
        name: "Cloud Engineering",
        link: "/cloud-engineering",
        img: "/images/Navbar/CloudEngineering.webp",
      },
    ],
    resourceServices: [{ id: 1, name: "Blogs", link: "/casestudies" }],
    CompanyServices: [
      { id: 1, name: "About", link: "/" },
      {
        id: 2,
        name: "Corporate Sustainability",
        link: "/corporate-sustainability",
      },
      { id: 3, name: "Privacy Policy", link: "/privacy-policy" },
    ],
  };

  function SecurityServices() {
    return (
      <div className="flex justify-between p-6  bg-white shadow-md rounded-lg h-[500px]">
        <div className="2xl:w-[250px] mr-6">
          <h3 className="text-base font-bold pb-2 text-[#3B6F75]">
            Managed Services
          </h3>
          <ul className="mt-2 text-gray-700 space-y-4 ">
            {services?.managedServices?.map((service) => (
              <li
                key={service.id}
                onClick={() => {
                  router.push(service.link);
                  localStorage.setItem("navbarToggle", "false");
                  setNavbarToggle(false);
                  setActiveItem(service.name);
                }}
                className={`text-sm cursor-pointer ${
                  activeItem === service.name
                    ? "text-[#1C1C1C] font-bold"
                    : "text-[#1C1C1C] hover:text-sm hover:text-[#3B6F75]"
                }`}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[250px]">
          <h3 className="text-[#A96432] pb-2 font-bold">
            Specialized Services
          </h3>
          <ul className="mt-2 text-gray-700 space-y-4">
            {services?.securityServices?.map((service) => (
              <li
                key={service.id}
                className={`text-sm cursor-pointer ${
                  activeItem === service.name
                    ? "text-[#1C1C1C] font-bold"
                    : "text-[#1C1C1C] hover:text-sm hover:text-[#A96432]"
                }`}
                onClick={() => {
                  router.push(service.link);
                  localStorage.setItem("navbarToggle", "false");
                  setNavbarToggle(false);
                  setActiveItem(service.name);
                }}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[250px]">
          <h3 className="text-[#5A6B3D] font-bold">Data Services</h3>
          <ul className="mt-4 text-gray-700 space-y-4">
            {services?.dataSecurityServices?.map((service) => (
              <li
                key={service.id}
                className={`text-sm cursor-pointer ${
                  activeItem === service.name
                    ? "text-[#1C1C1C] font-bold"
                    : "text-[#1C1C1C] hover:text-sm hover:text-[#5A6B3D]"
                }`}
                onClick={() => {
                  router.push(service.link);
                  setNavbarToggle(false);
                  localStorage.setItem("navbarToggle", "false");
                  setActiveItem(service.name);
                }}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="w-full max-w-[320px] ">
            {services?.securityAIServices?.map((service) => (
              <div
                key={service.id}
                className=" p-4 rounded-lg border w-full cursor-pointer group"
                onClick={() => {
                  router.push(service.link);
                  setNavbarToggle(false);
                  localStorage.setItem("navbarToggle", "false");
                  setActiveItem(service.name);
                }}
              >
                <button
                  className={`text-[#102537] text-sm transition-all${
                    activeItem === service.name
                      ? "text-[#1C1C1C] font-bold"
                      : "text-[#1C1C1C] "
                  }`}
                >
                  {service.name}
                </button>
                <div className="flex items-center justify-center rounded-lg mt-3 h-24">
                  {service.img && (
                    <img
                      src={service.img}
                      alt={service.name}
                      className="h-28 w-[286px] object-contain"
                    />
                  )}
                </div>

                <button
                  className="mt-4 flex items-center text-[#1C64F2] text-[13px] font-medium hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(service.link);
                    setNavbarToggle(false);
                    localStorage.setItem("navbarToggle", "false");
                    setActiveItem(service.name);
                  }}
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-lg text-[#1C64F2]" />
                </button>
              </div>
            ))}
          </div>

          <div className="w-full max-w-[320px]">
            {services?.cloudAIServices?.map((service) => (
              <div
                key={service.id}
                className="bg-white p-4 rounded-lg border w-full cursor-pointer group"
                onClick={() => {
                  router.push(service.link);
                  setNavbarToggle(false);
                  localStorage.setItem("navbarToggle", "false");
                  setActiveItem(service.name);
                }}
              >
                <button
                  className={`text-[#102537] text-sm transition-all ${
                    activeItem === service.name
                      ? "text-[#1C1C1C] font-bold"
                      : "text-[#1C1C1C] "
                  }`}
                >
                  {service.name}
                </button>

                <div className="flex items-center justify-center rounded-lg mt-3 h-24">
                  {service.img && (
                    <img
                      src={service.img}
                      alt={service.name}
                      className="h-28 w-[286px] object-contain"
                    />
                  )}
                </div>

                <button
                  className="mt-4 flex items-center text-[#1C64F2] text-[13px] font-medium hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(service.link);
                    setNavbarToggle(false);
                    localStorage.setItem("navbarToggle", "false");
                    setActiveItem(service.name);
                  }}
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-lg text-[#1C64F2]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function company() {
    return (
      <div className="flex justify-between p-2 bg-white shadow-md rounded-lg">
        <div className="w-[220px] mr-6 px-2">
          <ul className="text-gray-700 space-y-4 ">
            <Link href="/about-us">
              <li
                onClick={() => {
                  setCompanyToggle(false);
                }}
                className={`text-sm cursor-pointer text-[#1C1C1C] hover:text-base hover:text-[#1C1C1C] hover:font-bold py-2"
`}
              >
                About Us
              </li>
            </Link>
            <Link href="/corporate-sustainability">
              <li
                onClick={() => {
                  setCompanyToggle(false);
                }}
                className={`text-sm cursor-pointer text-[#1C1C1C] hover:text-base hover:text-[#1C1C1C] hover:font-bold py-2 hover:whitespace-nowrap"
`}
              >
                Corporate Sustainability
              </li>
            </Link>
            <Link href="/privacy-policy">
              <li
                onClick={() => {
                  setCompanyToggle(false);
                }}
                className={`text-sm cursor-pointer text-[#1C1C1C] hover:text-base hover:text-[#1C1C1C] hover:font-bold py-2"
`}
              >
                Privacy Policy
              </li>
            </Link>
            <Link href="/casestudies">
              <li
                onClick={() => {
                  setCompanyToggle(false);
                }}
                className="text-sm cursor-pointer text-[#1C1C1C] hover:text-base hover:text-[#1C1C1C] hover:font-bold py-2"
              >
                Insights
              </li>
            </Link>

            <Link href="/careers">
              <li
                onClick={() => {
                  setCompanyToggle(false);
                }}
                className="text-sm cursor-pointer text-[#1C1C1C] hover:text-base hover:text-[#1C1C1C] hover:font-bold"
              >
                Careers
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }

  function SecurityServicesMobileView() {
    return (
      <div className="mx-4">
        <div className="pb-4 ">
          <div
            className="flex justify-between items-center "
            onClick={() => {
              setPractices(!practices);
            }}
          >
            <p className=" text-[#3B6F75] text-[16px] font-medium">
              Managed Services
            </p>
            <div>
              <FaChevronRight className="h-3 w-3" />
            </div>
          </div>
          <div
            className={`absolute top-[75px] left-0 bg-white w-full h-full px-4 overflow-y-auto transform transition-transform duration-1000 ease-in-out ${
              !practices ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="mx-4">
              <div
                className="flex gap-2 justify-start items-center mb-2"
                onClick={() => {
                  setPractices(!practices);
                }}
              >
                <FaChevronLeft className="mt-5" />
                <p className="mt-5 text-[#3B6F75] text-xl font-semibold">
                  Managed Services
                </p>
              </div>
              <hr></hr>
              <ul className="mt-4 px-4 text-gray-700">
                {services?.managedServices?.map((service) => (
                  <li
                    key={service.id}
                    onClick={() => {
                      router.push(service.link);
                      setNavbarToggle(false);
                      localStorage.setItem("navbarToggle", "false");
                      setActiveItem(service.name);
                      setShowNavbar(false);
                    }}
                    className={`text-[18px] cursor-pointer py-2 ${
                      activeItem === service.name
                        ? "text-[#3B73CC] font-bold"
                        : "text-[#1C1C1C]"
                    }`}
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <div
            className="flex justify-between items-center"
            onClick={() => {
              setSpecializedServices(!specializedServices);
            }}
          >
            <p className="text-[#A96432] text-[16px] font-medium">
              Specialized Services
            </p>
            <div>
              <FaChevronRight className="h-3 w-3" />
            </div>
          </div>
          <div
            className={`absolute top-[75px] left-0 bg-white w-full h-full px-4 overflow-y-auto transform transition-transform duration-1000 ease-in-out ${
              !specializedServices ? "translate-x-full" : "-translate-x-0"
            }`}
          >
            <div className="mx-4">
              <div
                className="flex gap-2 justify-start items-center mb-2"
                onClick={() => {
                  setSpecializedServices(!specializedServices);
                }}
              >
                <FaChevronLeft className="mt-5" />
                <p className="mt-5 text-xl text-[#A96432] font-semibold">
                  Specialized Services
                </p>
              </div>
              <hr></hr>
              <ul className="mt-4 px-4 text-gray-700">
                {services?.securityServices?.map((service) => (
                  <li
                    key={service.id}
                    className={`text-[18px] cursor-pointer py-1 ${
                      activeItem === service.name
                        ? "text-[#3B73CC] font-bold"
                        : "text-[#1C1C1C]"
                    }`}
                    onClick={() => {
                      router.push(service.link);
                      setNavbarToggle(false);
                      localStorage.setItem("navbarToggle", "false");
                      setActiveItem(service.name);
                      setShowNavbar(false);
                    }}
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <div
            className="flex justify-between items-center "
            onClick={() => {
              setData(!data);
            }}
          >
            <p className="text-[#5A6B3D] text-[16px] font-medium">Data</p>
            <div>
              <FaChevronRight className="h-3 w-3" />
            </div>
          </div>
          <div
            className={`absolute top-[75px] left-0 bg-white w-full h-full px-4 overflow-y-auto transform transition-transform duration-1000 ease-in-out ${
              !data ? "translate-x-full" : "-translate-x-0"
            }`}
          >
            <div className="mx-4">
              <div
                className="flex gap-2 justify-start items-center mb-2"
                onClick={() => {
                  setData(!data);
                }}
              >
                <FaChevronLeft className="mt-5" />
                <p className="mt-5 text-xl text-[#5A6B3D] font-semibold">
                  Data
                </p>
              </div>
              <hr></hr>
              <ul className="mt-4 px-4 text-gray-700">
                {services?.dataSecurityServices?.map((service) => (
                  <li
                    key={service.id}
                    onClick={() => {
                      router.push(service.link);
                      setNavbarToggle(false);
                      localStorage.setItem("navbarToggle", "false");
                      setActiveItem(service.name);
                      setShowNavbar(false);
                    }}
                    className={`text-[18px] cursor-pointer py-2 ${
                      activeItem === service.name
                        ? "text-[#3B73CC] font-bold"
                        : "text-[#1C1C1C]"
                    }`}
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Link href="/ai-security">
            <div
              className="flex justify-between items-center"
              onClick={() => {
                setSecurityAI(!securityAI);
              }}
            >
              <p className="text-[#635D75] text-[16px] font-medium">
                Security for AI
              </p>
              <div>
                <FaChevronRight className="h-3 w-3" />
              </div>
            </div>
          </Link>
          <div
            className={`absolute top-[75px] left-0 bg-white w-full h-full px-4 overflow-y-auto transform transition-transform duration-1000 ease-in-out ${
              !securityAI ? "translate-x-full" : "-translate-x-0"
            }`}
          ></div>
        </div>

        <div className="pb-4 mt-4">
          <Link href="/cloud-engineering">
            <div
              className="flex justify-between items-center"
              onClick={() => {
                setCloudEngineering(!cloudengineering);
              }}
            >
              <p className="text-[#635D75] text-[16px] font-medium">
                Cloud Engineering
              </p>
              <div>
                <FaChevronRight className="h-3 w-3" />
              </div>
            </div>
          </Link>
          <div
            className={`absolute top-[75px] left-0 bg-white w-full h-full px-4 overflow-y-auto transform transition-transform duration-1000 ease-in-out ${
              !cloudengineering ? "translate-x-full" : "-translate-x-0"
            }`}
          ></div>
        </div>
      </div>
    );
  }

  function CompanyServicesMobileView() {
    return (
      <div className="mx-4">
        <div className="pb-4 ">
          <div className="flex justify-between items-center ">
            <Link href="/about-us">
              <p
                className=" text-[#000] text-[16px] font-medium"
                onClick={() => {
                  setShowNavbar(!showNavbar);
                }}
              >
                About us
              </p>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="pb-4 ">
            <div className="flex justify-between items-center ">
              <Link href="/corporate-sustainability">
                <p
                  className=" text-[#000] text-[16px] font-medium"
                  onClick={() => {
                    setShowNavbar(!showNavbar);
                  }}
                >
                  Corporate Sustainability
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="pb-4 ">
            <div className="flex justify-between items-center ">
              <Link href="/privacy-policy">
                <p
                  className=" text-[#000] text-[16px] font-medium"
                  onClick={() => {
                    setShowNavbar(!showNavbar);
                  }}
                >
                  Privacy Policy
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="pb-4 ">
            <div className="flex justify-between items-center ">
              <Link href="/casestudies">
                <p
                  className=" text-[#000] text-[16px] font-medium"
                  onClick={() => {
                    setShowNavbar(!showNavbar);
                  }}
                >
                  Insights
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="pb-4 ">
            <div className="flex justify-between items-center ">
              <Link href="/careers">
                <p
                  className=" text-[#000] text-[16px] font-medium"
                  onClick={() => {
                    setShowNavbar(!showNavbar);
                  }}
                >
                  Careers
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const storedValue = localStorage.getItem("navbarToggle");
    if (storedValue !== null) {
      setNavbarToggle(storedValue === "true");
    }
  }, []);
  useEffect(() => {
    if (showNavbar) {
      setNavbarToggle(false);
      setMobileResources(false);
      setMobileCompany(false);
    }
  }, [showNavbar]);
  useEffect(() => {
    setShowNavbar(false);
  }, [pathname]);

  return (
    <>
      <div
        className={`flex justify-center items-center fixed top-0 left-0 w-full z-50 transition-colors duration-100 ${
          scrolled
            ? "bg-white dark:bg-gray-800"
            : isSmallScreen()
              ? "bg-white "
              : `bg-transparent ${
                  whiteBackgroundPages.includes(pathname)
                    ? "text-[#1F1F1F]"
                    : "text-[#fff]"
                } `
        }`}
      >
        <div className="flex justify-between w-full 2xl:mx-[150px] lg:mx-24 mx-5 py-3">
          <div className="flex items-center">
            <Link href="/">
              <img
                alt="Logo"
                src={logoSrc}
                className="h-[35px] text-[#1F1F1F]"
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center justify-between flex-1 ml-10">
            <div className="flex gap-6 items-center">
              <Link
                href="/vigile"
                className="bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E] py-2 px-4 rounded-md text-[#fff] font-mediumtext-[15px] font-bold inline-block"
              >
                VIGILE
              </Link>
              <div
                className="relative flex gap-2 items-center cursor-pointer group"
                onMouseEnter={() => {
                  setNavbarToggle(true);
                  localStorage.setItem("navbarToggle", "true");
                }}
                onMouseLeave={() => {
                  setNavbarToggle(false);
                  localStorage.setItem("navbarToggle", "false");
                }}
              >
                <button className="text-[15px] font-bold">Solutions</button>
                {navbarToggle ? (
                  <FaChevronUp className="h-3 w-3" />
                ) : (
                  <FaChevronDown className="h-3 w-3" />
                )}
                <div className="absolute left-0 -right-[800px] top-5 z-50">
                  {navbarToggle && (
                    <div className="flex justify-center items-center mt-4">
                      {SecurityServices()}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-center ml-auto mr-12">
              <div
                className="relative flex gap-2 items-center cursor-pointer group"
                onMouseEnter={() => {
                  setCompanyToggle(true);
                }}
                onMouseLeave={() => {
                  setCompanyToggle(false);
                }}
              >
                <button className="text-[15px] mt-0.5 font-bold">
                  Company
                </button>
                {companyToggle ? (
                  <FaChevronUp className="h-3 w-3" />
                ) : (
                  <FaChevronDown className="h-3 w-3 mt-1" />
                )}
                <div className="absolute left-0 right-5 top-5 z-50">
                  {companyToggle && (
                    <div className="flex justify-center items-center mt-4">
                      {company()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between lg:mr-[-20px] 2xl:mr-[10px]">
            <div className="flex items-center justify-center"></div>
            <div>
              <ReusableBtn
                type="button"
                name="Experienced a Breach ?"
                className="font-bold rounded-lg border-2 border-gradient-to-r from-[#3B73CC] to-[#1A3F7E]  px-4 py-2 whitespace-nowrap hidden md:block lg:block"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
          {isPageWithSidebar && (
            <button
              onClick={() => {
                setShowNavbar(!showNavbar);
                setPractices(false);
                setSpecializedServices(false);
                setData(false);
                setSecurityAI(false);
                setCloudEngineering(false);
              }}
              className="cursor-pointer rounded py-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hidden"
            >
              <span className="sr-only">Toggle navbar</span>
              {showNavbar ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenuAlt1 className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
        {showNavbar && (
          <div className="bg-white my-4 px-4 absolute top-[43px] left-0 w-full h-screen z-50">
            <div className="overflow-y-auto w-full my-4 px-2">
              <TextInput
                type="search"
                placeholder="Search"
                required
                className="h-[38px] w-full lg:hidden"
              />

              <div className="flex flex-col items-start gap-3 py-4 ">
                <div
                  className="flex justify-between items-center w-full cursor-pointer"
                  onClick={() => setNavbarToggle(!navbarToggle)}
                >
                  <button className="text-[16px] font-medium">Solutionsssssssssssssss</button>
                  {navbarToggle ? (
                    <FaChevronUp className="h-3 w-3" />
                  ) : (
                    <FaChevronDown className="h-3 w-3" />
                  )}
                </div>
                {navbarToggle && (
                  <div className="w-full">{SecurityServicesMobileView()}</div>
                )}
              </div>

              <div className="flex flex-col items-start py-2 ">
                <Link
                  href="/vigile"
                  className="text-[16px] font-medium"
                  onClick={() => setShowNavbar(false)}
                >
                  VIGILE
                </Link>
              </div>

              <div className="flex flex-col items-start gap-3 py-4 ">
                <div
                  className="flex justify-between items-center w-full cursor-pointer"
                  onClick={() => setMobileCompany(!mobileCompany)}
                >
                  <button className="text-[16px] font-medium">Company</button>
                  {mobileCompany ? (
                    <FaChevronUp className="h-3 w-3" />
                  ) : (
                    <FaChevronDown className="h-3 w-3" />
                  )}
                </div>
                {mobileCompany && (
                  <div className="w-full">{CompanyServicesMobileView()}</div>
                )}
              </div>

              <ReusableBtn
                type={"button"}
                name={"Experienced a Breach ?"}
                className={
                  "bg-[#1A3F7E] rounded-md text-[#fff] text-[18px] font-medium px-4 py-2 my-4 whitespace-nowrap block md:hidden lg:hidden"
                }
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        )}
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Contact Us"}
        from={"breach"}
      />
    </>
  );
};

export default ExampleNavbar;
