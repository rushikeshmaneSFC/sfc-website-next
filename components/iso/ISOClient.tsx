// @ts-nocheck
"use client";

import { useRef } from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import ISOFramework from "./ISOFramework";
import ISODatasheet from "./ISODatasheet";
import FifthComponent from "./FifthComponent";
import Isoimpact from "./Isoimpact";
import EighthComponent from "./EighthComponent";
import ISOQuestions from "./ISOQuestions";
import SubNavbar from "@/components/atoms/SubNavbar";

export default function ISOClient() {
  const sectionRefs = {
    Introduction: useRef(null),
    VIGILE: useRef(null),
    Datasheet: useRef(null),
    Whyus: useRef(null),
    Usecases: useRef(null),
    Metrics: useRef(null),
    FAQs: useRef(null),
  };

  const Isodata = [
    {
      component: <ThirdComponent />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <ISOFramework />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <ISODatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <FifthComponent />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <Isoimpact />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <EighthComponent />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <FirstComponent />
      <SecondComponent />
      <SubNavbar sectionRefs={sectionRefs} data={Isodata} />
      <ISOQuestions />
    </>
  );
}
