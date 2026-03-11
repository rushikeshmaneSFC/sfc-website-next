import type { Metadata } from "next";
import ResetPasswordClient from "@/components/auth/ResetPasswordClient";

export const metadata: Metadata = {
  title: "Reset Password",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://stfox.com/authentication/reset-password" },
};

export default function ResetPasswordPage() {
  return <ResetPasswordClient />;
}
