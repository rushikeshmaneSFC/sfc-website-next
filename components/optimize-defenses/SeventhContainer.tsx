"use client";

import { useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

export default function SeventhContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper className="  bg-[url('/images/ISO/ISOAuditbg.webp')] bg-cover bg-no-repeat bg-center flex justify-center items-center lg:h-[339px] md:h-[339px] h-auto lg:py-0 md:py-0 py-4">
      <div className="grid grid-cols-1 gap-[25px]  ">
        <div className="flex justify-center  items-center  text-center lg:text-center md:text-center ">
          <div className=" ">
            <h2 className="lg:text-4xl lg:leading-[50px] md:text-3xl text-2xl font-semibold">
              Strengthen Your Cybersecurity with St. Fox Teaming Services
            </h2>
            <p className="text-base md:text-lg lg:text-lg mt-2 font-normal">
              Simulate, Collaborate, and Strengthen Your Defenses Against
              Advanced Threats.
            </p>
            <div className="flex justify-center items-center lg:justify-center md:items-center">
              <ReusableBtn
                className="px-6 py-3 bg-black text-[#fff] font-medium rounded-lg  border-2 transition flex items-center justify-center  gap-2 text-base  mt-6 "
                name="Talk to a Teaming Expert"
                type="button"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
        <ScheduleModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title={"Talk to a Teaming Expert"}
        />
      </div>
    </Wrapper>
  );
}
