"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import { useState } from "react";

const TPCRMSupplyChain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Wrapper className=" bg-[url('https://saintfox.azureedge.net/datav2/TPCRMServicesbg.webp')] h-auto md:-[339px] lg:h-[339px] flex justify-center items-center py-5 lg:py-5 md:py-5 bg-cover bg-center">
        <div className=" justify-center items-center text-center ">
          <h2 className="text-2xl lg:text-[36px] lg:leading-[56px] font-semibold text-[#FFF] ">
            Protect Your Supply Chain with St. Fox TPCRM Services
          </h2>
          <p className="text-base lg:text-lg mt-2 font-normal text-[#FFFFFF] ">
            Secure your ecosystem by identifying, monitoring, and mitigating
            third-party risks.
          </p>
          <ReusableBtn
            className="px-6 py-3 text-[#fff] font-medium rounded-md border-2 items-center justify-center gap-2 text-base  mt-6"
            name="Schedule a Free TPCRM Consultation"
            type="button"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <ScheduleModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title={"Schedule a Free Assessment"}
        />
      </Wrapper>
    </div>
  );
};

export default TPCRMSupplyChain;
