"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import IncidentResponseHeroSection from "./IncidentResponseHeroSection";
import IncidentResponseCyberThreats from "./IncidentResponseCyberThreats";
import IncidentResponseVigileFrameWork from "./IncidentResponseVigileFrameWork";
import IncidentResponseDatasheet from "./IncidentResponseDatasheet";
import IncidentResponses from "./IncidentResponses";
import IncidentResponseServices from "./IncidentResponseServices";
import IncidentResponseCybersecurity from "./IncidentResponseCybersecurity";
import IncidentResponseFAQ from "./IncidentResponseFAQ";

export default function IncidentResponseClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    Metrics: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };

  const Incidentdata = [
    {
      component: <IncidentResponseCyberThreats />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <IncidentResponseVigileFrameWork />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <IncidentResponseDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <IncidentResponses />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <IncidentResponseServices />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <IncidentResponseCybersecurity />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <IncidentResponseHeroSection />
      <SubNavbar sectionRefs={sectionRefs} data={Incidentdata} />
      <IncidentResponseFAQ />
    </>
  );
}
