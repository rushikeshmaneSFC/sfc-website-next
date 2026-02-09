"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import PrivacyOpsHeroSection from "./PrivacyOpsHeroSection";
import PrivacyOpsPrivacyRequirements from "./PrivacyOpsPrivacyRequirements";
import PrivacyOpsSeamlessCompliance from "./PrivacyOpsSeamlessCompliance";
import PrivacyOpsDataPrivacy from "./PrivacyOpsDataPrivacy";
import PrivacyDatasheet from "./PrivacyDatasheet";
import PrivacyPrevention from "./PrivacyPrevention";
import PrivacyOpsServices from "./PrivacyOpsServices";
import PrivacyOpsCompliance from "./PrivacyOpsCompliance";
import PrivacyOpsFAQ from "./PrivacyOpsFAQ";

export default function PrivacyOpsClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Usecases: useRef<HTMLDivElement>(null),
    Metrics: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };

  const Privacydatadata = [
    {
      component: <PrivacyOpsSeamlessCompliance />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <PrivacyOpsDataPrivacy />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <PrivacyDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <PrivacyPrevention />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <PrivacyOpsServices />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <PrivacyOpsCompliance />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];
  return (
    <>
      <PrivacyOpsHeroSection />
      <PrivacyOpsPrivacyRequirements />
      <SubNavbar sectionRefs={sectionRefs} data={Privacydatadata} />
      <PrivacyOpsFAQ />
    </>
  );
}
