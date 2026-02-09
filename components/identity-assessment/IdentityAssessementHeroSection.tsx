"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import { HEROSEC_MAP } from "@/constants/IdentityAssessementConstant";

const IdentityAssessementHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeroSection className=" flex justify-center items-center  bg-[url('https://saintfox.azureedge.net/datav2/IdentityassessmentHerosection.webp')] bg-cover bg-center lg:h-[775px] md:h-[775px] h-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-[50%,50%] lg:grid-cols-[50%,50%] lg:gap-20 md:gap-12 gap-6 items-center text-[#ffff]">
        <div
          className="absolute top-0 left-0 lg:h-[775px] md:h-[775px]  w-1/2 "
          style={{
            background:
              "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
            backdropFilter: "blur(21px)",
          }}
        ></div>
        <div className="relative lg:text-start md:text-start text-center">
          <div>
            <h1 className="lg:text-4xl  md:text-2xl text-2xl font-bold">
              Secure Access, Prevent Breaches with St. Fox Identity Assessment
              Services
            </h1>
            <p className="text-base font-normal  mt-2">
              Evaluate and Enhance Your Identity and Access Management (IAM) to
              Protect Critical Assets.
            </p>
          </div>
          <div className="flex md:justify-start lg:justify-start justify-center mt-4">
            <ReusableBtn
              type="button"
              name="Talk to an IAM Expert"
              className="bg-[#1A3F7E] rounded-lg py-2 px-4 text-base "
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {HEROSEC_MAP.map((feature, index) => (
            <p
              key={index}
              className="bg-gray-800 text-base font-medium py-3 px-5 rounded-full text-center border-2 border-white/10  "
              style={{
                background:
                  "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
                strokeWidth: "1px",
                stroke: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(21px)",
              }}
            >
              {feature}
            </p>
          ))}
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Talk to an IAM Expert"}
      />
    </HeroSection>
  );
};

export default IdentityAssessementHeroSection;
