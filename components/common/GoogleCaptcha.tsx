"use client";

import React, { useRef, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ;

export interface GoogleCaptchaRef {
  reset: () => void;
  getValue: () => string | null;
}

export interface GoogleCaptchaProps {
  value?: string;
  onChange: (token: string | null) => void;
  onExpired?: () => void;
  ref?: React.Ref<GoogleCaptchaRef>;
}

const GoogleCaptchaComponent = (
  { onChange, onExpired }: Omit<GoogleCaptchaProps, "value">,
  ref: React.Ref<GoogleCaptchaRef>,
) => {
  const recaptchaRef = useRef<any>(null);

  const handleChange = useCallback(
    (token: string | null) => {
      onChange(token);
    },
    [onChange],
  );

  const handleExpired = useCallback(() => {
    onChange(null);
    onExpired?.();
  }, [onChange, onExpired]);

  React.useImperativeHandle(
    ref,
    () => ({
      reset: () => {
        recaptchaRef.current?.reset();
        onChange(null);
      },
      getValue: () => recaptchaRef.current?.getValue() ?? null,
    }),
    [onChange],
  );

  if (!SITE_KEY) {
    return (
      <div className="text-xs text-amber-600 bg-amber-50 p-2 rounded">
        reCAPTCHA is not configured. Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY.
      </div>
    );
  }

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={SITE_KEY}
      onChange={handleChange}
      onExpired={handleExpired}
      theme="light"
      size="normal"
    />
  );
};

const GoogleCaptcha = React.forwardRef(GoogleCaptchaComponent);
GoogleCaptcha.displayName = "GoogleCaptcha";

export default GoogleCaptcha;
