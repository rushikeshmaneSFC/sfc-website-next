"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import { useState } from "react";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function SOC2Secure() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Wrapper className="bg-[url('/images/SOC2/secure.png')] h-auto lg:h-[339px] md:h-[339px] bg-cover bg-center flex justify-center items-center lg:py-0 md:py-0 py-5">
        <div className=" justify-center items-center text-center ">
          <h2 className="text-2xl md:text-3xl lg:text-[33px] lg:leading-[56px] font-semibold text-[#FFF] ">
            Secure Your Business with St. Fox Managed SOC
          </h2>
          <p className="text-base lg:text-lg md:text-lg mt-2 font-normal text-[#FFFFFF] ">
            Proactively protect your digital landscape with autonomous AI-driven
            SOC solutions.
          </p>
          <ReusableBtn
            className="px-6 py-3 text-[#fff] font-medium rounded-lg border-2 items-center justify-center gap-2 text-base mt-6"
            name="Schedule a Free SOC Assessment"
            type="button"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <ScheduleModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title={"Schedule a Free Assessment"}
        />
      </Wrapper>
    </div>
  );
}

export default SOC2Secure;
