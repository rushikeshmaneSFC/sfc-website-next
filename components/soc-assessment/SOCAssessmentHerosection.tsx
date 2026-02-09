"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function SOCAssessmentHerosection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeroSection className=" bg-[url('https://saintfox.azureedge.net/datav2/SOC_bg.webp')] bg-no-repeat bg-cover bg-center h-auto md:h-[680px] lg:h-[680px] flex flex-col justify-center items-center py-7 lg:py-0 md:py-0 ">
      <div>
        <div className="justify-center items-center text-center">
          <div className=" space-y-5 ">
            <h1 className="lg:text-3xl md:text-[28px] text-xl  font-bold text-[#FFF] ">
              Optimize Your Security Operations with St. Fox SOC Assessment
              Services
            </h1>
            <p className="text-base font-normal text-[#FFF]">
              Uncover Gaps, Enhance Efficiency, and Fortify Your Security
              Operations Center for Peak Performance.
            </p>
            <ReusableBtn
              className="text-[#FFFFFF] px-6 py-3 rounded-md text-base font-medium bg-gradient-to-tr from-[#3B73CC] to-[#1A3F7E]  "
              type="button"
              name="Talk to a SOC Optimization Expert"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Talk to a SOC Optimization Expert"}
      />
    </HeroSection>
  );
}

export default SOCAssessmentHerosection;
