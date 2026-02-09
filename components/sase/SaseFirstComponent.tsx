"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import { images } from "@/constants/Sase";
import HeroSection from "@/components/atoms/HeroSection";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const SaseFirstComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection className=" flex justify-center items-center bg-[#07111A] bg-no-repeat bg-cover bg-center lg:h-[750px] md:h-[750px] h-auto lg:py-0 md:py-0 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-[50%,50%] lg:grid-cols-[50%,50%] md:gap-4 gap-10 lg:gap-0  text-[#fff] ">
        <div className="lg:py-6  md:py-0  space-y-3">
          <h1 className="text-2xl lg:text-[28px] font-bold lg:leading-[40px]">
            Simplify and Secure Your Network with St. Fox Managed SASE
          </h1>
          <p className="lg:text-base font-normal text-base   ">
            Unified Network and Security Architecture for High-Performance
            Access.
          </p>
          <div>
            <div className="lg:mt-0 mt-5">
              <ReusableBtn
                type="button"
                name="Schedule a Free SASE Assessment"
                className=" font-medium leading-[150%] lg:px-6 md:px-4 lg:py-2 py-3 rounded bg-[#1A3F7E] lg:whitespace-nowrap"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>

        <div>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="SASE Network"
            className="object-cover "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="flex  text-[#fff] gap-2   lg:mb-20">
          {[
            "40% Latency Reduction",
            "90% Threat Mitigation",
            "100% Compliance Audits",
          ].map((text, idx) => (
            <div key={idx} className="">
              <span className="text-[#3B73CC] text-2xl font-bold">
                {text.split(" ")[0]}
              </span>
              <p className="lg:text-base text-base font-normal lg:whitespace-nowrap ">
                {text.split(" ").slice(1).join(" ")}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={"Schedule a Free Assessment"}
      />
    </HeroSection>
  );
};

export default SaseFirstComponent;
