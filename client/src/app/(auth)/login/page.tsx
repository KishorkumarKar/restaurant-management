import type { Metadata } from "next";
import AuthLoginForm from "@/features/auth/components/login-form";

export const metadata: Metadata = {
  title: "Restaurant | Login",
  description: "Manage restaurant orders and order status",
};
export default function LoginPage() {
  return <AuthLoginForm />;
}
