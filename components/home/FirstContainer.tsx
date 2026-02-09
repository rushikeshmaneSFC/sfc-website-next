"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import VigileCybersecurityResilience from "./VigileCybersecurityResilience";
import ScheduleModal from "@/components/atoms/ScheduleModal";

export default function FirstContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <HeroSection className="bg-[url('https://saintfox.azureedge.net/datav2/Vigileframework2x.webp')] bg-no-repeat bg-cover bg-center md:h-[600px] lg:h-[600px] py-5 flex items-center justify-center lg:pt-80 md:pt-80 ">
      <div className="text-[#fff]">
        <div>
          <div className="mb-6 lg:justify-center lg:text-center md:text-center items-center text-center">
            <p className="font-bold text-[23px] lg:text-[28px] lg:leading-10">
              Innovate Fearlessly, Protect Relentlessly with the
              <br /> <span className="text-[#3B73CC]"> VIGILE Framework</span>
            </p>
            <p className="lg:text-base text-sm mt-3">
              Transform your cybersecurity strategy with St. Fox's comprehensive
              VIGILE Framework - designed for enterprises to combat evolving
              threats with confidence.
            </p>
          </div>
          <div className="flex gap-2 flex-col md:flex-row justify-center lg:justify-center items-center">
            <ReusableBtn
              type="button"
              className="border border-[#FFFFFF] text-white text-[13px] px-4 py-2 rounded-md"
              name="Schedule a Free Consultation"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="hidden sm:block sm:visible relative">
          <div className="grid justify-center items-center py-5">
            <VigileCybersecurityResilience />
          </div>
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
