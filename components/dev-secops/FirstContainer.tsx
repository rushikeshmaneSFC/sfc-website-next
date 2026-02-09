"use client";

import { useState } from "react";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import HeroSection from "@/components/atoms/HeroSection";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function FirstContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <HeroSection className="flex items-center justify-center text-center lg:h-[489px] h-[489px] bg-[url('/images/DevSecOps/devsecops.webp')] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col justify-center items-center gap-1.5">
        <p className="text-[#fff] text-center lg:text-[28px] lg:leading-10 text-2xl font-bold">
          Secure Your Development Lifecycle with St. Fox <br />
          Managed DevSecOps
        </p>
        <div className="self-stretch text-[#fff] text-center text-[16px] lg:leading-6">
          Integrating Security into Every Stage of Your Software Development
          Pipeline.
        </div>
      </div>

      <div>
        <ReusableBtn
          type={"button"}
          name={"Talk to a DevSecOps Expert"}
          className={
            "bg-[#173972] hover:bg-[#172e56] text-[#FFF] py-3 font-medium rounded-lg mt-6"
          }
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Demo"}
      />
    </HeroSection>
  );
}

export default FirstContainer;
