"use client";

import HeroSection from "@/components/atoms/HeroSection";

export default function FirstContainer() {
  return (
    <HeroSection className="flex justify-center items-center bg-[#000]">
      <div className="flex justify-center items-center text-[#fff] py-20">
        <p className="text-2xl  font-bold">Privacy Policy</p>
      </div>
    </HeroSection>
  );
}
