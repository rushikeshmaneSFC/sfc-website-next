"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function VcisoHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <HeroSection className=" bg-[url('https://saintfox.azureedge.net/datav2/vCISO_bg.webp')] bg-no-repeat bg-cover bg-center lg:h-[619px] md:h-[619px] h-[519px]  flex flex-col justify-center items-center text-[#FFF] px-4 relative text-left ">
      <div className="-mt-24 ">
        <h1 className="text-2xl lg:text-[40px] font-bold mb-5 lg:leading-[56px]">
          Expert Cybersecurity <br className="hidden sm:block" /> Leadership
          with St. Fox <br className="hidden md:block" />
          vCISO Services
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none ">
          <ReusableBtn
            type={"button"}
            name={"Schedule a Free vCISO Consultation"}
            onClick={() => openModal("Schedule a Free Consultation")}
            className={
              "font-medium bg-[#1A3F7E] text-[#FFF] px-6 md:px-10 py-3 rounded-lg w-full sm:w-auto"
            }
          />
          <ReusableBtn
            type={"button"}
            name={"Talk to a vCISO Expert"}
            className={
              "border-2 border-white text-[#FFF] px-6 md:px-8 py-2.5 rounded-lg w-full sm:w-auto"
            }
            onClick={() => openModal("Talk to a vCISO Expert")}
          />
        </div>

        <div className="absolute  sm:right-8 md:right-16 lg:bottom-10 md:bottom-20 max-w-xs sm:max-w-md text-left lg:mt-0 md:mt-0 mt-6 sm:mt-0">
          <p className="text-base sm:text-sm md:text-base ">
            Strategic Guidance and Oversight to Strengthen Your Cybersecurity
            Posture Without the Need for a Full-Time CISO
          </p>
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={modalTitle}
      />
    </HeroSection>
  );
}

export default VcisoHeroSection;
