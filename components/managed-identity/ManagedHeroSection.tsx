"use client";

import { HERO_CARDS } from "@/constants/ManagedIdentityConstant";
import HeroSection from "@/components/atoms/HeroSection";
import { useState } from "react";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const ManagedIdentityHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <HeroSection
        className={`bg-[url('/images/ManagedIdentity/ManageIdentity.webp')] lg:h-[706px] md:h-auto h-auto flex items-center justify-center overflow-hidden lg:py-0 md:py-8 px-6 lg:mt-0 mt-5 `}
      >
        <div className="grid grid-cols-12 border-4 border-white border-opacity-50 rounded-md   lg:px-10 px-4 md:px-6 py-10">
          <div className="col-span-12 lg:py-20">
            <div className="flex flex-col items-center justify-center text-center gap-y-3 text-[#fff]">
              <h1 className="lg:text-[40px] md:text-3xl  text-2xl font-bold lg:leading-10 ">
                Empower Your Workforce, Securely
              </h1>
              <p className="text-base text-center  ">
                With St. Fox Managed Identity Solutions, protect access to your
                critical systems and data while enabling seamless user
                experiences.
              </p>
              <div className="gap-x-4 gap-y-4 mt-3 justify-center items-center text-center">
                <button
                  className="border-2 border-[#FFF] text-base font-medium lg:col-span-6 col-span-12 py-2 px-5 rounded-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:mt-10 lg:mt-0 mt-10">
            <div className="grid grid-cols-12 lg:space-x-10 gap-y-10  lg:px-10">
              {HERO_CARDS.map((item) => (
                <div
                  key={item.id}
                  className="lg:col-span-4 col-span-12  space-y-4 flex flex-col justify-center items-center text-center md:text-start lg:text-start lg:items-start"
                >
                  {item.icon}
                  <p className="text-[#fff] text-base">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HeroSection>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Request a Demo"}
      />
    </div>
  );
};

export default ManagedIdentityHeroSection;
