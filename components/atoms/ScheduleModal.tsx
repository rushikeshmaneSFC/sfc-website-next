// @ts-nocheck
"use client";
import { useRef, useState, useMemo, useEffect } from "react";
import { Modal } from "flowbite-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoCloseOutline } from "react-icons/io5";
import * as Yup from "yup";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CountryCode, parsePhoneNumberFromString } from "libphonenumber-js";
import countryList from "country-list";
import SubmissionModal from "./SubmissionModal";
import NewSubmissionModal from "./NewSubmissionModal";
import FormikCaptcha, {
  type GoogleCaptchaRef,
} from "@/components/formik/FormikCaptcha";
import {
  AI_SECURITY,
  CLOUD_SECURITY,
  DEV_SECOPS,
  DLP,
  DSPM,
  EMAIL_SECURITY,
  HOME,
  IDENTITY_ASSESSMENT,
  INCIDENT_RESPONSE,
  ISO,
  LANDINGPAGE,
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

const initialVals = {
  fullName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
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
];

const isCompanyEmail = (email: string) => {
  const domain = email.split("@")[1]?.toLowerCase();
  const domainName = domain?.split(".")[0];
  return domain && !freeEmailDomains.includes(domainName);
};

const experiencingBreachValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .test(
      "isCompanyEmail",
      "Enter a valid company email",
      (value) => value && isCompanyEmail(value)
    )
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .test("isValidPhoneNumber", "Invalid phone number", function (value) {
      return validatePhoneNumber(value, this.parent.residenceCountry?.value);
    }),
  captchaToken: Yup.string().required("Please verify you are not a robot"),
});

const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
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

interface ReusableBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .test(
      "isCompanyEmail",
      "Enter a valid company email",
      (value) => value && isCompanyEmail(value)
    )
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .test("isValidPhoneNumber", "Invalid phone number", function (value) {
      return validatePhoneNumber(value, this.parent.residenceCountry?.value);
    }),
  companyName: Yup.string().required("Company name is required"),
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
  countryCode: CountryCode | undefined
) => {
  const parsedNumber = parsePhoneNumberFromString(
    "+" + phoneNumber,
    countryCode
  );
  return parsedNumber && parsedNumber.isValid();
};

interface ScheduleModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  from?: string;
  isInline?: boolean;
}

