"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import DLPHeroSection from "./DLPHeroSection";
import DLPDataRisk from "./DLPDataRisk";
import DLPPreventionSolution from "./DLPPreventionSolution";
import DLPVigileFrameWork from "./DLPVigileFrameWork";
import DLPDatasheet from "./DLPDatasheet";
import DLPPrevention from "./DLPPrevention";
import DLPServices from "./DLPServices";
import DLPCompliance from "./DLPCompliance";
import DLPFAQ from "./DLPFAQ";

export default function DlpClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Usecases: useRef<HTMLDivElement>(null),
    Metrics: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };

  const Dlpdata = [
    {
      component: <DLPPreventionSolution />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <DLPVigileFrameWork />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <DLPDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <DLPPrevention />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <DLPServices />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <DLPCompliance />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <DLPHeroSection />
      <DLPDataRisk />
      <SubNavbar sectionRefs={sectionRefs} data={Dlpdata} />
      <DLPFAQ />
    </>
  );
}
