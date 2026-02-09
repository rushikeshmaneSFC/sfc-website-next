"use client";

import { useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const AISecurityLeverage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper className="flex justify-center items-center py-10">
      <div className="flex flex-col gap-y-5">
        <div className="space-y-3 justify-center items-center text-center">
          <h1 className="lg:text-[40px] text-xl lg:leading-[48px] font-semibold">
            Secure Your AI Systems and Leverage Their Full Potential
          </h1>
          <p className=" lg:px-20  text-base  lg:text-lg mt-2 ">
            Partner with St. Fox to revolutionize your cybersecurity with
            AI-driven solutions.
          </p>
        </div>

        <div className="text-center">
          <ReusableBtn
            className="px-3 py-2 text-[#000] font-medium rounded-md border-2 border-[#E5E7EB] items-center justify-center text-base"
            name="Talk to an AI Security Expert"
            type={"button"}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <ScheduleModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title={"Talk to an AI Security Expert"}
        />
      </div>
    </Wrapper>
  );
};

export default AISecurityLeverage;
