"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import { AISECURITY_HEROSECTION } from "@/constants/AISecurityConstant";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const AISecurityHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeroSection className="flex justify-center items-center  bg-[url('https://saintfox.azureedge.net/datav2/AISecurity2x.webp')] bg-cover bg-no-repeat lg:h-[775px] md:h-[775px] h-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-[50%,50%] lg:grid-cols-[50%,50%]  items-center text-[#ffff] lg:gap-5 md:gap-5 ">
        <div
          className="absolute top-0 left-0 lg:h-[775px] md:h-[775px] w-1/2 "
          style={{
            background:
              "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
            backdropFilter: "blur(21px)",
          }}
        ></div>
        <div className="relative ">
          <div className="flex flex-col justify-end items-start lg:text-start md:text-start text-center">
            <h1 className="lg:text-3xl font-bold md:text-[24px] text-2xl">
              Harness the Power of AI to Revolutionize Cybersecurity
            </h1>
            <p className="lg:text-[16px] md:text-[15px] text-[14px] lg:leading-[24px] mt-2">
              From proactive threat detection to securing AI systems, St. Fox
              empowers organizations with AI-driven solutions tailored to the
              evolving cybersecurity landscape.
            </p>
          </div>
          <div className="mt-4 lg:text-start md:text-start text-center">
            <ReusableBtn
              type="button"
              name="Schedule a Free Consultation"
              className="bg-[#1A3F7E] rounded py-2 text-[13px] font-medium text-white "
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <div className="flex flex-col lg:gap-8 md:gap-8 gap-5 mt-10 ">
          {AISECURITY_HEROSECTION.map((feature, index) => (
            <div
              key={index}
              className={`flex lg:items-center md:items-center text-start lg:w-[344px] md:gap-3 text-white lg:py-10 lg:px-2 w-auto md:px-5 px-5 py-3 border-opacity-10 border-gray-50 border ${
                index === 1 ? "lg:ml-0" : "lg:ml-32"
              }`}
              style={{
                background:
                  "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
                backdropFilter: "blur(21px)",
              }}
            >
              <img
                loading="lazy"
                src={feature.image}
                alt="Feature Icon"
                className="w-[62px] h-[62px] object-contain"
              />
              <div className="flex flex-col ">
                <h1 className="text-center text-[15px] font-bold text-[#5D8AD2]">
                  {feature.title}
                </h1>
                <p className="text-center text-[15px] leading-5">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Consultation"}
      />
    </HeroSection>
  );
};

export default AISecurityHeroSection;
