"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import { VDPOData } from "@/constants/VDPOConstant";

const VDPOHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeroSection className=" bg-[#0B0C0EBF] bg-[url('https://saintfox.azureedge.net/datav2/VDPOHerosection.webp')] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center lg:h-[619px] md:h-[619px] h-[530px]">
      <div className="flex flex-col text-center items-center justify-center text-[#ffff]">
        <h1 className="lg:text-[40px] md:text-4xl lg:px-6 md:px-6 text-2xl lg:leading-[56px] font-bold lg:pt-28 md:pt-44 pt-[500px]">
          Ensure Data Privacy Compliance with St. Fox vDPO Services
        </h1>

        <div className="pt-4">
          <ReusableBtn
            className="text-white px-6 py-3 rounded-md text-basefont-[500] bg-[#1A3F7E]"
            type="button"
            name="Talk to a Data Protection Expert"
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-3 lg:gap-3 md:gap-5 gap-4 text-center mt-6">
          {VDPOData.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#000] p-6 rounded-lg shadow-md flex flex-col items-center relative md:top-20 lg:top-28 top-14 "
            >
              <div className="flex justify-center items-center">
                <img
                  loading="lazy"
                  src={item.icon}
                  alt="Icon"
                  className="w-10 h-10 mb-4"
                />
              </div>
              <h3 className="text-base lg:text-lg md:text-lg font-bold">
                {item.title}
              </h3>
              <p className="text-[15px] lg:text-base md:text-base  font-medium pt-2">
                {item.description}
              </p>
            </div>
          ))}
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

export default VDPOHeroSection;
