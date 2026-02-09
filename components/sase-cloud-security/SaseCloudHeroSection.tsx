"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/atoms/HeroSection";
import ScheduleModal from "@/components/atoms/ScheduleModal";

const slides = [
  {
    image: "/images/SaseCloudsecurity/Solutionimg.webp",
    text: "Is Your Cloud Security Keeping Up with Evolving Threats?",
    answer:
      "Cloud adoption has accelerated, but so have threats targeting cloud environment.",
  },
  {
    image: "/images/SaseCloudsecurity/Solutionimg.webp",
    text: "Are Misconfigurations & Compliance Gaps Exposing You?",
    answer:
      "Misconfigurations, lack of visibility, and compliance gaps expose your organization to unnecessary risks.",
  },
  {
    image: "/images/SaseCloudsecurity/Solutionimg.webp",
    text: "Can Legacy Tools Protect Dynamic Cloud Workloads?",
    answer:
      "Traditional tools and on-premise strategies fall short in securing dynamic cloud workloads.",
  },
];

const SaseCloudHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <HeroSection className="bg-[url('https://saintfox.azureedge.net/datav2/Herobg.png')] bg-no-repeat bg-cover bg-center lg:h-[700px] md:h-[700px] h-auto flex flex-col items-center justify-center lg:py-0 md:py-0 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[60%,40%] gap-8 items-center text-center md:text-left">
        <div className="space-y-4 ">
          <div className="col-span-12 flex flex-col items-center justify-center lg:col-span-6 ">
            <div className="space-y-4 text-[#FFF]">
              <h1 className="text-2xl md:text-3xl font-bold leading-10 lg:text-4xl">
                Secure Your Cloud Environment with St. Fox Managed Cloud
                Security
              </h1>
              <div className="flex flex-col lg:whitespace-nowrap md:flex-row gap-2  items-center justify-center">
                <div className="flex items-center gap-1">
                  <span className="rounded-md bg-white/10 px-3 py-1 text-[#FFF] text-sm font-medium">
                    Threat Detection
                  </span>
                </div>
                <span className="rounded-md bg-white/10 px-3 py-1 text-[#FFF] text-sm font-medium">
                  Compliance Assurance
                </span>
                <span className="rounded-md bg-white/10 px-3 py-1 text-[#FFF] text-sm font-medium">
                  Optimized Cloud Security
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-y-4 md:gap-7">
                <button
                  className="col-span-6 rounded-lg bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E] md:text-[12px] lg:whitespace-nowrap text-base font-medium lg:w-[280px] text-[#FFF] py-[10px]"
                  onClick={() => setIsModalOpen(true)}
                >
                  Schedule a Free Cloud Security Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-[#FFF] ">
          <div
            className="flex flex-col items-center shadow-md p-6 border-2 border-white/10 bg-[radial-gradient(157.24%_123.22%_at_47.19%_-0.63%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[21px] lg:h-[263px] h-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center gap-2 mt-5">
              <img
                loading="lazy"
                src={slides[currentIndex]?.image || ""}
                alt="icon"
                className="h-4 shadow-lg"
              />
              <p className="text-sm text-[#72A7FB] font-semibold">
                {slides[currentIndex]?.text || ""}
              </p>
            </div>

            <p className="text-xl font-semibold mt-2 leading-7 ">
              {slides[currentIndex]?.answer || ""}
            </p>
          </div>

          <div className="flex justify-start items-start space-x-2  mt-7">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
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

export default SaseCloudHeroSection;
