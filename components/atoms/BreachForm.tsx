// pages/BreachFormPage.tsx
import React, { useState } from "react";

// Add all missing imports and state declarations at the top
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select, { OptionsOrGroups } from "react-select";
import PhoneInput from "react-phone-input-2";
import { IoCloseOutline } from "react-icons/io5";
import ReusableBtn from "./ReusableBtn";
import ScheduleForm from "./SchedulForm";

// Dummy data and state for demonstration; replace with actual logic as needed
const countryOptions: OptionsOrGroups<any, any> | undefined = [];
const serviceOptions: OptionsOrGroups<any, any> | undefined = [];
const subServiceOptions: Record<string, any[]> = {};
interface BreachFormValues {
  fullName?: string;
  companyName?: string;
  residenceCountry?: any;
  service?: any;
  subService?: any;
  email?: string;
  phoneNumber?: string;
  agree?: boolean;
}

const initialVals: BreachFormValues = {
  fullName: "",
  companyName: "",
  residenceCountry: null,
  service: null,
  subService: null,
  email: "",
  phoneNumber: "",
  agree: false,
};
const experiencingBreachValidationSchema = {};
const validationSchema = {};
const title = "Breach Form";

const BreachFormPage = () => {
  const [open, setOpen] = useState(true);
  const [from, setFrom] = useState<string | null>("breach"); // or null or other value as needed
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] =
    useState<string>("experiencingBreach");
  const [phoneCountry, setPhoneCountry] = useState<string>("us");

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            We've got your back after a{" "}
            <span className="text-blue-400 border-b-2 border-blue-400">
              breach
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            With expert response teams just a click away...
          </p>
          <ul className="space-y-4 text-gray-300">
            <li>24/7 breach investigation</li>
            <li>Personalised recovery</li>
            <li>Support with legal & regulatory obligations</li>
          </ul>
        </div>

        {/* Right side - actual inline form */}
        <ScheduleForm
          open={false}
          setOpen={function (open: boolean): void {
            throw new Error("Function not implemented.");
          }}
          title={""}
        />
      </div>
    </div>
  );
};

export default BreachFormPage;
