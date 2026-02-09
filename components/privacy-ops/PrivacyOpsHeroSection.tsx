"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const PrivacyOpsHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeroSection className=" bg-[url('https://saintfox.azureedge.net/datav2/PrivacyopsHerosection2x.webp')] bg-cover bg-no-repeat  flex justify-center items-center lg:h-[648px] h-[648px]">
      <div>
        <div className="flex flex-col text-[#FFF] items-center justify-center text-center lg:space-y-4 md:space-y-4 space-y-3">
          <h1 className="lg:text-[28px] text-2xl font-bold lg:leading-[40px]">
            Simplify Data Privacy Compliance with St. Fox Privacy Ops Services
          </h1>
          <p className="text-base lg:px-28">
            Streamline Privacy Operations to Protect Data, Build Trust, and Meet
            Global Regulations like GDPR and DPDPA.
          </p>
          <div>
            <ReusableBtn
              type={"button"}
              name={"Talk to a Privacy Expert"}
              className={
                "bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E]  text-[#FFF] font-medium py-2  rounded-lg mt-8 lg:mt-0"
              }
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Talk to a Privacy Expert"}
      />
    </HeroSection>
  );
};

export default PrivacyOpsHeroSection;
