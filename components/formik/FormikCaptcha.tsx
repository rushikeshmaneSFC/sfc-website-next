"use client";

import React, { useRef } from "react";
import { useField } from "formik";
import GoogleCaptcha, { type GoogleCaptchaRef } from "@/components/common/GoogleCaptcha";

interface FormikCaptchaProps {
  name: string;
  captchaRef?: React.MutableRefObject<GoogleCaptchaRef | null>;
}


function FormikCaptcha({ name, captchaRef: parentRef }: FormikCaptchaProps) {
  const [, meta, helpers] = useField<string>(name); // ✅ FIXED

  const internalRef = useRef<GoogleCaptchaRef>(null);
  const ref = parentRef
    ? (parentRef as React.MutableRefObject<GoogleCaptchaRef | null>)
    : internalRef;

  return (
    <div className="mb-4">
      <GoogleCaptcha
        ref={ref}
        onChange={(token) => {
          helpers.setValue(token ?? "");
        }}
        onExpired={() => helpers.setValue("")}
      />
      {meta.touched && meta.error && (
        <div className="text-[#f83737] text-xs mt-1">{meta.error}</div>
      )}
    </div>
  );
}


export default FormikCaptcha;
export type { GoogleCaptchaRef } from "@/components/common/GoogleCaptcha";
