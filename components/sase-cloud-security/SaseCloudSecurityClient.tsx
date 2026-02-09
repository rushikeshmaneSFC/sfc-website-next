"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import SaseCloudHeroSection from "./SaseCloudHeroSection";
import SaseCloudEnterprise from "./SaseCloudEnterprise";
import SaseCloudVigileFramework from "./SaseCloudVigileFramework";
import SaseCloudDatasheet from "./SaseCloudDatasheet";
import SasePatchingManagement from "./SasePatchingManagement";
import SaseCloudResults from "./SaseCloudResults";
import SaseCloudFAQ from "./SaseCloudFAQ";

export default function SaseCloudSecurityClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    Metrics: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };
  const SaseClouddata = [
    {
      component: <SaseCloudEnterprise />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <SaseCloudVigileFramework />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <SaseCloudDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <SasePatchingManagement />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <SaseCloudResults />,
      refs: sectionRefs.Metrics,
      id: "Metrics",
    },
    {
      component: <SaseCloudFAQ />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];

  return (
    <>
      <SaseCloudHeroSection />
      <SubNavbar sectionRefs={sectionRefs} data={SaseClouddata} />
    </>
  );
}
