// @ts-nocheck
"use client";
import { Modal, ModalBody } from "flowbite-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoCloseOutline } from "react-icons/io5";
import * as Yup from "yup";
import { useState, useMemo, useRef } from "react";
import Select from "react-select";
import FormikCaptcha, { type GoogleCaptchaRef } from "@/components/formik/FormikCaptcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CountryCode, parsePhoneNumberFromString } from "libphonenumber-js";
import countryList from "country-list";
// import { useLocation } from "react-router";
import { usePathname } from "next/navigation"; 
import {
  AI_SECURITY,
  CLOUD_SECURITY,
  DEV_SECOPS,
  DLP,
  DSPM,
  EMAIL_SECURITY,
  IDENTITY_ASSESSMENT,
  INCIDENT_RESPONSE,
  ISO,
  MANAGE_FIREWALL,
  MANAGE_IDENTITY,
  MDR,
  OPTIMIZE_DEFENSES,
  PRIVACY_OPS,
  SASE,
  SASECLOUD_SECURITY,
  SOC,
  SOC2,
  SOC_ASSESSMENT,
  TPCRM,
  VAPT,
  VCISO,
  VDPO,
  VIGILE,
  VULNERABILITY,
} from "@/constants/RouteConstant";
import { postWithCsrf } from "@/lib/api";
import { API_BASE_URL } from "@/lib/config";
import SubmissionModal from "./SubmissionModal";

const Spinner = () => (
  <svg
    className=" animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
    />
  </svg>
);
interface ReusableBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

const ReusableBtn = ({
  disabled,
  isLoading,
  children,
  ...props
}: ReusableBtnProps) => (
  <button
    className={`bg-[#1A3F7E] text-white font-medium py-3 px-5 rounded-lg flex items-center justify-center ${
      disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#15305d]"
    }`}
    disabled={disabled}
    {...props}
  >
    {isLoading && <Spinner />}
    {children}
  </button>
);
const initialVals = {
  fullName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  jobTitle: "",
  residenceCountry: null,
  agree: false,
  captchaToken: "",
};

const freeEmailDomains = [
  "gmail",
  "yahoo",
  "hotmail",
  "outlook",
  "aol",
  "icloud",
  "protonmail",
  "mail",
  "gmx",
  "yandex",
  "zoho",
  "msn",
  "live",
  "inbox",
  "me",
  "rocketmail",
  "",
];

const isCompanyEmail = (email: string) => {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain && freeEmailDomains.includes(domain.split(".")[0]);
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),

  email: Yup.string()

    .required("Company email is required")
    .test(
      "isCompanyEmail",
      "Please use a company email, not a free email provider",
      function (value) {
        if (isCompanyEmail(value)) {
          return false;
        }
        return true;
      },
    ),

  phoneNumber: Yup.string()
    .required("Phone number is required")
    .test("isValidPhoneNumber", "Invalid phone number", function (value) {
      return validatePhoneNumber(value, this.parent.residenceCountry?.value);
    }),

  companyName: Yup.string().required("Company name is required"),

  jobTitle: Yup.string().required("Job title is required"),

  residenceCountry: Yup.object()
    .nullable()
    .required("Residence country is required"),

  agree: Yup.boolean()
    .oneOf([true], "You must agree to the terms")
    .required("Required"),
  captchaToken: Yup.string().required("Please verify you are not a robot"),
});

const validatePhoneNumber = (
  phoneNumber: string,
  countryCode: CountryCode | undefined,
) => {
  const parsedNumber = parsePhoneNumberFromString(
    "+" + phoneNumber,
    countryCode,
  );
  return parsedNumber && parsedNumber.isValid();
};

