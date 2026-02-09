"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function SaseManagedFirewallHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      title: "Enhanced Security",
      description: (
        <>
          Blocked <span className="text-[#5F89CB] font-bold">95%</span> of
          intrusions and optimized firewall rules
        </>
      ),
    },

    {
      title: "Faster Threat Response",
      description: (
        <>
          Detected and mitigated threats in under{" "}
          <span className="text-[#5F89CB] font-bold">5 minutes</span>
        </>
      ),
      align: "justify-end",
    },
    {
      title: "Compliance & Performance",
      description: (
        <>
          <span className="text-[#5F89CB] font-bold">100%</span> audit-ready
          reports with 30% faster processing
        </>
      ),
    },
  ];

  return (
    <HeroSection
      className="
         relative bg-[url('/images/SaseManagedFirewall/managed_firewall_Bg.webp')] bg-no-repeat bg-cover bg-center
          flex items-center justify-center lg:h-[710px] md:h-[710px] h-auto"
    >
      <div className="grid lg:grid-cols-[50%,50%] grid-cols-[100%]">
        <div className="flex flex-col items-center justify-center my-4 lg:my-0">
          <div className="space-y-4 text-[#FFF]">
            <h1 className="text-2xl text-center lg:text-left font-bold lg:leading-10 lg:text-[28px]">
              Fortify Your Network Perimeter with St. Fox Managed Firewall
              Services
            </h1>
            <p className="text-center lg:text-left text-base">
              Comprehensive Firewall Management to Protect Your Network Against
              Evolving Cyber Threats.
            </p>
            <div className="flex justify-center items-center sm:justify-center lg:justify-start md:items-center">
              <ReusableBtn
                type={"button"}
                name={"Schedule a Free Firewall Security Assessment"}
                className={
                  "bg-[#1A3F7E] text-[#FFF] font-medium py-2 rounded-lg mt-8 lg:mt-0"
                }
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>

        <div className="lg:space-y-12 space-y-4 m-[auto] lg:m-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className={feature.align ? `flex lg:${feature.align}` : ""}
            >
              <div
                className="
                    text-center w-[293px] rounded-[112px] border border-[rgba(255,255,255,0.15)]
                    bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)]
                    text-[#FFF] px-4 py-2 lg:px-4 lg:py-2"
              >
                <p className="text-base font-bold text-[#FFF]">
                  {feature.title}
                </p>
                <p className="lg:mt-1 text-sm text-[#D8D8D8] lg:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Assessment"}
      />
    </HeroSection>
  );
}

export default SaseManagedFirewallHero;
