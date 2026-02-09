"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const Soc2HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const features = [
    {
      title: "24/7 Monitoring and Detection",
      description: "Constant vigilance to uncover and neutralize threats.",
      align: "justify-end",
    },
    {
      title: "Autonomous SOC Analysts",
      description:
        "AI-driven Tier 1 agents that never sleep, triaging alerts and reducing noise.",
      soc: true,
    },
    {
      title: "Expert-Led Incident Response",
      description: "Rapid, hands-on mitigation to safeguard operations.",
      align: "justify-end",
    },
  ];
  const openModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <HeroSection className="flex items-center justify-center bg-[#07111A] lg:h-[675px] md:h-auto h-auto bg-no-repeat bg-cover bg-center py-5 lg:py-0 md:py-6">
      <div className="grid lg:grid-cols-[50%,50%] grid-cols-[100%] lg:space-x-8">
        <div className="flex flex-col items-center justify-center my-4 lg:my-0">
          <div className="space-y-4 text-center lg:text-left text-[#FFF]">
            <h1 className="text-xl md:text-2xl font-bold lg:leading-10 lg:text-[28px]">
              Always-On Defense with Autonomous AI Analysts
            </h1>
            <p className="text-base md:text-sm lg:leading-6 lg:text-sm">
              Proactive Threat Detection, Expert Incident Response, and
              Autonomous SOC Operations to Protect Your Business 24/7.
            </p>
            <div className="grid lg:grid-cols-12 md:grid-cols-12 items-center gap-x-4 gap-y-4 lg:gap-2 text-base lg:text-[11px] ">
              <button
                className="col-span-6 rounded-lg bg-[#1A3F7E] py-[10px]"
                onClick={() => openModal("Schedule a Free Assessment")}
              >
                Schedule a Free SOC Assessment
              </button>
              <button
                className="col-span-6 rounded-lg border-[2px] border-solid border-[#FFF] py-2 sm:px-4 sm:py-[7px] text-base lg:text-[11px] "
                onClick={() => openModal("Talk to an Expert")}
              >
                Speak to a Cybersecurity Expert
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-4 m-[auto] lg:m-0 mt-5 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center text-center  lg:space-x-8 space-x-2 ${
                feature.align ? `flex ${feature.align} ` : ""
              }`}
            >
              <div
                className="lg:w-[293px] md:w-[293px] w-[250px] rounded-[112px] border border-[rgba(255,255,255,0.15)]
          bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_100%)]
          text-[#FFF] px-4 py-2 lg:px-6 lg:py-4"
              >
                <p className="text-sm lg:text-[16px] font-bold md:leading-10 text-[#FFF] lg:text-sm">
                  {feature.title}
                </p>
                <p className="lg:mt-1 text-[11px] leading:leading-4 text-[#F2F2F2] lg:text-xs">
                  {feature.description}
                </p>
              </div>

              {feature.soc && (
                <div className="flex h-[50px] w-[50px] items-center justify-center  rounded-full bg-gradient-to-br from-[#3B73CC] to-[#1A3F7E] md:h-[80px] md:w-[80px] lg:h-[90px] lg:w-[90px]">
                  <p className="text-base font-bold text-[#fff] lg:text-3xl">
                    SOC
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={modalTitle}
      />
    </HeroSection>
  );
};
export default Soc2HeroSection;
