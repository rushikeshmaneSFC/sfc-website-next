"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import { useState } from "react";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function EighthComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper className=" bg-[url('/images/ISO/ISOauditbg.webp')] bg-cover bg-no-repeat bg-center flex justify-center items-center lg:h-[339px]  lg:py-10 md:py-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-[60%,40%]  gap-[25px]  ">
        <div className="flex justify-center  items-center  ">
          <div className=" lg:text-start md:text-start text-center">
            <h2 className="text-xl lg:text-[32px] lg:leading-[56px] font-semibold ">
              Achieve ISO 27001 Certification with Confidence
            </h2>
            <p className="text-base lg:text-base mt-2 font-normal">
              Let St. Fox guide you through the certification process and
              beyond.
            </p>
            <div className="flex lg:items-start lg:justify-start md:justify-start md:items-start items-center justify-center">
              <ReusableBtn
                className="px-6 py-3 bg-black text-[#fff] font-medium rounded-md border-2 transition flex items-center justify-center gap-2 text-base  mt-6 "
                name="Schedule a Free ISO Audit Consultation"
                type="button"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            loading="lazy"
            src="/images/ISO/ISOCertification.webp"
            alt="ISO 27001 Information Security 1"
            className="object-cover aspect-square lg:max-h-[250px] md:h-[250px] h-56"
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
}

export default EighthComponent;
