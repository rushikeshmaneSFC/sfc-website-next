"use client";

import { useState } from "react";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import HeroSection from "@/components/atoms/HeroSection";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const DSPMHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeroSection className=" bg-[url('https://saintfox.azureedge.net/datav2/DSPMHerosection.webp')] bg-cover bg-no-repeat lg:h-[650px] h-[650px] flex justify-center items-center ">
      <div className="flex justify-center items-center text-center ">
        <div className="w-[701px]">
          <div className="flex flex-col text-[#fff] text-center lg:space-y-4 md:space-y-4 space-y-4">
            <p className="text-2xl lg:text-[28px] font-bold lg:leading-[40px]">
              Ensure Data Security Across Your Organization with St. Fox DSPM
              Services.
            </p>
            <p className="text-base font-normal ">
              Discover, Protect, and Manage Data Security Posture to Prevent
              Breaches and Ensure Compliance with GDPR, DPDPA, and Other
              Regulations.
            </p>
            <div>
              <ReusableBtn
                type={"button"}
                name={"Talk to a Data Security Expert"}
                className={
                  "bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E] text-[#FFF] py-2 rounded-md mt-2 sm:text-[13px] text-base"
                }
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Talk to a Data Security Expert"}
      />
    </HeroSection>
  );
};

export default DSPMHeroSection;
