"use client";

import { useState } from "react";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const WhatMatters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  return (
    <div className="bg-[url('https://saintfox.azureedge.net/datav2/Whitebg.webp')] bg-cover bg-center bg-no-repeat h-auto lg:h-[339px] md:[339px] flex justify-center items-center lg:py-0 md:py-10 py-8 lg:px-0 md:px-0 px-6">
      <div className=" justify-center items-center text-center">
        <h2 className="text-xl md:text-3xl lg:text-[50px] lg:leading-[56px] font-semibold text-[#000]">
          Let&apos;s Secure What Matters Most
        </h2>
        <p className="text-base lg:text-lg md:text-lg mt-2 font-normal text-[#000] lg:px-20 2xl:px-80">
          Whether you&apos;re scaling to the cloud, navigating compliance, or
          launching AI-powered services—we&apos;re here to help. Connect with us
          today and discover how we can transform your security posture.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center gap-2 lg:gap-6 ">
          <ReusableBtn
            type="button"
            className="rounded-md bg-[#000] text-[#fff] text-[13px] px-7 py-2 mt-7 lg:mt-6 lg:w-auto w-[280px]"
            name="Schedule a Free Assessment"
            onClick={() => {
              setModalTitle("Schedule a Free Assessment");
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={modalTitle}
      />
    </div>
  );
};

export default WhatMatters;
