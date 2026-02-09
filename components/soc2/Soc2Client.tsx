// @ts-nocheck
"use client";

import { useRef } from "react";
import Soc2HeroSection from "./Soc2HeroSection";
import Soc2Cybersecurity from "./Soc2Cybersecurity";
import SOC2Framework from "./SOC2Framework";
import Soc2Datasheet from "./Soc2Datasheet";
import SOC2Managed from "./SOC2Managed";
import Soc2Detect from "./Soc2Detect";
import Soc2TurningLogs from "./Soc2TurningLogs";
import SOC2Secure from "./SOC2Secure";
import SubNavbar from "@/components/atoms/SubNavbar";

export default function Soc2Client() {
  const sectionRefs = {
    Introduction: useRef(null),
    VIGILE: useRef(null),
    Whyus: useRef(null),
    Datasheet: useRef(null),
    HowWeExcel: useRef(null),
    SIEM: useRef(null),
  };

  const Soc2data = [
    {
      component: <Soc2Cybersecurity />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <SOC2Framework />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <Soc2Datasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <SOC2Managed />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <Soc2Detect />,
      refs: sectionRefs.HowWeExcel,
      id: "How we excel?",
    },
    {
      component: <Soc2TurningLogs />,
      refs: sectionRefs.SIEM,
      id: "SIEM",
    },
  ];

  return (
    <>
      <Soc2HeroSection />
      <SubNavbar sectionRefs={sectionRefs} data={Soc2data} />
      <SOC2Secure />
    </>
  );
}
