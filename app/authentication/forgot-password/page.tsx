import type { Metadata } from "next";
import ForgotPasswordClient from "@/components/auth/ForgotPasswordClient";

export const metadata: Metadata = {
  title: "Forgot Password",
  robots: { index: false, follow: false },
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordClient />;
}
