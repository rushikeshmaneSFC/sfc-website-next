"use client";

import ReusableBtn from "@/components/atoms/ReusableBtn";
import HeroSection from "@/components/atoms/HeroSection";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import { useState } from "react";

function VAPTConsultation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <HeroSection
      className="bg-[url('https://saintfox.azureedge.net/datav2/VAPTHerosection2x.webp')] bg-[#071119] bg-no-repeat bg-cover bg-center
        h-[425px] lg:h-[499px] items-center justify-center flex"
    >
      <div className="text-center justify-center items-center">
        <h1 className="text-xl lg:text-[28px] mb-2 text-[#FFFFFF] font-bold  lg:leading-[40px]">
          Uncover and Fix Vulnerabilities with St. Fox VAPT Services
        </h1>
        <p className="mb-4 text-base lg:text-base font-normal text-[#FFFFFF]  lg:leading-[24px]">
          Proactively Identify Security Gaps and Simulate Real-World Attacks to
          Fortify <br className="hidden lg:block" /> Your Defenses.
        </p>
        <div className="flex justify-center items-center text-center">
          <ReusableBtn
            className="
           flex  justify-centerlg:mt-[12px] mt-[16px]
            text-base
            py-2  gap-2 bg-gradient-to-tr from-[#3B73CC] to-[#1A3F7E]
            rounded-[8px] justify-center items-center text-[#FFFFFF]
            hover:bg-gradient-to-tr hover:from-[#1A3F7E] hover:to-[#3B73CC]"
            name={"Schedule a Free VAPT Consultation"}
            type="button"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Consultation"}
      />
    </HeroSection>
  );
}

export default VAPTConsultation;
