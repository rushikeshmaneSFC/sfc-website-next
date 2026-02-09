// @ts-nocheck
"use client";

import { useRef } from "react";
import TPCRMHeroSection from "./TPCRMHeroSection";
import TPCRMRiskManagement from "./TPCRMRiskManagement";
import TPCRMVigileFrameWork from "./TPCRMVigileFrameWork";
import TPCRMDatasheet from "./TPCRMDatasheet";
import TPCRMThirdParty from "./TPCRMThirdParty";
import TPCRMServices from "./TPCRMServices";
import TPCRMSupplyChain from "./TPCRMSupplyChain";
import TPCRMFAQ from "./TPCRMFAQ";
import SubNavbar from "@/components/atoms/SubNavbar";

export default function TpcrmClient() {
  const sectionRefs = {
    Introduction: useRef(null),
    VIGILE: useRef(null),
    Datasheet: useRef(null),
    Whyus: useRef(null),
    Metrics: useRef(null),
    FAQs: useRef(null),
  };

  const Tpcrmdata = [
    {
      component: <TPCRMRiskManagement />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <TPCRMVigileFrameWork />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <TPCRMDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <TPCRMThirdParty />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <TPCRMServices />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <TPCRMSupplyChain />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <TPCRMHeroSection />
      <SubNavbar sectionRefs={sectionRefs} data={Tpcrmdata} />
      <TPCRMFAQ />
    </>
  );
}
