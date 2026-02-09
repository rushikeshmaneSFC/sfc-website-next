"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import SOCAssessmentHerosection from "./SOCAssessmentHerosection";
import SOCAssessmentThreats from "./SOCAssessmentThreats";
import SOCAssessmentPotential from "./SOCAssessmentPotential";
import SOCAssessmentFramework from "./SOCAssessmentFramework";
import SOCAssessmentDatasheet from "./SOCAssessmentDatasheet";
import SOCAssessmentCompliance from "./SOCAssessmentCompliance";
import SOCAssessmentImpact from "./SOCAssessmentImpact";
import SOCAssessmentServices from "./SOCAssessmentServices";
import SOCAssessmentFAQ from "./SOCAssessmentFAQ";

export default function SocAssessmentClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    Metrics: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };

  const SOCAssessmentData = [
    {
      component: <SOCAssessmentPotential />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <SOCAssessmentFramework />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <SOCAssessmentDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <SOCAssessmentCompliance />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <SOCAssessmentImpact />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <SOCAssessmentServices />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <SOCAssessmentHerosection />
      <SOCAssessmentThreats />
      <SubNavbar sectionRefs={sectionRefs} data={SOCAssessmentData} />
      <SOCAssessmentFAQ />
    </>
  );
}
