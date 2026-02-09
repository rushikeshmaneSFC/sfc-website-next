"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import VcisoHeroSection from "./VcisoHeroSection";
import VcisoLeader from "./VcisoLeader";
import VcisoStrategic from "./VcisoStrategic";
import VcisoFramework from "./VcisoFramework";
import VcisoDatasheet from "./VcisoDatasheet";
import VcisoServices from "./VcisoServices";
import VcisoImpact from "./VcisoImpact";
import VcisoLeadership from "./VcisoLeadership";
import VcisoFaq from "./VcisoFaq";

export default function VcisoClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    Metrics: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };

  const Vcisodata = [
    {
      component: <VcisoStrategic />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <VcisoFramework />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <VcisoDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <VcisoServices />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <VcisoImpact />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <VcisoLeadership />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <VcisoHeroSection />
      <VcisoLeader />
      <SubNavbar sectionRefs={sectionRefs} data={Vcisodata} />
      <VcisoFaq />
    </>
  );
}
