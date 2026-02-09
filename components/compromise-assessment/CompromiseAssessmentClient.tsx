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

export default function CompromiseAssessmentClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Usecases: useRef<HTMLDivElement>(null),
    Metrics: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };

  const Compromisedata = [
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
      component: <SixthContainer />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <FifthContainer />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <SeventhContainer />,
      refs: sectionRefs.Usecases,
      id: "Usecases",
    },
    {
      component: <EightContainer />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
  ];
  return (
    <>
      <FirstContainer />
      <SecondContainer />
      <SubNavbar sectionRefs={sectionRefs} data={Compromisedata} />
    </>
  );
}
