"use client";

import ReusableBtn from "@/components/atoms/ReusableBtn";
import HeroSection from "@/components/atoms/HeroSection";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import { useState } from "react";

function Cloud_FirstComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <HeroSection className="bg-[url('https://saintfox.azureedge.net/datav2/Cloudsecurityherobg.webp')] bg-cover bg-center flex flex-col justify-center items-center lg:h-[675px] md:h-[675px] h-auto lg:py-0 md:py-0 py-10 ">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-[50%,50%] lg:grid-cols-[50%,50%] items-center ">
            <div className="flex flex-col lg:items-start md:items-start items-center lg:text-start md:text-start text-center space-y-2 lg:space-y-4 md:space-y-3">
              <h1 className="lg:text-2xl text-2xl font-bold">
                Secure Your Cloud Environment with St. Fox Cloud Security
                Posture Assessment
              </h1>
              <p className=" text-base font-[400] ">
                Identify Risks, Mitigate Vulnerabilities, and Enhance Your Cloud
                Security Posture.
              </p>
              <div className="lg:pt-0 md:pt-0 pt-5">
                <ReusableBtn
                  className="text-[#FFFFFF] px-6  py-3 rounded-lg text-base font-normal bg-[#1A3F7E]  "
                  type="button"
                  name="Talk to a Cloud Security Expert"
                  icon={undefined}
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
        <ScheduleModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title={"Talk to a Cloud Security Expert"}
        />
      </HeroSection>
    </div>
  );
}

export default Cloud_FirstComponent;
