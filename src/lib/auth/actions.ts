"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");

  redirect("/auth/login");
}

export async function signUp(formData: FormData) {
  const supabase = await createClient();

  const fullName = formData.get("fullName")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim().toLowerCase() ?? "";
  const password = formData.get("password")?.toString() ?? "";
  const confirmPassword =
    formData.get("confirmPassword")?.toString() ?? "";

  // Required field validation
  if (!fullName || !email || !password || !confirmPassword) {
    return {
      error: "All fields are required.",
    };
  }

  // Password validation
  if (password.length < 8) {
    return {
      error: "Password must be at least 8 characters long.",
    };
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match.",
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
    success:
      "Account created successfully. Please check your email to verify your account.",
  };
}