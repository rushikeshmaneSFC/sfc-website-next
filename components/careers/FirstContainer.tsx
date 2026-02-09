"use client";

import HeroSection from "@/components/atoms/HeroSection";

export default function FirstContainer() {
  return (
    <HeroSection className="flex justify-center items-center bg-black ">
      <div className="text-[#fff] my-16">
        <p className="my-6 text-2xl font-semibold">
          Crave a career that sparks your soul and feeds your curiosity. We
          believe in lifelong learning and endless possibilities.
        </p>
        <p className="my-4 text-xl">
          Passion ignites. Growth propels. Join us on the journey.
        </p>
      </div>
    </HeroSection>
  );
}
