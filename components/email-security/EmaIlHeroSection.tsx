"use client";

import { useState } from "react";
import HeroCards from "./HeroCards";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const EmaIlHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const arr = [
    {
      id: 1,
      percentage: "98%",
      text: " Phishing Detection Accuracy",
    },
    {
      id: 2,
      percentage: "99%",
      text: "Malware Protection Success",
    },
    {
      id: 3,
      percentage: "100%",
      text: "Email Continuity",
    },
  ];

  return (
    <HeroSection
      className={`bg-[url('https://saintfox.azureedge.net/datav2/EmailSecurityHerobg.png')] bg-no-repeat w-full flex justify-center items-center bg-cover h-auto py-5 overflow-hidden`}
    >
      <div className="grid grid-cols-12 gap-y-7 rounded-md justify-center items-center lg:text-start text-center">
        <div className="col-span-12">
          <div className="grid grid-cols-12 lg:space-y-10 gap-x-5 ">
            <div className="col-span-12 lg:col-span-6 space-y-5 lg:py-16 py-5">
              <p className="lg:text-4xl text-xl text-[#fff] font-bold ">
                Protect Your Business from Email-Based Threats with St. Fox
                Managed Email Security
              </p>
              <div>
                <ReusableBtn
                  type={"button"}
                  name={"Schedule a Free Email Security Assessment"}
                  className={
                    "bg-[#1A3F7E]  text-[#FFF] font-medium py-2 rounded-lg  lg:mt-0"
                  }
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 flex justify-center md:items-center ">
              <img
                loading="lazy"
                alt="Email security"
                src="/images/EmailSecurity/EmailSecurity.webp"
                className="lg:w-auto lg:h-auto  h-[100px]"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className="grid grid-cols-12 lg:space-x-4">
            <div className="lg:col-span-6 col-span-12">
              <p className="text-[#fff] lg:text-lg text-base">
                Comprehensive Email Security to Detect, Prevent, and Neutralize
                Phishing, Malware and Ransomware Attacks.
              </p>
            </div>
            <div className="lg:col-span-6 col-span-12 lg:pt-0 pt-5 ">
              <div
                className="flex flex-col justify-center lg:flex-row gap-x-4 gap-y-4
              lg:h-auto md:h-auto h-80 md:w-auto lg:w-auto "
              >
                {arr.map((item,index) => (
                  <HeroCards
                    key={index}
                    id={item.id.toString()}
                    percentage={item.percentage}
                    text={item.text}
                    className="lg:mt-0 lg:py-0 py-5 text-center"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Assessment"}
      />
    </HeroSection>
  );
};

export default EmaIlHeroSection;
