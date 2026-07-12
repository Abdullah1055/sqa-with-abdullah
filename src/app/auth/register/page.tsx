import type { Metadata } from "next";

import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Create Account | SQA with Abdullah",
  description:
    "Create your SQA with Abdullah account and start your software testing journey.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}