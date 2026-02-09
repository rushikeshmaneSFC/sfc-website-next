// @ts-nocheck
"use client";

import ReusableBtn from "@/components/atoms/ReusableBtn";
import { useState } from "react";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function LandingFearlessly() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  return (
    <div className="bg-cover bg-center bg-no-repeat h-auto lg:h-[329px] flex justify-center items-center lg:py-0 md:py-0 py-8">
      <div className=" justify-center items-center text-center">
        <h2 className="text-xl md:text-3xl lg:text-[50px] lg:leading-[56px] font-semibold text-[#FFF]">
          Ready to Innovate Fearlessly?
        </h2>
        <p className="text-base lg:text-lg md:text-lg mt-2 font-normal text-[#FFFFFF]">
          Partner with St. Fox to secure your digital transformation.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center gap-2 lg:gap-6 ">
          <ReusableBtn
            type="button"
            className="rounded-md border-2 border-white text-[#fff] text-[13px] px-7 py-2 mt-7 lg:mt-6 lg:w-auto w-[280px]"
            name="Contact Us"
            onClick={() => {
              setModalTitle("Contact Us");
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
}

export default LandingFearlessly;
