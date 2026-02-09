// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import tabData from "@/constants/LandingpageConstant";
import { IoIosArrowForward } from "react-icons/io";

export default function Whatwedo() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [visibleTabIndex, setVisibleTabIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  const current = tabData[visibleTabIndex];

  // Start auto-scroll on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.4 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (!hasStarted || userInteracted || isHovered) return;

    const interval = setInterval(() => {
      const nextIndex = (activeTabIndex + 1) % tabData.length;
      setActiveTabIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [hasStarted, activeTabIndex, userInteracted, isHovered]);

  // Fade animation
  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => {
      setVisibleTabIndex(activeTabIndex);
      setFadeIn(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, [activeTabIndex]);

  return (
    <div
      ref={sectionRef}
      className="bg-[#07111A] text-[#fff] py-16 px-4 sm:px-6 md:px-10 lg:px-20 lg:h-auto md:h-[900px]"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          What We Do Best
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-2">
          We deliver comprehensive, cloud-first security and engineering
          solutions tailored to meet the evolving needs of modern businesses.
          From securing your cloud infrastructure to enabling AI-safe
          environments, our end-to-end services are built for tomorrow's
          challenges.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          Designed to empower organizations of all sizes and across industries,
          we help you build, scale, and thrive in a digital-first world with
          confidence and resilience.
        </p>
      </div>

      <div
        className="flex flex-wrap justify-center mt-10 border-b border-gray-600"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {tabData.map((tab, index) => (
          <button
            key={tab.key}
            className={`flex items-center gap-2 px-4 py-2 sm:py-3 transition-colors duration-300 ${
              index === activeTabIndex
                ? "text-base font-medium border-b-2 border-white"
                : "text-base font-medium opacity-60 hover:opacity-100"
            }`}
            onClick={() => {
              setActiveTabIndex(index);
              setUserInteracted(true);
            }}
          >
            <span>{tab.key}</span>
          </button>
        ))}
      </div>

      <div
        className={`min-h-[200px] flex flex-col md:flex-row justify-center items-center mt-10 gap-8 transition-opacity duration-500 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-64 w-full md:w-1/2  min-h-[250px]">
          {current && (
            <>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base mb-4 whitespace-pre-line">
                {current.description}
              </p>

              <a
                href={current.link || "#"}
                className="inline-flex items-center text-white font-medium group"
              >
                Learn more
                <IoIosArrowForward className="text-[13px] ml-2" />
              </a>
            </>
          )}
        </div>

        {current && (
          <div className="rounded-lg border-[6px] border-white/10 mt-[24px]">
            <img
              src={current.image}
              alt={current.title}
              className="w-40 sm:w-52 md:w-60 lg:w-72 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}
