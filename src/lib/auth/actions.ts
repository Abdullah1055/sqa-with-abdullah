"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");

  redirect("/login");
}

export async function signUp(formData: FormData) {
  const supabase = await createClient();

  const fullName = formData.get("fullName")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  if (!fullName || !email || !password) {
    return {
      error: "All fields are required.",
    };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath("/", "layout");

  return {
    success: "Your account has been created. Please check your email to verify your account.",
  };
}