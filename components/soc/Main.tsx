"use client";

import { useState } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeroSection className="bg-[#000] flex flex-col justify-center items-center lg:h-[750px] md:h-auto h-[764px]  ">
      <div className="grid grid-cols-1 md:grid-cols-[60%,40%] lg:grid-cols-[60%,40%] items-center md:pt-10 lg:pt-0 pt-0 ">
        <div className="flex flex-col text-[#ffff] space-y-3 lg:space-y-4 justify-center items-center text-center lg:justify-start md:justify-start lg:text-start md:text-start lg:items-start md:items-start ">
          <h1 className="lg:text-[28px] text-xl font-bold lg:leading-10">
            Achieve SOC 2 Compliance with St. Fox SOC 2 Assessment Services
          </h1>
          <p className="lg:text-[16px] text-base  font-[400]">
            Build Customer Trust and Meet Compliance Standards with Expert SOC 2
            Guidance.
          </p>
          <div className="">
            <ReusableBtn
              className="text-white px-6 py-3 rounded-md text-base font-[500] bg-[#1A3F7E] mt-3 lg:mt-0 md:mt-0"
              type="button"
              name="Talk to a SOC 2 Expert"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <img
            loading="lazy"
            src="/images/SOC/Img_Main_BackgroundImg.png"
            alt="Security Operations Center2_bg"
            className="w-full max-w-md"
            width="496"
            height="370"
          />
        </div>
      </div>

      <div className=" text-center w-full ">
        <h2 className="text-[20px] lg:text-[36px] font-bold text-[#fff] sm:mt-10">
          Is Your Organization SOC 2 Ready?
        </h2>

        <div className="flex justify-center items-center lg:pl-96 md:pl-28">
          <img
            loading="lazy"
            src="/images/SOC/Vector.webp"
            alt="vector"
            className="w-72"
            width="455"
            height="38"
          />
        </div>
        <div className="grid grid-cols md:grid-cols-3 gap-6 text-center  lg:-my-32 md:-my-20 py-10">
          {[
            "SOC 2 compliance is critical for demonstrating trust, security, and operational excellence.",
            "Without proper guidance, organizations often struggle with unclear requirements and lengthy audit processes.",
            "A lack of SOC 2 compliance can lead to lost business opportunities and customer mistrust.",
          ].map((text, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-md flex-col items-center relative md:top-28 lg:top-44 hidden md:block "
            >
              <div className="flex justify-center items-center">
                <img
                  loading="lazy"
                  src="/images/SOC/Setting.webp"
                  alt="Icon"
                  className="w-10 h-10 mb-4"
                />
              </div>
              <p className=" text-lg  font-[500]">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Talk to a SOC 2 Expert"}
      />
    </HeroSection>
  );
}

export default Main;
