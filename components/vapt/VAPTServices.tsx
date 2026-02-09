"use client";

import { useState } from "react";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import Wrapper from "@/components/atoms/Wrapper";

function VAPTServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper
      className="bg-[url('/images/ISO/ISOAuditbg.webp')] bg-no-repeat bg-cover bg-center
    lg:h-[339px] flex items-center justify-center md:py-10 py-5 px-4 lg:py-16"
    >
      <div className="flex flex-col justify-center items-center text-center lg:gap-0 md:gap-2 gap-3">
        <h2 className="text-[#1c1c1c] text-xl lg:text-[28px] font-semibold  lg:leading-[56px] ">
          Secure Your Systems with St. Fox VAPT Services
        </h2>
        <p className="text-[#1c1c1c] text-base lg:text-lg ">
          Identify vulnerabilities and simulate attacks to stay ahead of cyber
          threats.
        </p>
        <ReusableBtn
          className="py-2 px-5 h-10 rounded-lg bg-[#1f1f1f] text-[#fff] text-base font-medium capitalize mt-3"
          type="button"
          name="Schedule now"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule Now"}
      />
    </Wrapper>
  );
}

export default VAPTServices;
