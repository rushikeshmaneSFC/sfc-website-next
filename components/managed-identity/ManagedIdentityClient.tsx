// @ts-nocheck
"use client";

import { useRef } from "react";
import ManagedIdentityHeroSection from "./ManagedHeroSection";
import ManagedCrisis from "./ManagedCrisis";
import ManagedSecurity from "./ManagedSecurity";
import ManagedApproach from "./ManagedApproach";
import ManagedDatasheet from "./ManagedDatasheet";
import ManagedIdentityComprehensive from "./ManagedIdentityComprehensive";
import ManagedFAQ from "./ManagedFAQ";
import SubNavbar from "@/components/atoms/SubNavbar";

export default function ManagedIdentityClient() {
  const sectionRefs = {
    Solution: useRef(null),
    VIGILE: useRef(null),
    Datasheet: useRef(null),
    Whyus: useRef(null),
    FAQs: useRef(null),
  };

  const ManagedIdentitydata = [
    {
      component: <ManagedSecurity />,
      refs: sectionRefs.Solution,
      id: "Solution",
    },
    {
      component: <ManagedApproach />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <ManagedDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <ManagedIdentityComprehensive />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <ManagedFAQ />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <ManagedIdentityHeroSection />
      <ManagedCrisis />
      <SubNavbar sectionRefs={sectionRefs} data={ManagedIdentitydata} />
    </>
  );
}
