// @ts-nocheck
"use client";

import { useRef } from "react";
import Cloud_FirstComponent from "./Cloud_FirstComponent";
import Cloud_SecondComponent from "./Cloud_SecondComponent";
import CloudEvaluation from "./CloudEvaluation";
import CloudvigileFramwork from "./CloudvigileFramwork";
import Cloud_FifthComponent from "./Cloud_FifthComponent";
import Cloud_SixthComponent from "./Cloud_SixthComponent";
import Cloud_EighthComponent from "./Cloud_EighthComponent";
import Cloud_NinthComponent from "./Cloud_NinthComponent";
import Cloud_TenthComponent from "./Cloud_TenthComponent";
import SubNavbar from "@/components/atoms/SubNavbar";

export default function CloudSecurityClient() {
  const sectionRefs = {
    Introduction: useRef(null),
    VIGILE: useRef(null),
    Whyus: useRef(null),
    Datasheet: useRef(null),
    Usecases: useRef(null),
    Metrics: useRef(null),
    FAQs: useRef(null),
  };

  const Cloudsecuritydata = [
    {
      component: <CloudEvaluation />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <CloudvigileFramwork />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <Cloud_FifthComponent />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <Cloud_SixthComponent />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <Cloud_EighthComponent />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <Cloud_NinthComponent />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <Cloud_FirstComponent />
      <Cloud_SecondComponent />
      <SubNavbar sectionRefs={sectionRefs} data={Cloudsecuritydata} />
      <Cloud_TenthComponent />
    </>
  );
}
