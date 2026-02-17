"use client";

import LandingFearlessly from "./LandingFearlessly/LandingFearlessly";
import LandingHerosection from "./LandingHerosection/LandingHerosection";
import LandingInsights from "./LandingInsights/LandingInsights";
import LandingManagedService from "./LandingManagedService/LandingManagedService";
import LandingPageSecuringSector from "./LandingPageSecuringSector/LandingPageSecuringSector";
import LandingThreats from "./LandingThreats/LandingThreats";
import LandingVigileChoose from "./LandingVigileChoose/LandingVigileChoose";
import LandingVigileframework from "./LandingVigileframework/LandingVigileframework";
import OurPartners from "./OurPartners/OurPartners";
import Whatwedo from "./Whatwedo/Whatwedo";
import FlowbiteWrapper from "@/components/layout/flowbite-wrapper";
import { useEffect, useState } from "react";

export default function LandingPageClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const update = () => setIsMobile(window.innerWidth < 768);
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }
  }, []);

  const customCss = isMobile ? "bg-cover" : "bg-top";
  const topBg = isMobile
    ? "/images/Landingpage/mobile-bg-top-img.webp"
    : "/images/Landingpage/horizontal-scroll-bg.webp";

  return (
    <FlowbiteWrapper>
      <h1 className="sr-only">
        Cybersecurity Services by Saint Fox Consultancy – Managed Security,
        Cloud & AI Protection
      </h1>
      <LandingHerosection />

      <div
        className={`bg-no-repeat pb-9 w-full overflow-hidden 2xl:bg-cover 2xl:bg-right ${customCss}`}
        style={{
          backgroundImage: `url("${topBg}")`,
        }}
      >
        <LandingVigileframework />
        <LandingVigileChoose />
      </div>
      <Whatwedo />

      <OurPartners />
      <div className="bg-no-repeat bg-cover bg-center object-contain bg-[url('/images/Landingpage/SecuringSector_Bg.jpg')]">
        <LandingManagedService />
        <LandingPageSecuringSector />
      </div>
      <div className="bg-no-repeat bg-cover bg-center object-contain bg-[url('/images/Landingpage/Innovate_Fearlessly_Bg.jpg')]">
        <LandingThreats />
        <LandingFearlessly />
        <LandingInsights />
      </div>
    </FlowbiteWrapper>
  );
}
