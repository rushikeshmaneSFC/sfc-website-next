"use client";

import { useRef } from "react";
import SubNavbar from "@/components/atoms/SubNavbar";
import SaseManagedFirewallHero from "./SaseManagedFirewallHero";
import CyberThreats from "./CyberThreats";
import Vigile from "./Vigile";
import FirewallDatasheet from "./FirewallDatasheet";
import FirewallManagement from "./FirewallManagement";
import FortifyNetwork from "./FortifyNetwork";
import SecurityNeeds from "./SecurityNeeds";

export default function ManagedFirewallClient() {
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    VIGILE: useRef<HTMLDivElement>(null),
    Datasheet: useRef<HTMLDivElement>(null),
    Whyus: useRef<HTMLDivElement>(null),
    FAQs: useRef<HTMLDivElement>(null),
  };
  const Managedfirewalldata = [
    {
      component: <SecurityNeeds />,
      refs: sectionRefs.Introduction,
      id: "Introduction",
    },
    {
      component: <Vigile />,
      refs: sectionRefs.VIGILE,
      id: "VIGILE",
    },
    {
      component: <FirewallDatasheet />,
      refs: sectionRefs.Datasheet,
      id: "Datasheet",
    },
    {
      component: <FirewallManagement />,
      refs: sectionRefs.Whyus,
      id: "Whyus?",
    },
    {
      component: <FortifyNetwork />,
      refs: sectionRefs.FAQs,
      id: "FAQs",
    },
  ];
  return (
    <>
      <SaseManagedFirewallHero />
      <CyberThreats />
      <SubNavbar sectionRefs={sectionRefs} data={Managedfirewalldata} />
    </>
  );
}
