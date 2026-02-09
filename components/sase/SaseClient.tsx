// @ts-nocheck
"use client";

import { useRef } from "react";
import SaseFirstComponent from "./SaseFirstComponent";
import SecurityFeatures from "./SecurityFeatures";
import SASEFramework from "./SASEFramework";
import SaseDatasheet from "./SaseDatasheet";
import SASESets from "./SASESets";
import SaseApart from "./SaseApart";
import SubNavbar from "@/components/atoms/SubNavbar";

export default function SaseClient() {
  const sectionRefs = {
    Introduction: useRef(null),
    VIGILE: useRef(null),
    Whyus: useRef(null),
    Datasheet: useRef(null),
    Usecases: useRef(null),
    FAQs: useRef(null),
  };

  const Sasedata = [
    {
      component: <SecurityFeatures />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <SASEFramework />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <SaseDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <SASESets />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <SaseApart />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <SaseFirstComponent />
      <SubNavbar sectionRefs={sectionRefs} data={Sasedata} />
    </>
  );
}
