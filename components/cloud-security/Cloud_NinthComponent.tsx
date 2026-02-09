"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import { useState } from "react";

function Cloud_NinthComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper className=" bg-[url('/images/ISO/ISOAuditbg.webp')] bg-cover bg-no-repeat bg-center flex justify-center items-center lg:h-[339px] md:h-[330px] h-auto mt-8 lg:py-0 md:py-6 py-6">
      <div className="grid grid-cols-1  gap-[25px]  ">
        <div className="flex justify-center  items-center lg:text-center md:text-center text-center  ">
          <div className=" ">
            <h2 className="text-2xl lg:text-[32px] lg:leading-[56px] font-semibold ">
              Secure Your Cloud with CSPA
            </h2>
            <p className="text-base lg:text-lg mt-2 font-normal">
              Identify vulnerabilities, strengthen controls, and ensure
              compliance in your cloud environment.
            </p>
            <div className="flex justify-center items-center lg:justify-center lg:items-center md:items-center ">
              <ReusableBtn
                className="px-6 py-3 bg-black text-[#fff] font-medium rounded-md border-2 transition flex items-center justify-center gap-2 text-base  mt-6 "
                name="Schedule a Free Assessment"
                type="button"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Assessment"}
      />
    </Wrapper>
  );
}

export default Cloud_NinthComponent;
