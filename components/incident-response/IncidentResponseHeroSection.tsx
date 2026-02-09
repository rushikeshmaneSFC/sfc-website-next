"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import { textOptions } from "@/constants/IncidentResponseConstant";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const IncidentResponseHeroSection = () => {
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(textOptions[index]);
  }, [index]);

  return (
    <HeroSection className=" flex justify-center items-center lg:h-[804px] md:h-[804px]  bg-[url('https://saintfox.azureedge.net/datav2/IncidentresponseHerosectionbg.webp')] h-[720px] bg-cover bg-no-repeat ">
      <div className="min-h-screen flex flex-col items-center justify-center lg:px-6 lg:py-8 py-12 md:py-5 text-[#fff] ">
        <div className="flex gap-3 mb-4">
          <div className="flex justify-center items-center px-4 py-2 bg-gray-700 text-white rounded-md text-sm">
            Respond
          </div>
          <div className="flex justify-center items-center px-4 py-2 bg-gray-700 text-white rounded-md text-sm">
            Recover
          </div>
          <div className="flex justify-center items-center px-4 py-2 bg-gray-700 text-white rounded-md text-sm">
            Prevent
          </div>
        </div>

        <h1 className="text-white text-2xl lg:text-4xl lg:leading-[48px] font-bold text-center max-w-3xl">
          Expert Cybersecurity Support to Mitigate Threats, Minimize Downtime
          and Protect Your Business
        </h1>

        <ReusableBtn
          type={"button"}
          name={"Talk to an Incident Response Expert"}
          className={
            "mt-6 px-6 py-3 bg-[#1A3F7E] text-white rounded-lg text-base"
          }
          onClick={() => setIsModalOpen(true)}
        />

        <p className=" mt-8 text-sm text-center lg:text-start md:text-start ">
          Is Your Business Prepared for a Cybersecurity Incident?
        </p>

        <div className="mt-4 text-white p-6 max-w-lg shadow-lg border bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px] border-[#1A3F7E] lg:w-[521px] lg:h-[220px] lg:py-14">
          <div className="flex items-center space-x-2 mb-2">
            <img
              loading="lazy"
              src="/images/ManagedIdentity/Solutionimg.webp"
              className="w-5 h-5"
              alt="icon"
            />
            <h3 className="text-blue-400 font-semibold">Problem</h3>
          </div>
          <p className="lg:text-xl md:text-lg text-base">{currentText}</p>
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Talk to an Incident Response Expert"}
      />
    </HeroSection>
  );
};

export default IncidentResponseHeroSection;
