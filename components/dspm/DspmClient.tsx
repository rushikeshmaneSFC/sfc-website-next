"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import DSPMHeroSection from "./DSPMHeroSection";
import DSPMPosture from "./DSPMPosture";
import DSPMSecurityManagement from "./DSPMSecurityManagement";
import DSPMVigile from "./DSPMVigile";
import DSPMDatasheet from "./DSPMDatasheet";
import DSPMPrevention from "./DSPMPrevention";
import DSPMServices from "./DSPMServices";
import DSPMCompliance from "./DSPMCompliance";
import DSPMFAQ from "./DSPMFAQ";

export default function DspmClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Usecases: useRef<HTMLDivElement>(null),
    Metrics: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };

  const Dspmdata = [
    {
      component: <DSPMSecurityManagement />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <DSPMVigile />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <DSPMDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <DSPMPrevention />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <DSPMServices />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <DSPMCompliance />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <DSPMHeroSection />
      <DSPMPosture />
      <SubNavbar sectionRefs={sectionRefs} data={Dspmdata} />
      <DSPMFAQ />
    </>
  );
}
