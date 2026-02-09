"use client";

import { useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function VcisoLeadership() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper className="bg-[url('/images/ISO/ISOAuditbg.webp')] bg-cover bg-no-repeat bg-center flex justify-center items-center lg:h-[339px] lg:mt-8 lg:p-0 p-7">
      <div className="grid grid-cols-1 gap-[25px]  ">
        <div className="flex justify-center  items-center lg:text-center md:text-start text-center  ">
          <div className=" ">
            <h2 className="text-2xl lg:text-[32px] lg:leading-[56px] font-[600] ">
              Expert Cybersecurity Leadership with St. Fox vCISO
            </h2>
            <p className="text-base lg:text-[16px] mt-2 font-[400]">
              Secure your organization with flexible, on-demand cybersecurity
              leadership.
            </p>
            <div className="flex justify-center items-center lg:justify-center lg:items-center md:items-center ">
              <ReusableBtn
                className="px-6 py-3 bg-black text-[#fff] font-medium rounded-md border-2 transition flex items-center justify-center gap-2 text-base  mt-6 "
                name="Schedule a Free vCISO Consultation"
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
        title={"Schedule a Free Consultation"}
      />
    </Wrapper>
  );
}

export default VcisoLeadership;
