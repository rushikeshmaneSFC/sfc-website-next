// @ts-nocheck
"use client";

import { useRef } from "react";
import SecondContainer from "./SecondContainer";
import VAPTFeatures from "./VAPTFeatures";
import { VAPTVulnerabilityAssesment } from "./VAPTVulnerabilityAssesment";
import VAPTStrategy from "./VAPTStrategy";
import VAPTDatasheet from "./VAPTDatasheet";
import VAPTServices from "./VAPTServices";
import VAPTConsultation from "./VAPTConsultation";
import VAPTImpact from "./VAPTImpact";
import VAPTQuestions from "./VAPTQuestions";
import SubNavbar from "@/components/atoms/SubNavbar";

export default function VaptClient() {
  const sectionRefs = {
    Introduction: useRef(null),
    VIGILE: useRef(null),
    Whyus: useRef(null),
    Datasheet: useRef(null),
    Usecases: useRef(null),
    Metrics: useRef(null),
    FAQs: useRef(null),
  };

  const Vaptdata = [
    {
      component: <VAPTVulnerabilityAssesment />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <VAPTStrategy />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <VAPTDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <VAPTFeatures />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <VAPTImpact />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <VAPTServices />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <VAPTConsultation />
      <SecondContainer />
      <SubNavbar sectionRefs={sectionRefs} data={Vaptdata} />
      <VAPTQuestions />
    </>
  );
}
