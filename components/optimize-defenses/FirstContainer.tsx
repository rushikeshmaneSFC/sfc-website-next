"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import { HEROSECTION } from "@/constants/OptimizeDefenses";

export default function FirstContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <HeroSection className=" flex justify-center items-center lg:h-[706px] md:h-[706px] h-auto bg-[url('https://saintfox.azureedge.net/datav2/OptimiseDefenses_bg.webp')] bg-no-repeat bg-cover bg-center ">
      <div className="grid grid-cols-[100%] md:grid-cols-[70%,30%] lg:grid-cols-[70%,30%] gap-4 py-10 md:py-0 lg:py-0">
        <div className="flex flex-col justify-center items-center space-y-3 text-center lg:text-start md:text-start md:items-start">
          <p className="lg:text-[40px] md:text-3xl text-2xl font-bold lg:leading-[48px] text-[#fff]">
            Test, Strengthen, and Optimize Your Defenses with St. Fox Red,
            Purple, and Blue Teaming Services
          </p>
          <p className="text-base font-normal text-[#fff]">
            Simulate Real-World Attacks, Enhance Collaboration, and Fortify Your
            Cybersecurity Posture.
          </p>
          <ReusableBtn
            type={"button"}
            name={"Schedule a Free Teaming Assessment"}
            className={"bg-[#1A3F7E] text-[#fff] rounded-lg p-2 mt-4 text-base"}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <div className="flex flex-col justify-end items-center gap-10 mt-5 lg:mt-0 md:mt-0 ">
          {HEROSECTION.map((item, index) => (
            <div key={index} className="">
              <img
                loading="lazy"
                src={item.src}
                alt={item.alt}
                className="h-14 w-14"
              />
              <p className="text-[#fff] font-normal text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Assessment"}
      />
    </HeroSection>
  );
}
