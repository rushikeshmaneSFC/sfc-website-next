"use client";

import { useState } from "react";
import Cloudshape from "@/components/atoms/Cloudshape";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const MDRHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeroSection
      className={`bg-[url('/images/MDR/MDRHeroBackground.webp')] bg-no-repeat bg-cover lg:h-[706px] md:-[706px] h-auto flex items-center justify-center overflow-hidden lg:py-10 md:py-20 py-20`}
    >
      <div className="grid grid-cols-12 gap-y-14 rounded-md lg:px-10  ">
        <div className="col-span-12 ">
          <div className="flex flex-col items-center text-center justify-center gap-y-3 text-[#fff]">
            <h1 className="lg:text-[28px] md:text-[28px] text-2xl font-bold lg:leading-10 ">
              Proactive Cybersecurity with St. Fox Managed Detection and
              Response
            </h1>
            <p className="text-base  lg:text-center ">
              Real-time Threat Detection, Rapid Response, and Expert Mitigation
              for Unmatched Protection.
            </p>
            <div className="gap-x-4 gap-y-4 mt-3 ">
              <ReusableBtn
                type={"button"}
                name={"Schedule a Free MDR Assessment"}
                className={
                  "bg-[#1A3F7E] text-base font-medium py-3 px-5 rounded-lg"
                }
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>

        <div className="col-span-12">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-12 lg:px-10 base:px-[85px] xl:px-36 lg:space-y-0 space-y-10  md:relative ">
              <div className="lg:col-span-4 col-span-12">
                <Cloudshape
                  title="Monitor"
                  icon="/images/MDR/MonitorIcon.png"
                  hoverText=""
                  mdr={true}
                />
              </div>
              <div className="lg:col-span-4 col-span-12">
                <div className="lg:absolute lg:top-24">
                  <Cloudshape
                    title="Detect"
                    icon="/images/MDR/DetectIcon.png"
                    hoverText=""
                    mdr={true}
                  />
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12">
                <div className="">
                  <Cloudshape
                    title="Respond"
                    icon="/images/MDR/RespondIcon.png"
                    hoverText=""
                    mdr={true}
                  />
                </div>
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

export default MDRHeroSection;
