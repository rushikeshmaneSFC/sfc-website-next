"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import EmaIlHeroSection from "./EmaIlHeroSection";
import EmailSecurityThreat from "./EmailSecurityThreat";
import EmailSecurityDetection from "./EmailSecurityDetection";
import EmailFrameWork from "./EmailFrameWork";
import EmailSecurityDataSheet from "./EmailSecurityDataSheet";
import EmailSecurityReliability from "./EmailSecurityReliability";
import EmailFAQ from "./EmailFAQ";

export default function EmailSecurityClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };
  const Emailsecuritydata = [
    {
      component: <EmailSecurityDetection />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <EmailFrameWork />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <EmailSecurityDataSheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <EmailSecurityReliability />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <EmailFAQ />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];
  return (
    <>
      <EmaIlHeroSection />
      <EmailSecurityThreat />
      <SubNavbar sectionRefs={sectionRefs} data={Emailsecuritydata} />
    </>
  );
}