export default function ScheduleModal({
  open,
  setOpen,
  title,
  from,
  isInline,
}: ScheduleModalProps) {
  const [phoneCountry, setPhoneCountry] = useState("in");
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>("");
  const [selectedOption, setSelectedOption] =
    useState<string>("experiencingBreach");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const path =
    typeof window !== "undefined" ? window.location.pathname.split("/")[1] : "";
  const captchaRef = useRef<GoogleCaptchaRef | null>(null);

  const countryOptions = useMemo(() => {
    return countryList.getData().map((country) => ({
      label: country.name,
      value: country.code.toLowerCase(),
      flag: `https://flagcdn.com/w40/${country.code.toLowerCase()}.png`,
    }));
  }, []);

  const serviceOptions = [
    { label: "Managed Services", value: "managedServices" },
    { label: "Specialised Services", value: "specialisedServices" },
    { label: "Data Services", value: "dataServices" },
    { label: "Security for AI", value: "securityForAI" },
    { label: "Cloud Engineering", value: "cloudEngineering" },
  ];

  const subServiceOptions = {
    managedServices: [
      { label: "Managed Identity", value: "managedIdentity" },
      { label: "Managed Security Operation Center (SOC)", value: "soc" },
      { label: "Managed Detection and Response", value: "mdr" },
      { label: "Managed Cloud Security", value: "cloudSecurity" },
      { label: "Managed Secure Access Service Edge (SASE)", value: "sase" },
      { label: "Managed Email Security", value: "emailSecurity" },
      { label: "Managed Firewall", value: "firewall" },
      { label: "Managed Vulnerability and Patching", value: "vulnerability" },
      { label: "Managed DevSecOps", value: "devSecOps" },
      { label: "Managed Breach Attack Simulation", value: "breachSimulation" },
    ],
    specialisedServices: [
      { label: "ISO Audits", value: "isoAudits" },
      { label: "SOC2 Audits", value: "soc2Audits" },
      { label: "VAPT", value: "vapt" },
      { label: "Red Teaming", value: "redTeaming" },
      { label: "TPCRM", value: "tpcrm" },
      { label: "vCISO", value: "vciso" },
      { label: "vDPO", value: "vdpo" },
      { label: "Incident Response", value: "incidentResponse" },
      { label: "SOC Assessment", value: "socAssessment" },
      { label: "Identity Assessment", value: "identityAssessment" },
      { label: "Cloud Security Posture Assessment", value: "cloudAssessment" },
    ],
    dataServices: [
      { label: "Privacy Ops", value: "privacyOps" },
      { label: "Data Security Posture and Management", value: "dataPosture" },
      { label: "Data Loss Prevention", value: "dataLossPrevention" },
    ],
  };
  const handleSubmit = async (
    values: typeof initialVals,
    formikHelpers: { resetForm: () => void }
  ) => {

    if (!values.captchaToken) {
      return;
    }
    const { resetForm } = formikHelpers;
    const apiEndpoint = `${API_BASE_URL}/api/services/enroll`;
    const experiencingBreach = `${API_BASE_URL}/api/breached`;

    let payload;
    if (from && selectedOption === "experiencingBreach") {
      payload = {
        email: values.email,
        phone_number: "+" + values.phoneNumber,
        extension: "+91",
      };
      try {
        payload.captchaToken = values.captchaToken ;
        const response = await postWithCsrf(experiencingBreach, payload);

        if (response.ok) {
          const data = await response.json();

          setSubmissionModalOpen(true);
          setModalType(
            title === "Contact Us" ? "contact-us" : "new-submission"
          );
          resetForm();
          captchaRef.current?.reset();
        } else {
          console.error("Failed to submit form:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Request failed. Please try again.");
      }
      setOpen(false);
    } else if (selectedOption === "contactForService") {
      const PAYLOAD = {
        name: values.fullName,
        email: values.email,
        phone_number: "+" + values.phoneNumber,
        extension: "+91",
        company_name: values.companyName,
        country: values.residenceCountry?.label,
        serviceName: values.subService?.label,
        captchaToken :values.captchaToken
      };
      payload = PAYLOAD;

      try {
        const response = await postWithCsrf(apiEndpoint, payload);

        if (response.ok) {
          const data = await response.json();
          // console.log("API Response:", data);

          setSubmissionModalOpen(true);
          setModalType(
            title === "Contact Us" ? "contact-us" : "new-submission"
          );
          resetForm();
          captchaRef.current?.reset();
        } else {
          console.error("Failed to submit form:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Request failed. Please try again.");
      }
      setOpen(false);
    } else if (
      title === "Schedule a Free Demo" ||
      title === "Schedule a Free Consultation" ||
      title === "Schedule a Free Assessment" ||
      title === "Schedule Now" ||
      title === "Contact Us" ||
      title === "Talk to an ISO Expert" ||
      title === "Request a Demo" ||
      title === "Talk to a SOC 2 Expert" ||
      title === "Talk to a SASE Expert" ||
      title === "Talk to an Email Security Expert" ||
      title === "Talk to a Firewall Expert" ||
      title === "Talk to a vCISO Expert" ||
      title === "Talk to a Data Protection Expert" ||
      title === "Talk to an Incident Response Expert" ||
      title === "Talk to a SOC Optimization Expert" ||
      title === "Talk to an IAM Expert" ||
      title === "Talk to a Privacy Expert" ||
      title === "Talk to a Data Security Expert" ||
      title === "Talk to a Patching Expert" ||
      title == "Talk to a Cloud Security Expert" ||
      title == "Talk to an AI Security Expert" ||
      title == "Talk to a Teaming Expert" ||
      title == "Talk to an Expert"
    ) {
      const serviceName =
        path === "managed-identity"
          ? MANAGE_IDENTITY
          : path === "/"
          ? LANDINGPAGE
          : path === "vigile"
          ? VIGILE
          : path === "soc"
          ? SOC
          : path === "mdr"
          ? MDR
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
          : "";
      // console.log(serviceName);

      const PAYLOAD = {
        name: values.fullName,
        email: values.email,
        phone_number: "+" + values.phoneNumber,
        extension: "+91",
        company_name: values.companyName,
        country: values.residenceCountry?.label,
        serviceName:
          serviceName === ""
            ? LANDINGPAGE
            : serviceName || values.subService?.label || "",
        type: "getintouch",
        captchaToken : values.captchaToken
      };

      payload = PAYLOAD;

      try {
        const response = await postWithCsrf(apiEndpoint, payload);

        if (response.ok) {
          const data = await response.json();
          // console.log("API Response:", data);

          setSubmissionModalOpen(true);
          setModalType(
            title === "Contact Us" ? "contact-us" : "new-submission"
          );
          resetForm();
          captchaRef.current?.reset();
        } else {
          console.error("Failed to submit form:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Request failed. Please try again.");
      }

      setOpen(false);
    }
  };

  return (
    <>
      {isInline ? (
        <div className="relative bg-white rounded-lg overflow-auto md:h-[500px] 2xl:h-auto">
          <div className="flex justify-between mx-4 my-2 ">
            <p className="lg:text-2xl text-xl font-semibold mb-4">{title}</p>
          </div>

          <div className="mx-4 ">
            <Formik
              initialValues={initialVals}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ setFieldValue, values, isSubmitting }) => (
                <Form>
                  <div className="mb-4 ">
                    <label className="block text-xs lg:text-sm font-medium">
                      Full Name *
                    </label>
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Enter full name"
                      className="w-full border rounded-lg mt-1 border-black text-xs lg:text-sm"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-[#f83737] text-xs"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs lg:text-sm font-medium">
                      Company Name *
                    </label>
                    <Field
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Company name"
                      className="w-full border border-black rounded-lg p-2 mt-1 text-xs lg:text-sm"
                    />
                    <ErrorMessage
                      name="companyName"
                      component="div"
                      className="text-[#f83737] text-xs"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs lg:text-sm font-medium">
                      Country *
                    </label>
                    <Select
                      options={countryOptions}
                      value={values.residenceCountry}
                      onChange={(selectedOption) => {
                        setFieldValue("residenceCountry", selectedOption);
                      }}
                      className="w-full rounded-lg mt-1 text-xs lg:text-sm"
                      styles={{
                        control: (base) => ({
                          ...base,
                          borderRadius: "8px",
                          borderWidth: "0.1px",
                          borderColor: "black",
                          boxShadow: "none",
                          "&:hover": {
                            borderColor: "black",
                          },
                        }),
                      }}
                    />
                    <ErrorMessage
                      name="residenceCountry"
                      component="div"
                      className="text-[#f83737] text-xs"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs lg:text-sm font-medium">
                      Services *
                    </label>
                    <Select
                      options={serviceOptions}
                      value={values.service}
                      onChange={(selectedOption) => {
                        setFieldValue("service", selectedOption);
                        setSelectedService(selectedOption?.value || null);
                        setFieldValue("subService", null);
                      }}
                      className="w-full rounded-lg mt-1 text-xs lg:text-sm"
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
                    />
                    <ErrorMessage
                      name="service"
                      component="div"
                      className="text-[#f83737] text-xs"
                    />
                  </div>

                  {selectedService && subServiceOptions[selectedService] && (
                    <div className="mb-4">
                      <label className="block text-xs lg:text-sm font-medium">
                        Sub-Services *
                      </label>
                      <Select
                        options={subServiceOptions[selectedService]}
                        value={values.subService}
                        onChange={(selectedOption) => {
                          setFieldValue("subService", selectedOption);
                        }}
                        className="w-full rounded-lg mt-1 text-xs lg:text-sm"
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
                      />
                      <ErrorMessage
                        name="subService"
                        component="div"
                        className="text-[#f83737] text-xs"
                      />
                    </div>
                  )}

                  <div className="mb-4">
                    <label className="block text-xs lg:text-sm font-medium">
                      Company Email *
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full border border-black rounded-lg p-2 mt-1 text-xs lg:text-sm"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-[#f83737] text-xs"
                    />
                  </div>

                  <div className="mb-1">
                    <label className="block text-xs lg:text-sm font-medium">
                      Phone Number *
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
                      containerClass="w-full mt-1 text-xs lg:text-sm"
                      inputClass="text-xs lg:text-sm lg:p-[15px]"
                      buttonClass="!flex !items-center [&_.arrow]:ml-1"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-[#f83737] text-xs mt-1"
                    />
                  </div>

                  <div className="mb-2">
                    <p className="text-xs lg:text-sm mt-4">
                      By submitting your personal information to St. Fox, you
                      are agreeing to St. Fox’s{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        className="text-[#1A3F7E] font-medium text-sm underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>

                  <div className="mb-2 flex items-center">
                    <Field
                      type="checkbox"
                      id="agree"
                      name="agree"
                      className="mr-2 rounded-sm"
                    />
                    <label htmlFor="agree" className="text-xs lg:text-sm my-2">
                      Yes, I agree *
                    </label>
                    <ErrorMessage
                      name="agree"
                      component="div"
                      className="text-[#f83737] text-xs ml-2"
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
          </div>
        </div>
      ) : (
        <Modal
          show={open}
          onClose={() => setOpen(false)}
          dismissible
          size="3xl"
        >
          <div className="lg:py-6 lg:px-12 px-3 py-6 relative bg-white rounded-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between mx-4 my-2">
              <p className="lg:text-2xl text-xl font-semibold mb-4">
                {from === "breach" ? "Connect with Us" : title}
              </p>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setSelectedService(null);
                }}
              >
                <IoCloseOutline className="text-[#000] hover:text-red-600 cursor-pointer h-5 w-5" />
              </button>
            </div>

            {from === "breach" && (
              <div className="mx-4 mb-4">
                <p className="lg:text-lg text-md font-medium mb-2">
                  How can we help you?
                </p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="breachOptions"
                      value="experiencingBreach"
                      checked={selectedOption === "experiencingBreach"}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="w-4 h-4 shrink-0 appearance-none rounded-full border-2 border-gray-300 bg-white cursor-pointer checked:border-[#1A3F7E] checked:bg-[radial-gradient(circle_at_center,_white_32%,_#1A3F7E_32%)] focus:outline-none focus:ring-2 focus:ring-[#1A3F7E] focus:ring-offset-1"
                    />
                    <span className="text-sm lg:text-md">
                      Experiencing a Breach?
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="breachOptions"
                      value="contactForService"
                      checked={selectedOption === "contactForService"}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="w-4 h-4 shrink-0 appearance-none rounded-full border-2 border-gray-300 bg-white cursor-pointer checked:border-[#1A3F7E] checked:bg-[radial-gradient(circle_at_center,_white_32%,_#1A3F7E_32%)] focus:outline-none focus:ring-2 focus:ring-[#1A3F7E] focus:ring-offset-1"
                    />
                    <span className="text-sm lg:text-md">
                      Contact us for a Service
                    </span>
                  </label>
                </div>
              </div>
            )}

            <div className="mx-4">
              <Formik
                initialValues={initialVals}
                validationSchema={
                  from && selectedOption === "experiencingBreach"
                    ? experiencingBreachValidationSchema
                    : validationSchema
                }
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({ setFieldValue, values, isSubmitting, errors }) => {
                  return (
                    <Form>
                      {(selectedOption === "contactForService" || !from) && (
                        <>
                          <div className="mb-4">
                            <label className="block  text-xs lg:text-sm font-medium">
                              Full Name *
                            </label>
                            <Field
                              type="text"
                              name="fullName"
                              placeholder="Enter full name"
                              className="w-full border rounded-lg mt-1 border-black text-xs lg:text-sm"
                            />
                            <ErrorMessage
                              name="fullName"
                              component="div"
                              className="text-[#f83737] text-xs"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-xs lg:text-sm font-medium">
                              Company Name *
                            </label>
                            <Field
                              type="text"
                              id="companyName"
                              name="companyName"
                              placeholder="Company name"
                              className="w-full border border-black rounded-lg p-2 mt-1  text-xs lg:text-sm"
                            />
                            <ErrorMessage
                              name="companyName"
                              component="div"
                              className="text-[#f83737] text-xs"
                            />
                          </div>

                          <div className="mb-4">
                            <label className="block text-xs lg:text-sm font-medium">
                              Country *
                            </label>
                            <Select
                              options={countryOptions}
                              value={values.residenceCountry}
                              onChange={(selectedOption) => {
                                setFieldValue(
                                  "residenceCountry",
                                  selectedOption
                                );
                              }}
                              className="w-full rounded-lg mt-1 text-xs lg:text-sm "
                              styles={{
                                control: (base) => ({
                                  ...base,
                                  borderRadius: "8px",
                                  borderWidth: "0.1px",
                                  borderColor: "black",
                                  boxShadow: "none",
                                  "&:hover": {
                                    borderColor: "black",
                                  },
                                }),
                              }}
                            />
                            <ErrorMessage
                              name="residenceCountry"
                              component="div"
                              className="text-[#f83737] text-xs"
                            />
                          </div>
                          {from && (
                            <div className="mb-4">
                              <label className="block text-xs lg:text-sm font-medium">
                                Services *
                              </label>
                              <Select
                                options={serviceOptions}
                                value={values.service}
                                onChange={(selectedOption) => {
                                  setFieldValue("service", selectedOption);
                                  setSelectedService(
                                    selectedOption?.value || null
                                  );

                                  setFieldValue("subService", null);
                                }}
                                className="w-full rounded-lg mt-1 text-xs lg:text-sm"
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
                              />
                              <ErrorMessage
                                name="service"
                                component="div"
                                className="text-[#f83737] text-xs"
                              />
                            </div>
                          )}
                          {selectedService &&
                            subServiceOptions[selectedService] && (
                              <div className="mb-4">
                                <label className="block text-xs lg:text-sm font-medium">
                                  Sub-Services *
                                </label>
                                <Select
                                  options={subServiceOptions[selectedService]}
                                  value={values.subService}
                                  onChange={(selectedOption) => {
                                    setFieldValue("subService", selectedOption);
                                  }}
                                  className="w-full rounded-lg mt-1text-xs lg:text-sm"
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
                                />
                                <ErrorMessage
                                  name="subService"
                                  component="div"
                                  className="text-[#f83737] text-xs"
                                />
                              </div>
                            )}
                        </>
                      )}

                      <div className="mb-4">
                        <label className="block text-xs lg:text-sm font-medium">
                          Company Email *
                        </label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="w-full border border-black rounded-lg p-2 mt-1 text-xs lg:text-sm"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-[#f83737] text-xs"
                        />
                      </div>

                      <div className="mb-1 ">
                        <label className="block text-xs lg:text-sm font-medium ">
                          Phone Number *
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
                          containerClass="w-full mt-1 text-xs lg:text-sm "
                          inputClass="text-xs lg:text-sm lg:p-[15px]"
                          buttonClass="!flex !items-center [&_.arrow]:ml-1"
                        />
                        <ErrorMessage
                          name="phoneNumber"
                          component="div"
                          className="text-[#f83737] text-xs mt-1"
                        />
                      </div>
                      <div className="mb-2">
                        <p className="text-xs lg:text-sm mt-4 ">
                          By submitting your personal information to St. Fox,
                          you are agreeing to St. Fox’s{" "}
                          <a
                            href="/privacy-policy"
                            target="_blank"
                            className="text-[#1A3F7E] font-medium text-sm underline"
                          >
                            Privacy Policy{" "}
                          </a>
                          on how your information may be used.
                        </p>
                      </div>
                      <div className="mb-2 flex items-center">
                        <Field
                          type="checkbox"
                          id="agree"
                          name="agree"
                          className="mr-2 rounded-sm"
                        />
                        <label
                          htmlFor="agree"
                          className="text-xs lg:text-sm my-2"
                        >
                          Yes, I agree *
                        </label>
                        <ErrorMessage
                          name="agree"
                          component="div"
                          className="text-[#f83737] text-xs ml-2"
                        />
                      </div>

                      <FormikCaptcha
                        name="captchaToken"
                        captchaRef={captchaRef}
                      />
                      <ReusableBtn
                        type="submit"
                        isLoading={isSubmitting}
                        disabled={isSubmitting}
                        className="bg-[#1A3F7E] flex gap-3 font-medium text-base text-[#fff] lg:col-span-6 col-span-12 py-3 px-5 rounded-lg"
                      >
                        {title === "Contact Us"
                          ? "Submit"
                          : !from
                          ? "Schedule Assessment"
                          : "Submit"}
                      </ReusableBtn>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </Modal>
      )}
      {modalType === "contact-us" ? (
        <SubmissionModal
          open={submissionModalOpen}
          setOpen={setSubmissionModalOpen}
          formType={"contact-us"}
        />
      ) : (
        <NewSubmissionModal
          open={submissionModalOpen}
          setOpen={setSubmissionModalOpen}
        />
      )}
    </>
  );
}
