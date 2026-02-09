// new animation:
// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReusableBtn from "@/components/atoms/ReusableBtn";
import ScheduleModal from "@/components/atoms/ScheduleModal";
import OurCustomer from "../OurCustomer/OurCustomer";

const LandingHerosection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroTexts = [
    {
      text: "Empowering businesses to embrace the limitless potential of the cloud while maintaining ironclad security",
      logo: "/images/Landingpage/St.foxlogo.webp",
    },
    {
      text: "Delivering cost-effective, compliance-aligned cybersecurity solutions that safeguard your data, infrastructure, and growth potential",
      logo: "/images/Landingpage/St.foxlogo.webp",
    },
    {
      text: "Enabling fearless innovation with robust security that seamlessly balances privacy, protection, and digital agility",
      logo: "/images/Landingpage/ServiceIcon.webp",
    },
  ];

  const handleDotClick = (index: number) => {
    setCurrentTextIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === heroTexts.length - 1 ? 0 : prevIndex + 1,
      );
    }, 6050);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-[#fff] bg-[url('https://saintfox.azureedge.net/datav2/LandingHerosection_Mobile.webp')] md:bg-[url('https://saintfox.azureedge.net/datav2/bg.webp')] bg-cover bg-center bg-no-repeat lg:w-full w-[100%] 2xl:h-[638px] lg:h-[638px] md:h-auto h-[520px] 2xl:px-40 lg:px-20 md:px-4 2xl:py-0 lg:py-0 md:py-20 pt-24">
      <div className="grid 2xl:grid-cols-[50%,50%] lg:grid-cols-[70%,30%] md:grid-cols-[70%,30%] grid-cols-1 text-white gap-4 px-4 max-w-[1920px] w-full justify-center items-center">
        <div className="flex flex-col justify-center gap-4 lg:mt-64 2xl:mt-44 md:mt-24">
          <div className="text-left h-[140px] md:h-[200px] lg:h-[220px] 2xl:h-[240px] relative overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTextIndex}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-xl md:text-2xl lg:text-[32px] lg:leading-[46px] 2xl:text-[32px] 2xl:leading-[46px] font-semibold absolute max-w-[800px]"
              >
                {heroTexts[currentTextIndex]?.text}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex 2xl:justify-start justify-start md:justify-start items-start">
            <ReusableBtn
              type="button"
              name="Schedule a Free Assessment"
              className="bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E] text-[#fff] lg:text-base md:text-base text-sm font-medium py-3 px-6 rounded-lg z-10"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          {/* Dots */}
          <div className="flex justify-start gap-2 mt-4">
            {heroTexts.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="relative flex items-center justify-start p-1"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="h-2 transition-all duration-300 transform">
                  <div
                    className={`h-full transform transition-transform duration-300 origin-left rounded-[8px] ${
                      currentTextIndex === index
                        ? "w-6 bg-gradient-to-r from-white/70 to-white/0 rounded-[8px] shadow-[0px_1px_4px_rgba(14,31,53,0.12),_0px_4px_8px_rgba(14,31,53,0.08)]"
                        : "w-2 bg-[#1A1A1A] rounded-full"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Animated logo */}
        <div className="flex justify-center items-center lg:mt-44 2xl:mt-44 md:mt-0 mt-4">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroTexts[currentTextIndex]?.logo}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className={`hidden md:block mt-5 lg:mt-0
                ${
                  currentTextIndex === 2
                    ? "2xl:w-[400px] 2xl:h-[350px] lg:w-[400px] lg:h-[400px]"
                    : "2xl:w-[350px] lg:w-[250px] lg:h-[272px]"
                }
                md:w-[250px] lg:h-[272px] object-contain md:h-auto`}
              src={heroTexts[currentTextIndex]?.logo}
              alt="hero"
              loading="eager"
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full flex justify-center items-center lg:mt-0 2xl:mt-5 md:mt-0">
        <OurCustomer />
      </div>

      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title="Schedule a Free Assessment"
      />
    </div>
  );
};

export default LandingHerosection;
