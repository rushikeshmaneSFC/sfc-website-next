"use client";

import { useState } from "react";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import Wrapper from "@/components/atoms/Wrapper";

const DSPMCompliance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/DSPMStrengthen.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center lg:py-20 py-10">
      <div className="flex flex-col gap-y-10">
        <div className="lg:text-left text-center space-y-3">
          <h1 className="text-[#fff] lg:text-[28px] text-xl lg:leading-7 font-bold">
            Strengthen Your Data Security Posture with St. Fox
          </h1>
          <p className="text-[#fff] lg:pr-56 lg:text-xl text-base lg:leading-6">
            Discover risks, protect sensitive data, and ensure compliance with
            expert guidance.
          </p>
        </div>

        <div className="lg:text-left text-center">
          <ReusableBtn
            type={"button"}
            name={"Schedule a Free DSPM Consultation"}
            className={
              "bg-[#1A3F7E] text-[#FFF] py-2 px-4 font-semibold rounded-lg lg:mt-0"
            }
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Consultation"}
      />
    </Wrapper>
  );
};

export default DSPMCompliance;
