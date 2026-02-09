// @ts-nocheck
"use client";

import { useRef } from "react";
import MDRHeroSection from "./MDRHeroSection";
import MDRCyberThreats from "./MDRCyberThreats";
import MDRThreatDetection from "./MDRThreatDetection";
import MDRFramework from "./MDRFramework";
import MDRDatasheet from "./MDRDatasheet";
import MDRStandOut from "./MDRStandOut";
import MDRProven from "./MDRProven";
import MDRFAQ from "./MDRFAQ";
import SubNavbar from "@/components/atoms/SubNavbar";

export default function MdrClient() {
  const sectionRefs = {
    Introduction: useRef(null),
    VIGILE: useRef(null),
    Datasheet: useRef(null),
    Whyus: useRef(null),
    Metrics: useRef(null),
    FAQs: useRef(null),
  };

  const MDRData = [
    {
      component: <MDRThreatDetection />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <MDRFramework />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <MDRDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <MDRStandOut />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <MDRProven />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <MDRFAQ />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <MDRHeroSection />
      <MDRCyberThreats />
      <SubNavbar sectionRefs={sectionRefs} data={MDRData} />
    </>
  );
}
