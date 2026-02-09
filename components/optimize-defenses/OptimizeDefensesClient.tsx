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
import EightContainer from "./EightContainer";

export default function OptimizeDefensesClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    Metrics: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };
  const OptimizeDefenses = [
    {
      component: <SecondContainer />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <ThirdContainer />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <FourthContainer />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <FifthContainer />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <SixthContainer />,
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
      <FirstContainer />
      <SubNavbar sectionRefs={sectionRefs} data={OptimizeDefenses} />
      <EightContainer />
    </>
  );
}
