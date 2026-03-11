import type { Metadata } from "next";
import ProfileLockClient from "@/components/auth/ProfileLockClient";

export const metadata: Metadata = {
  title: "Profile Locked",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://stfox.com/authentication/profile-lock" },
};

export default function ProfileLockPage() {
  return <ProfileLockClient />;
}
