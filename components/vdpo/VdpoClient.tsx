"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import VDPOHeroSection from "./VDPOHeroSection";
import VDPORegulation from "./VDPORegulation";
import VDPODataProtection from "./VDPODataProtection";
import VDPODataPrivacy from "./VDPODataPrivacy";
import VDPODatasheet from "./VDPODatasheet";
import VDPOServices from "./VDPOServices";
import VDPOSimplifyData from "./VDPOSimplifyData";
import VDPOFAQ from "./VDPOFAQ";

export default function VdpoClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };
  const Vdpodata = [
    {
      component: <VDPODataProtection />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <VDPODataPrivacy />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <VDPODatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <VDPOServices />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <VDPOSimplifyData />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];
  return (
    <>
      <VDPOHeroSection />
      <VDPORegulation />
      <SubNavbar sectionRefs={sectionRefs} data={Vdpodata} />
      <VDPOFAQ />
    </>
  );
}
