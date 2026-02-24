"use client";

import type { ReactNode } from "react";
import LandingFearlessly from "./LandingFearlessly/LandingFearlessly";
import LandingInsights from "./LandingInsights/LandingInsights";
import LandingManagedService from "./LandingManagedService/LandingManagedService";
import LandingPageSecuringSector from "./LandingPageSecuringSector/LandingPageSecuringSector";
import LandingThreats from "./LandingThreats/LandingThreats";
import LandingVigileChoose from "./LandingVigileChoose/LandingVigileChoose";
import LandingVigileframework from "./LandingVigileframework/LandingVigileframework";
import OurPartners from "./OurPartners/OurPartners";
import Whatwedo from "./Whatwedo/Whatwedo";
import FlowbiteWrapper from "@/components/layout/flowbite-wrapper";

interface LandingPageClientProps {
  hero: ReactNode;
}

export default function LandingPageClient({ hero }: LandingPageClientProps) {
  return (
    <FlowbiteWrapper>
      <h1 className="sr-only">
        Cybersecurity Services by Saint Fox Consultancy – Managed Security,
        Cloud & AI Protection
      </h1>
      {hero}

      <div
        className="bg-no-repeat pb-9 w-full overflow-hidden 2xl:bg-cover 2xl:bg-right bg-cover bg-[url('/images/Landingpage/mobile-bg-top-img.webp')] md:bg-top md:bg-[url('/images/Landingpage/horizontal-scroll-bg.webp')]"
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
