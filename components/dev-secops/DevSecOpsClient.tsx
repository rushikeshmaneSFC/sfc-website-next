"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import FourthContainer from "./FourthContainer";
import FifthContainer from "./FifthContainer";
import SixthContainer from "./SixthContainer";
import SeventhContainer from "./SeventhContainer";
import EighthComponent from "./EighthComponent";

export default function DevSecOpsClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    Metrics: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };
  const Devsecopsdata = [
    {
      component: <ThirdContainer />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <FourthContainer />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <FifthContainer />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <SixthContainer />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <SeventhContainer />,
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
    <div>
      <FirstContainer />
      <SecondContainer />
      <SubNavbar sectionRefs={sectionRefs} data={Devsecopsdata} />
    </div>
  );
}
