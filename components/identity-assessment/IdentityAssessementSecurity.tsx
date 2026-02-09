"use client";

import { useState } from "react";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import Wrapper from "@/components/atoms/Wrapper";

const IdentityAssessementSecurity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper className=" bg-[url('https://saintfox.azureedge.net/datav2/Securitybg.webp')] bg-cover bg-center lg:h-[339px] flex justify-center items-center h-auto py-5 lg:py-0 md:py-4 ">
      <div className=" justify-center items-center text-center ">
        <h2 className="text-2xl lg:text-4xl  font-semibold text-[#FFF] ">
          Strengthen Your Identity Security with St. Fox
        </h2>
        <p className="text-base lg:text-[18px] mt-2 font-normal text-[#FFFFFF] ">
          Secure your access controls, mitigate risks, and ensure compliance
          with expert guidance.
        </p>
        <ReusableBtn
          className="px-3 py-2 bg-black text-[#fff] font-medium rounded-md border-2 items-center justify-center gap-2 text-base mt-6"
          name="Schedule a Free Identity Assessment"
          type={"button"}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Assessment"}
      />
    </Wrapper>
  );
};

export default IdentityAssessementSecurity;
