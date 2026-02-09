"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import IdentityAssessementHeroSection from "./IdentityAssessementHeroSection";
import IdentityAssessementStrengthen from "./IdentityAssessementStrengthen";
import IdentityAssessementVigileFramework from "./IdentityAssessementVigileFramework";
import IdentityAssessementDatasheet from "./IdentityAssessementDatasheet";
import IdentityAssessementCloudSecurity from "./IdentityAssessementCloudSecurity";
import IdentityAssessementServices from "./IdentityAssessementServices";
import IdentityAssessementSecurity from "./IdentityAssessementSecurity";
import IdentityAssessementFAQ from "./IdentityAssessementFAQ";

export default function IdentityAssessmentClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    Metrics: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };
  const identitydata = [
    {
      component: <IdentityAssessementStrengthen />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <IdentityAssessementVigileFramework />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <IdentityAssessementDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <IdentityAssessementCloudSecurity />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <IdentityAssessementServices />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <IdentityAssessementSecurity />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];
  return (
    <>
      <IdentityAssessementHeroSection />
      <SubNavbar sectionRefs={sectionRefs} data={identitydata} />
      <IdentityAssessementFAQ />
    </>
  );
}
