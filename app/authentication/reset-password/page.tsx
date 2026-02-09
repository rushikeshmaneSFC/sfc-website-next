import type { Metadata } from "next";
import ResetPasswordClient from "@/components/auth/ResetPasswordClient";

export const metadata: Metadata = {
  title: "Reset Password",
  robots: { index: false, follow: false },
};

export default function ResetPasswordPage() {
  return <ResetPasswordClient />;
}
