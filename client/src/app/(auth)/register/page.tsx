import type { Metadata } from "next";
import AuthRegisterForm from "@/features/auth/components/register-form";

export const metadata: Metadata = {
  title: "Restaurant | Register",
  description: "Manage restaurant orders and order status",
};

export default function RegisterPage() {
  return <AuthRegisterForm />;
}
