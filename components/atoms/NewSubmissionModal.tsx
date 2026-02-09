// @ts-nocheck
"use client";
import { Modal } from "flowbite-react";
import { IoCloseOutline } from "react-icons/io5";
import ReusableBtn from "./ReusableBtn";
import { SubIcon } from "@/constants/SvgConstant";
import { useNavigate } from "react-router";

interface NewSubmissionModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface NewSubmissionModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function NewSubmissionModal({
  open,
  setOpen,
}: NewSubmissionModalProps) {
  const navigate = useNavigate();

  const overlayTextMap = {
    "managed-identity": "Free Managed Identity Assessment",
    soc: "Free Security Operations Center (SOC) Assessment",
    mdr: "Free Managed Detection and Response Assessment",
    sasecloudsecurity: "Free Cloud Security Assessment",
    sase: "Free Secure Access Service Edge (SASE) Assessment",
    "email-security": "Free Email Security Assessment",
    "managed-firewall": "Free Managed Firewall Assessment",
    vulnerability: "Free Vulnerability and Patching Assessment",
    "dev-secOps": "Free DevSecOps Assessment",
    iso: "Free ISO Audits Assessment",
    soc2: "Free SOC 2 Audits Assessment",
    vapt: "Free VAPT Assessment",
    OptimizeDefenses: "Free Red Teaming Assessment",
    tpcrm: "Free TPCRM Assessment",
    vciso: "Free vCISO Assessment",
    vdpo: "Free vDPO Assessment",
    "incident-response": "Free Incident Response Assessment",
    "soc-assessment": "Free SOC Assessment",
    "identity-assessment": "Free Identity Assessment",
    "cloud-security": "Free Cloud Security Posture Assessment",
    "privacy-ops": "Free Privacy Operations Assessment",
    dspm: "Free Data Security Posture Management Assessment",
    dlp: "Free Data Loss Prevention Assessment",
    "ai-security": "Free AI Security Assessment",
  };
  const path = typeof window !== "undefined" ? window.location.pathname.split("/")[1] : "";
  const overlayText = overlayTextMap[path as keyof typeof overlayTextMap] || "";
  return (
    <Modal show={open} onClose={() => setOpen(false)} dismissible size="2xl">
      <div className="relative h-auto overflow-y-auto bg-white rounded-lg ">
        <IoCloseOutline
          onClick={() => setOpen(false)}
          className="absolute top-2 right-1 lg:top-4 lg:right-5 text-[#fff] cursor-pointer h-6 lg:h-8 w-8 z-50"
        />

        <div className="relative">
          <img
            src="/images/Vulnerability/Datasheet.png"
            alt="Image"
            className="lg:h-full h-[184px] w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-start bg-black bg-opacity-50 text-[#fff] px-7 lg:px-10 md:px-10">
            <div className="flex flex-col lg:h-[184px]  lg:py-10">
              <p className="lg:text-xl text-base font-extralight ">
                Your request for a{" "}
                <span className="font-extrabold">{overlayText}</span> has been
                received
              </p>
              <p className="text-sm mt-2 font-normal">
                Our security experts will review your details and reach out
                shortly.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 ">
          <p className="text-2xl font-bold relative lg:right-[103px] md:right-[107px] ">
            Next Steps:
          </p>
        </div>

        <Modal.Body>
          <div className="flex flex-col justify-center items-center gap-y-4 lg:text-center ">
            <div>
              <ul className="text-sm font-normal  list-none space-y-1">
                <li className="flex items-center gap-2 whitespace-nowrap">
                  <SubIcon /> Expect a call or email within 24-48 hours
                </li>

                <li className="flex items-center gap-2 whitespace-nowrap">
                  <SubIcon /> Keep eye on your inbox for security insights
                </li>
                <li className="flex items-center gap-2 whitespace-nowrap">
                  <SubIcon /> Explore Our Security Solutions
                </li>
              </ul>
              <div className="flex gap-4 mt-10 justify-center">
                <ReusableBtn
                  type={"button"}
                  name={"Explore Services"}
                  className="px-4 py-2 bg-[#1A3F7E] text-[#fff] rounded-lg "
                  onClick={() => navigate("/")}
                />

                <ReusableBtn
                  type={"button"}
                  name={"Dismiss"}
                  className="px-4 py-2 bg-[#E5E7EB] rounded-lg"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}
