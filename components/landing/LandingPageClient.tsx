"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import FlowbiteWrapper from "@/components/layout/flowbite-wrapper";

const LandingFearlessly = dynamic(
  () => import("./LandingFearlessly/LandingFearlessly").then((m) => m.default),
  { ssr: false }
);
const LandingInsights = dynamic(
  () => import("./LandingInsights/LandingInsights").then((m) => m.default),
  { ssr: false }
);
const LandingManagedService = dynamic(
  () =>
    import("./LandingManagedService/LandingManagedService").then((m) => m.default),
  { ssr: false }
);
const LandingPageSecuringSector = dynamic(
  () =>
    import("./LandingPageSecuringSector/LandingPageSecuringSector").then(
      (m) => m.default
    ),
  { ssr: false }
);
const LandingThreats = dynamic(
  () => import("./LandingThreats/LandingThreats").then((m) => m.default),
  { ssr: false }
);
const LandingVigileChoose = dynamic(
  () =>
    import("./LandingVigileChoose/LandingVigileChoose").then((m) => m.default),
  { ssr: false }
);
const LandingVigileframework = dynamic(
  () =>
    import("./LandingVigileframework/LandingVigileframework").then(
      (m) => m.default
    ),
  { ssr: false }
);
const OurPartners = dynamic(
  () => import("./OurPartners/OurPartners").then((m) => m.default),
  { ssr: false }
);
const Whatwedo = dynamic(
  () => import("./Whatwedo/Whatwedo").then((m) => m.default),
  { ssr: false }
);

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
