"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function FirstComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeroSection className="bg-[url('https://saintfox.azureedge.net/datav2/IsoHerosection.webp')] h-auto md:h-[675px] lg:h-[675px] bg-cover flex flex-col justify-center items-center py-10 lg:py-0 md:py-0  ">
      <div>
        <div className="justify-center items-center text-center">
          <div className=" lg:space-y-5 space-y-3">
            <h1 className="lg:text-[28px] lg:px-44 text-xl lg:leading-[40px] font-bold text-[#FFF] ">
              Achieve ISO Certification with our ISO Audit Services
            </h1>
            <p className="lg:text-lg text-base  font-normal text-[#FFF]">
              Streamline Compliance, Strengthen Security, and Build Trust with
              ISO 27001 Certification.
            </p>
            <ReusableBtn
              className="text-[#FFFFFF] px-6 mt-3 lg:mt-0 md:mt-0 py-3 rounded-md text-base font-[500] bg-gradient-to-tr from-[#3B73CC] to-[#1A3F7E]  "
              type="button"
              name="Talk to an ISO Expert"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Talk to an ISO Expert"}
      />
    </HeroSection>
  );
}

export default FirstComponent;
