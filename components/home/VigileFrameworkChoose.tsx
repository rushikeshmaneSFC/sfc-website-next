"use client";
// @ts-nocheck

import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import { MdOutlineFileDownload } from "react-icons/md";
import ReusableCard from "@/components/atoms/ReusableCard";
import { CardData } from "@/constants/homeConstant";
import { useState } from "react";
import CustomModal from "@/components/atoms/CustomModal";

export default function VigileFrameworkChoose() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Wrapper className="flex justify-center item-center">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="font-bold lg:text-2xl text-xl justify-center items-center lg:text-left text-center">
              <p>Why Choose the VIGILE Framework?</p>
            </div>

            <ReusableBtn
              icon={<MdOutlineFileDownload className="text-xl mb-1" />}
              className="flex flex-row-reverse gap-2 items-center font-medium text-[13px] w-[208px] h-10 whitespace-nowrap border-2 border-[#E5E7EB] rounded-lg px-2 py-2 text-sm hover:bg-gray-100 transition-all duration-200 "
              name="Download Datasheet"
              type={"button"}
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pt-8 ">
            {CardData.map((card, index) => (
              <ReusableCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                className={
                  "border-l-2 border-dashed border-gray-300 border-spacing-x-8"
                }
                boxShadowColor={card.boxShadowColor}
              />
            ))}
          </div>
          <CustomModal open={isModalOpen} setOpen={setIsModalOpen} />
        </div>
      </Wrapper>
    </>
  );
}
