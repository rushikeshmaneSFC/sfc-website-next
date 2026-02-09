// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface SectionRef {
  current: HTMLElement | null;
}

interface DataItem {
  refs: React.RefObject<HTMLDivElement | null>;
  id: string;
  component: React.ReactNode;
}

interface SubNavbarProps {
  sectionRefs: { [key: string]: SectionRef };
  data: DataItem[];
}
function SubNavbar({ sectionRefs, data }: SubNavbarProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [activeItem, setActiveItem] = useState("Introduction");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // SSR-safe: update isMobile on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  let commoncss: { margin?: string; scroll?: number } = {};

  switch (pathname) {
    case "/managed-identity":
      commoncss.margin = "mt-8";
      commoncss.scroll = isMobile ? 1500 : 1030;
      break;
    case "/soc":
      commoncss.margin = isMobile ? "-mt-10" : "mt-36";
      commoncss.scroll = isMobile ? 1070 : 770;
      break;
    case "/mdr":
      commoncss.margin = "";
      commoncss.scroll = isMobile ? 1500 : 1050;
      break;
    case "/sasecloudsecurity":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 750 : 640;
      break;
    case "/sase":
      commoncss.margin = "mt-8";
      commoncss.scroll = isMobile ? 780 : 700;
      break;
    case "/email-security":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 1250 : 900;
      break;
    case "/managed":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 1050 : 1060;
      break;
    case "/vulnerability":
      commoncss.margin = "mt-8";
      commoncss.scroll = isMobile ? 1500 : 1200;
      break;
    case "/dev-secOps":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 1000 : 770;
      break;
    case "/iso":
      commoncss.margin = "mt-8";
      commoncss.scroll = isMobile ? 870 : 930;
      break;
    case "/soc2":
      commoncss.margin = "mt-8";
      commoncss.scroll = isMobile ? 650 : 540;
      break;
    case "/vapt":
      commoncss.margin = "mt-8";
      commoncss.scroll = isMobile ? 850 : 890;
      break;
    case "/OptimizeDefenses":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 800 : 600;
      break;
    case "/tpcrm":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 500 : 700;
      break;
    case "/vciso":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 950 : 1000;
      break;
    case "/vdpo":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 1500 : 1100;
      break;
    case "/incident-response":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 600 : 720;
      break;
    case "/soc-assessment":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 750 : 1050;
      break;
    case "/identity-assessment":
      commoncss.margin = "mt-5";
      commoncss.scroll = 700;
      break;
    case "/cloud-security":
      commoncss.margin = "mt-8";
      commoncss.scroll = isMobile ? 800 : 1000;
      break;
    case "/privacy-ops":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 950 : 900;
      break;
    case "/managed-firewall":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 850 : 1170;
      break;
    case "/dspm":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 750 : 1000;
      break;
    case "/dlp":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 1050 : 1100;
      break;

    case "/Compromise-Assessment":
      commoncss.margin = "mt-5";
      commoncss.scroll = isMobile ? 850 : 1000;
      break;
  }

  let menuItems = [
    pathname === "/managed-identity"
      ? { name: "Solution", ref: sectionRefs["Solution"] }
      : { name: "Introduction", ref: sectionRefs["Introduction"] },
    { name: "VIGILE", ref: sectionRefs["VIGILE"] },
    { name: "Datasheet", ref: sectionRefs["Datasheet"] },
    { name: "Why us?", ref: sectionRefs["Whyus"] },

    pathname === "/soc2"
      ? { name: "How we excel?", ref: sectionRefs["HowWeExcel"] }
      : ![
            "/managed-identity",
            "/mdr",
            "/sasecloudsecurity",
            "/email-security",
            "/managed",
            "/dev-secOps",
            "/OptimizeDefenses",
            "/vciso",
            "/managed-firewall",
            "/tpcrm",
            "/identity-assessment",
      "/vdpo",
      "/soc-assessment",
      "/incident-response",
    ].includes(pathname)
        ? ""
        : null,

    [
      "/sase",
      "/vulnerability",
      "/soc2",
      "/managed-identity",
      "/email-security",
      "/managed",
      "/managed-firewall",
      "/vdpo",
    ].includes(pathname)
      ? null
      : { name: "Metrics", ref: sectionRefs["Metrics"] },

    pathname === "/soc2"
      ? { name: "SIEM", ref: sectionRefs["SIEM"] }
      : { name: "FAQs", ref: sectionRefs["FAQs"] },
  ].filter(Boolean);

  const handleMenuClick = (item: { name: string; ref: SectionRef }) => {
    setIsMobileMenuOpen(false);

    if (item.ref.current) {
      const navbarHeight =
        document.querySelector(".sticky-navbar")?.clientHeight || 80;
      const yOffset = -navbarHeight - 20;
      const y =
        item.ref.current.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > (commoncss.scroll ?? 0));

      let activeSection: SectionRef | null = null;
      let minDistance = Infinity;

      Object.values(sectionRefs).forEach((section) => {
        if (section.current) {
          const rect = section.current.getBoundingClientRect();
          const sectionMiddle = rect.top + rect.height / 2;
          const viewportMiddle = window.innerHeight / 2;

          const distance = Math.abs(sectionMiddle - viewportMiddle);

          if (sectionMiddle >= 0 && distance < minDistance) {
            minDistance = distance;
            activeSection = section;
          }
        }
      });

      if (activeSection) {
        const activeMenuItem = menuItems.find(
          (item) => item && item.ref === activeSection,
        );

        if (activeMenuItem) {
          setActiveItem(activeMenuItem.name);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems, sectionRefs]);

  return (
    <>
      <Wrapper
        className={`flex justify-center items-center ${commoncss.margin}`}
      >
        <div
          className={`${
            isSticky
              ? "sticky-navbar z-20 fixed top-[90px] left-1/2 transform -translate-x-1/2 max-w-[910px] w-full"
              : "relative left-1/2 transform -translate-x-1/2 max-w-[910px]"
          } hidden lg:flex text-sm lg:text-base font-medium text-[#FFF] bg-black md:p-3 md:py-4 rounded-full justify-between`}
        >
          {menuItems.map((item, i) => (
            <button
              key={item?.name || i}
              className="cursor-pointer relative flex-grow text-center"
              onClick={() => handleMenuClick(item)}
            >
              <span
                className={`${
                  activeItem === item.name ? "font-semibold relative pb-1" : ""
                }`}
              >
                {item.name}
                {activeItem === item.name && (
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-white"></span>
                )}
              </span>
            </button>
          ))}
        </div>

        <div
          className={`${
            isSticky
              ? "fixed md:top-[4.7rem] top-[5rem] left-0 w-full bg-white shadow-lg z-30"
              : "relative"
          } w-full lg:hidden p-3`}
        >
          <button
            className="w-full text-left text-black bg-white p-3 rounded-md flex justify-between items-center border border-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {activeItem} <FaChevronDown className="ml-2" />
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg rounded-md md:-mt-1 -mt-1 z-10">
              {menuItems.map((item, i) => (
                <button
                  key={item?.name || i}
                  className="w-full text-left p-3 hover:bg-gray-200"
                  onClick={() => handleMenuClick(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </Wrapper>

      {data.map((item, i) => (
        <div
          key={i}
          ref={item.refs as React.RefObject<HTMLDivElement>}
          id={item.id}
        >
          {item.component}
        </div>
      ))}
    </>
  );
}

export default SubNavbar;
