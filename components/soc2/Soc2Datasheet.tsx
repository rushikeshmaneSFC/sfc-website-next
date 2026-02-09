// @ts-nocheck
"use client";

import { useState } from "react";
import CustomModal from "@/components/atoms/CustomModal";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import Wrapper from "@/components/atoms/Wrapper";

const Soc2Datasheet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper className="bg-[#071119] bg-[url('/images/SOC2/Soc2Wave.webp')] bg-no-repeat  flex justify-center items-center border lg:h-[384px] md:h-[384px] h-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-[30%,70%] ">
        <div className="flex items-center justify-center z-10">
          <img
            loading="lazy"
            src="/images/SOC2/Datasheetimg.png"
            alt="Security Operations Center2_datasheet"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center text-[#fff] items-center text-center md:text-start sm:justify-start sm:items-start lg:py-10 md:py-10">
          <div
            className="showdow-sm lg:mt-0 md:mt-0 mt-4  lg:py-10 md:py-10 xl:-ml-12 lg:px-5  md:px-4 border-opacity-15 rounded-[2px]  backdrop-blur-[21px] p-6 bg-[#FFF] border border-opacity-20 border-gray-50"
            style={{
              background:
                "radial-gradient(157.24% 123.22% at 47.19% -0.63%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
            }}
          >
            <h2 className="text-xl lg:text-2xl md:text-2xl leading-8 font-bold lg:mx-4">
              Access the SOC Datasheet
            </h2>
            <p className="text-base mt-2 lg:mx-4">
              Discover our approach, features, and benefits to secure your
              business.
            </p>
            <div className="flex justify-center items-center sm:justify-start lg:justify-start md:items-start lg:mx-4">
              <ReusableBtn
                className="border-2 border-white
                px-3 py-2
                lg:px-6 lg:py-3 font-medium rounded-lg flex items-center
                justify-center gap-2 text-[12px] lg:text-base mt-6 lg:whitespace-nowrap"
                name="Download Datasheet"
                type="button"
                icon={null}
                onClick={() => setIsModalOpen(true)}
              />
              <CustomModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                imageSrc="/images/SOC2/CustomModalSOC2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Soc2Datasheet;