interface CustomModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const overlayTextMap = {
  vigile: "Access the Vigile Framework Datasheet",
  "managed-identity": "Access the Managed Identity Datasheet",
  soc: "Access the SOC 2 Audits Datasheet",
  mdr: "Access the Managed Detection and Response Datasheet",
  sasecloudsecurity: "Access the Managed Cloud Security Datasheet",
  sase: "Access the Managed Secure Access Service Edge (SASE) Datasheet",
  "email-security": "Access the Managed Email Security Datasheet",
  managed: "Access the Managed Firewall Datasheet",
  vulnerability: "Access the Managed Vulnerability and Patching Datasheet",
  "dev-secOps": "Access the Managed DevSecOps Datasheet",
  iso: "Access the ISO Audits Datasheet",
  soc2: "Access the  Managed Security<br />Operations Center (SOC) Datasheet",
  vapt: "Access the VAPT Datasheet",
  OptimizeDefenses: "Access the RED Teaming Datasheet",
  tpcrm: "Access the TPCRM Datasheet",
  vciso: "Access the vCISO Datasheet",
  vdpo: "Access the vDPO Datasheet",
  "incident-response": "Access the Incident Response Datasheet",
  "soc-assessment": "Access the SOC Assessment Datasheet",
  "cloud-security": "Access the Cloud Security Posture Assessment Datasheet",
  "privacy-ops": "Access the Privacy Ops Datasheet",
  dspm: "Access the Data Security Posture Management Datasheet",
  dlp: "Access the Data Loss Prevention Datasheet",
  "ai-security": "Access the Security for AI Datasheet",
  "identity-assessment": "Access the Identity Assessment Datasheet",
};
export default function   CustomModal({ open, setOpen }: CustomModalProps) {
  const pathname = usePathname();  
  
  const [phoneCountry, setPhoneCountry] = useState("in");
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);
  const captchaRef = useRef<GoogleCaptchaRef | null>(null);

  const countryOptions = useMemo(() => {
    return countryList.getData().map((country: any) => ({
      label: country.name,
      value: country.code.toLowerCase(),
      flag: `https://flagcdn.com/w40/${country.code.toLowerCase()}.png`,
    }));
  }, []);

  const formatOptionLabel = ({
    label,
    flag,
  }: {
    label: string;
    flag: string;
  }) => (
    <div className="flex items-center gap-2">
      <img loading="lazy" src={flag} alt={label} className="w-6 h-4" />
      <span>{label}</span>
    </div>
  );

  const path = pathname?.split("/")?.[1] || "";

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    if (!values.captchaToken) {
      setSubmitting(false);
      return;
    }
    setSubmitting(true);
    const cleanedPhoneNumber = values.phoneNumber.replace(/^(\+?\d{1,2})/, "");
    const payload = {
      name: values.fullName,
      email: values.email,
      phone_number: cleanedPhoneNumber,
      extension: "+" + values.phoneNumber.slice(0, 2),
      company_name: values.companyName,
      job_title: values.jobTitle,
      ContentCategoryId: "1",
      serviceId: "1",
      country: values.residenceCountry?.label,
      serviceName:
        path === "managed-identity"
          ? MANAGE_IDENTITY
          : path === "soc"
            ? SOC
            : path === "mdr"
              ? MDR
              : path === "vigile"
                ? VIGILE
                : path === "sasecloudsecurity"
                  ? SASECLOUD_SECURITY
                  : path === "sase"
                    ? SASE
                    : path === "email-security"
                      ? EMAIL_SECURITY
                      : path === "managed"
                        ? MANAGE_FIREWALL
                        : path === "vulnerability"
                          ? VULNERABILITY
                          : path === "dev-secOps"
                            ? DEV_SECOPS
                            : path === "iso"
                              ? ISO
                              : path === "soc2"
                                ? SOC2
                                : path === "vapt"
                                  ? VAPT
                                  : path === "OptimizeDefenses"
                                    ? OPTIMIZE_DEFENSES
                                    : path === "tpcrm"
                                      ? TPCRM
                                      : path === "vciso"
                                        ? VCISO
                                        : path === "vdpo"
                                          ? VDPO
                                          : path === "incident-response"
                                            ? INCIDENT_RESPONSE
                                            : path === "soc-assessment"
                                              ? SOC_ASSESSMENT
                                              : path === "identity-assessment"
                                                ? IDENTITY_ASSESSMENT
                                                : path === "cloud-security"
                                                  ? CLOUD_SECURITY
                                                  : path === "privacy-ops"
                                                    ? PRIVACY_OPS
                                                    : path === "dspm"
                                                      ? DSPM
                                                      : path === "dlp"
                                                        ? DLP
                                                        : path === "ai-security"
                                                          ? AI_SECURITY
                                                          : "",
    };
    payload.captchaToken = values.captchaToken ;
    try {
      const response = await postWithCsrf(
        `${API_BASE_URL}/api/services/enroll`,
        payload
      );

      const data = await response.json();
      // console.log("API Response:", data);

      if (response.ok) {
        alert("Form submitted successfully!");
        setSubmissionModalOpen(true);
        setOpen(false);
        resetForm();
        captchaRef.current?.reset();
      } else {
        alert("Submission failed. Please try again later.");
        setOpen(false);
        setSubmissionModalOpen(false);
      }
    } catch (error) {
      console.error("Error during API request:", error);
      alert("Something went wrong. Please try again later.");
      setOpen(false);
      setSubmissionModalOpen(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)} dismissible size="3xl">
        <div className="relative 2xl:h-auto lg:h-[550px] md:h-auto h-auto overflow-y-auto bg-white rounded-lg">
          <IoCloseOutline
            onClick={() => setOpen(false)}
            className="absolute top-2 right-1 lg:top-4 lg:right-5 text-[#fff] cursor-pointer h-6 lg:h-8 w-8 z-50"
          />
          <div className="relative">
            <img
              loading="lazy"
              src="/images/Vulnerability/Datasheet.png"
              alt="Image"
              className="h-auto w-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
                <h2
                  className="text-[#fff] text-base lg:text-xl font-bold text-center"
                  dangerouslySetInnerHTML={{
                    __html:
                      overlayTextMap[path as keyof typeof overlayTextMap] ||
                      " ",
                  }}
                />

                <p className="text-[#fff] text-sm lg:text-base m-2 leading-[11.7px]">
                  {path === "" ? "" : "Download Datasheet"}
                </p>
              </div>
            </div>
          </div>

          <ModalBody>
            <Formik
              initialValues={initialVals}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, values, isSubmitting }) => (
                <Form className="w-full">
                  <div className="mb-4">
                    <label className="block font-medium text-sm">
                      Full Name {""}
                      <span className="text-[#f83737]">*</span>
                    </label>
                    <Field
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter full name"
                      className="w-full border rounded-lg p-2 mt-1"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-[#f83737] text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-medium text-sm">
                      Company Email {""}
                      <span className="text-[#f83737]">*</span>
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      className="w-full border rounded-lg p-2 mt-1"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-[#f83737] text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-medium  text-sm">
                      Phone Number {""}
                      <span className="text-[#f83737]">*</span>
                    </label>
                    <PhoneInput
                      country={phoneCountry}
                      enableSearch
                      value={values.phoneNumber}
                      onChange={(phone, country) => {
                        if (country && "countryCode" in country) {
                          setPhoneCountry(country.countryCode);
                        }
                        setFieldValue("phoneNumber", phone);
                      }}
                      inputStyle={{
                        width: "100%",
                        borderRadius: "8px",
                        border: "0.7px solid #000",
                        fontSize: "14px",
                        paddingLeft: "55px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        paddingRight: "12px",
                        height: "40px",
                      }}
                      buttonStyle={{
                        border: "none",
                        background: "transparent",
                        left: "8px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        position: "absolute",
                      }}
                      containerStyle={{
                        position: "relative",
                        width: "100%",
                      }}
                      containerClass="w-full mt-1"
                      inputClass="text-xs lg:text-sm lg:p-[15px]"
                      buttonClass="!flex !items-center [&_.arrow]:ml-1 "
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-[#f83737] text-sm mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-medium text-sm">
                      Company Name {""}
                      <span className="text-[#f83737]">*</span>
                    </label>
                    <Field
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Company name"
                      className="w-full border rounded-lg p-2 mt-1"
                    />
                    <ErrorMessage
                      name="companyName"
                      component="div"
                      className="text-[#f83737] text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-medium text-sm">
                      Job Title {""}
                      <span className="text-[#f83737]">*</span>
                    </label>
                    <Field
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      placeholder="e.g. CEO, CTO, CISO"
                      className="w-full border rounded-lg p-2 mt-1"
                    />
                    <ErrorMessage
                      name="jobTitle"
                      component="div"
                      className="text-[#f83737] text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-medium text-sm">
                      Country {""}
                      <span className="text-[#f83737]">*</span>
                    </label>
                    <Select
                      options={countryOptions}
                      value={values.residenceCountry}
                      onChange={(selectedOption) => {
                        setFieldValue("residenceCountry", selectedOption);
                      }}
                      className="w-full rounded-lg mt-1 "
                      styles={{
                        control: (base) => ({
                          ...base,
                          borderWidth: "0.1px",
                          borderColor: "black",
                          boxShadow: "none",
                          "&:hover": {
                            borderColor: "black",
                          },
                        }),
                      }}
                      formatOptionLabel={formatOptionLabel}
                    />
                    <ErrorMessage
                      name="residenceCountry"
                      component="div"
                      className="text-[#f83737] text-sm"
                    />
                  </div>
                  <div className="mb-2">
                    <p className="text-xs font-medium">
                      By submitting your personal information to St. Fox, you
                      are agreeing to St. Fox’s{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        className="text-[#1A3F7E] underline "
                      >
                        Privacy Policy{" "}
                      </a>
                      on how your information may be used.
                    </p>
                  </div>
                  <div className="mb-6 flex items-center">
                    <Field
                      type="checkbox"
                      id="agree"
                      name="agree"
                      className="mr-2 rounded-sm"
                    />
                    <label htmlFor="agree" className="text-xs font-medium">
                      Yes, I agree {""}
                      <span className="text-[#f83737]">*</span>
                    </label>
                    <ErrorMessage
                      name="agree"
                      component="div"
                      className="text-[#f83737] text-sm ml-2"
                    />
                  </div>
                  <FormikCaptcha name="captchaToken" captchaRef={captchaRef} />
                  <ReusableBtn
                    type="submit"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    className="bg-[#1A3F7E] flex gap-3 font-medium text-base text-[#fff] lg:col-span-6 col-span-12 py-3 px-5 rounded-lg"
                  >
                    Submit
                  </ReusableBtn>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </div>
      </Modal>
      <SubmissionModal
        open={submissionModalOpen}
        setOpen={setSubmissionModalOpen}
      />
    </>
  );
}
