"use client";

import { useState } from "react";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import Wrapper from "@/components/atoms/Wrapper";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const IncidentResponseCybersecurity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper className=" bg-[url('/images/ISO/ISOAuditbg.webp')] bg-cover bg-no-repeat bg-center flex justify-center items-center lg:h-[339px] md:h-[339px] h-auto lg:py-0 md:py-6 py-6">
      <div className="grid grid-cols-1 gap-[25px]  ">
        <div className="flex justify-center  items-center text-center  ">
          <div className="flex flex-col lg:justify-start justify-center lg:items-center items-center lg:text-center md:text-center md:justify-center md:items-center text-center ">
            <h2 className="text-2xl lg:text-[32px] lg:leading-[50px] font-[600] ">
              Be Ready for Any Cybersecurity Incident with St. Fox
            </h2>
            <p className="text-base lg:text-[16px] mt-2 font-[400]">
              Respond faster, recover smarter, and prevent future incidents with
              expert guidance.
            </p>
            <div className="flex justify-center items-center lg:justify-center lg:items-center md:items-center">
              <ReusableBtn
                className="px-6 py-3 bg-black text-[#fff] font-medium rounded-md border-2 transition flex items-center justify-center gap-2 text-base  mt-6 "
                name="Schedule an IR Consultation"
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
};

export default IncidentResponseCybersecurity;
