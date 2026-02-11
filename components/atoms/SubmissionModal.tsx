// @ts-nocheck
"use client";

import { Modal } from "flowbite-react";
import { IoCloseOutline } from "react-icons/io5";

interface SubmissionModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  formType: "contact-us" | "other";
}

const overlayTextMap = {
  vigile: "Access the VIGILE Datasheet",
  "managed-identity": "Access the Managed Identity Datasheet",
  soc: "Access the Managed Security<br />Operations Center (SOC) Datasheet",
  mdr: "Access the Managed Detection and Response Datasheet",
  sasecloudsecurity: "Access the Managed Cloud Security Datasheet",
  sase: "Access the Managed Secure Access<br />Service Edge (SASE) Datasheet",
  "email-security": "Access the Managed Email Security Datasheet",
  managed: "Access the Managed Firewall Datasheet",
  vulnerability: "Access the Managed Vulnerability and Patching Datasheet",
  "dev-secOps": "Access the Managed DevSecOps Datasheet",
  iso: "Access the ISO Audits Datasheet",
  soc2: "Access the SOC 2 Audits Datasheet",
  vapt: "Access the VAPT Datasheet",
  OptimizeDefenses: "Access the RED Teaming Datasheet",
  tpcrm: "Access the TPCRM Datasheet",
  vciso: "Access the vCISO Datasheet",
  vdpo: "Access the vDPO Datasheet",
  "incident-response": "Access the Incident Response Datasheet",
  "soc-assessment": "Access the SOC Assessment Datasheet",
  "identity-assessment": "Access the Identity Assessment Datasheet",
  "cloud-security": "Access the Cloud Security Posture Assessment Datasheet",
  "privacy-ops": "Access the Privacy Ops Datasheet",
  dspm: "Access the Data Security Posture Management Datasheet",
  dlp: "Access the Data Loss Prevention Datasheet",
  "ai-security": "Access the Security for AI Datasheet",
};

export default function SubmissionModal({
  open,
  setOpen,
  formType,
}: SubmissionModalProps) {
  const path = typeof window !== "undefined" ? window.location.pathname.split("/")[1] : "";
  const overlayText = overlayTextMap[path as keyof typeof overlayTextMap] || "";

  return (
    <Modal show={open} onClose={() => setOpen(false)} dismissible size="2xl">
      <div className="relative h-auto overflow-y-auto bg-white rounded-lg">
        <IoCloseOutline
          onClick={() => setOpen(false)}
          className="absolute top-2 right-1 lg:top-4 lg:right-5 text-[#fff] cursor-pointer h-6 lg:h-8 w-8 z-50"
        />

        <div className="relative">
          <img
            src="/images/Vulnerability/Datasheet.png"
            alt="Image"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            {formType === "contact-us" ? (
              <p className="text-[#fff] text-sm lg:text-base m-2 leading-[11.7px]">
                <span className="text-lg lg:text-2xl font-bold text-white">
                  Thank you! We will reach out to you shortly.
                </span>
              </p>
            ) : (
              <div>
                <h2
                  className="text-[#fff] text-base lg:text-xl font-bold text-center"
                  dangerouslySetInnerHTML={{ __html: overlayText }}
                />
                <p className="text-[#fff] text-[14px] font-normal text-center mt-2">
                  Download Datasheet
                </p>
              </div>
            )}
          </div>
        </div>

        {formType !== "contact-us" && path !== "" && (
          <Modal.Body>
            <div className="flex flex-col justify-center items-center gap-y-4 text-center">
              <p className="text-2xl font-bold text-gray-800">
                Thank You for Your Submission!
              </p>
              {overlayText && (
                <p className="text-sm font-normal text-gray-600">
                  Your datasheet download for{" "}
                  <a href="" className="font-semibold text-[#1A3F7E]">
                    {overlayText.replace(/<br\s*\/?>/g, " ")}
                  </a>{" "}
                  was successful! A confirmation email with the download link
                  has been sent to your inbox. The link will be valid for 10
                  mins only.
                </p>
              )}
              <p className="text-sm font-normal text-gray-600">
                If you don't receive it, please check your spam folder or reach
                out to us at{" "}
                <a
                  href="mailto:contact@stfox.com"
                  className="text-[#000] font-bold"
                >
                  contact@stfox
                </a>
                .com For any further assistance, feel free to{" "}
                <a href="" className="text-[#000] font-bold underline">
                  Contact Us.
                </a>
              </p>
            </div>
          </Modal.Body>
        )}
      </div>
    </Modal>
  );
}
