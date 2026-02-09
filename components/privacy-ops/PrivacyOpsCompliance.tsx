"use client";

import { useState } from "react";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import Wrapper from "@/components/atoms/Wrapper";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const PrivacyOpsCompliance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper className="bg-[url('/images/PrivacyOps/Privacycompliancebg.webp')] bg-no-repeat bg-cover bg-center flex justify-center items-center lg:py-20 py-12">
      <div className="flex flex-col gap-y-10">
        <div className="space-y-3">
          <h1 className="text-[#fff] text-center lg:text-[28px] text-xl lg:leading-6 font-bold">
            Streamline Data Privacy Compliance with St. Fox
          </h1>
          <p className="text-[#fff] text-center lg:px-20 lg:text-xl text-base font-normal">
            Protect sensitive data, simplify compliance, and build trust with
            expert Privacy Ops solutions.
          </p>
        </div>
        <div className="text-center">
          <ReusableBtn
            type={"button"}
            name={"Schedule a Free Privacy Ops Consultation"}
            className={
              "bg-[#1A3F7E] text-[#FFF] font-semibold py-2 rounded-lg "
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

export default PrivacyOpsCompliance;
