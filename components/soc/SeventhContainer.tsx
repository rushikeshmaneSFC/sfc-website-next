"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import { useState } from "react";

function SeventhContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Wrapper className="bg-[url('/images/SOC/Compliancebg.webp')] h-auto lg:h-[339px] md:h-[239px] flex justify-center items-center bg-cover bg-center py-10 md:py-0 px-4 lg:py-16">
        <div className=" justify-center items-center text-center ">
          <h2 className="text-[20px] lg:text-[36px] lg:leading-[56px] font-semibold text-[#FFF] ">
            Achieve SOC 2 Compliance with Confidence
          </h2>
          <p className="text-base lg:text-[18px] mt-2 font-normal text-[#FFFFFF]">
            Let St. Fox guide your organization through the SOC 2 compliance
            process.
          </p>
          <ReusableBtn
            className="px-6 py-3  text-[#fff] font-medium rounded-md border-2 items-center justify-center gap-2 text-base  mt-6  "
            name="Schedule a Free SOC 2 Readiness Assessment"
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

export default SeventhContainer;
