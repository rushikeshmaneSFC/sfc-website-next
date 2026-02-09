"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const DLPHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeroSection className=" bg-[url('https://saintfox.azureedge.net/datav2/DLPHerosection2x.webp')] bg-cover bg-no-repeat flex justify-center items-center lg:h-[648px] h-[648px]">
      <div>
        <div className="flex flex-col text-[#1F1F1F] items-center justify-center text-center lg:space-y-4 md:space-y-4 space-y-4 ">
          <h1 className="lg:text-[28px] lg:leading-[40px] text-2xl font-bold ">
            Prevent Data Breaches with St. Fox Data Loss Prevention Services
          </h1>
          <p className="text-base font-normal ">
            Protect Sensitive Data, Prevent Unauthorized Access, and Ensure
            Compliance with GDPR, DPDPA and Other Regulations.
          </p>
          <div>
            <ReusableBtn
              type={"button"}
              name={"Talk to a Data Protection Expert"}
              className={
                "bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E]  text-[#FFF] py-3 font-medium rounded-lg mt-6 lg:mt-0"
              }
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Talk to a Data Protection Expert"}
      />
    </HeroSection>
  );
};

export default DLPHeroSection;
