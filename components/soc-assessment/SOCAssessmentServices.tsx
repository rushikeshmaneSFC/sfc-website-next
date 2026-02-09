"use client";

import { useState } from "react";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import Wrapper from "@/components/atoms/Wrapper";

export default function SOCAssessmentServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper className="bg-[url('https://saintfox.azureedge.net/datav2/Servicebg.webp')] bg-no-repeat bg-cover bg-center flex items-center justify-center lg:h-[389px] md:h-[389px] h-auto py-5">
      <div className=" justify-center items-center text-center">
        <h2 className="text-2xl lg:text-4xl  font-semibold text-[#FFF] ">
          Optimize Your SOC with St. Fox Assessment Services
        </h2>
        <p className="text-base lg:text-lg mt-1 font-normal text-[#FFFFFF] ">
          Identify weaknesses, enhance efficiency, and fortify your defenses
          with expert guidance.
        </p>
        <ReusableBtn
          className="px-3 py-2 bg-black text-[#fff] font-medium rounded-md border-2 items-center justify-center gap-2 text-base mt-6"
          name="Schedule a Free SOC Assessment Consultation"
          type={"button"}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Consultation"}
      />
    </Wrapper>
  );
}
