// @ts-nocheck
"use client";

import { useRef } from "react";
import SOC2Support from "./SOC2Support";
import VigileFramework from "./VigileFramework";
import Soc2Compliance from "./Soc2Compliance";
import SeventhContainer from "./SeventhContainer";
import SubNavbar from "@/components/atoms/SubNavbar";
import SOCDatasheet from "./SOCDatasheet";
import SOCQuestions from "./SOCQuestions";
import SOCImpact from "./SOCImpact";

function SocMenu() {
  const sectionRefs = {
    Introduction: useRef(null),
    VIGILE: useRef(null),
    Whyus: useRef(null),
    Datasheet: useRef(null),
    Usecases: useRef(null),
    Metrics: useRef(null),
    FAQs: useRef(null),
  };

  const Socdata = [
    {
      component: <SOC2Support />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <VigileFramework />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <SOCDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <Soc2Compliance />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <SOCImpact />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <SeventhContainer />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];
  return (
    <>
      <SubNavbar sectionRefs={sectionRefs} data={Socdata} />
      <SOCQuestions />
    </>
  );
}

export default SocMenu;
