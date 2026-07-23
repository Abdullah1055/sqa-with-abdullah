import { redirect } from "next/navigation";

import { getUser } from "@/lib/auth/session";
import { ROLES } from "@/lib/auth/roles";

export async function requireAuth() {
  const user = await getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return user;
}

export async function requireRole(
  allowedRoles: readonly string[]
) {
  const user = await requireAuth();

  const role = user.user_metadata?.role;

  if (!role || !allowedRoles.includes(role)) {
    redirect("/unauthorized");
  }

  return user;
}

export async function requireAdmin() {
  return requireRole([ROLES.ADMIN]);
}

export async function requireInstructor() {
  return requireRole([ROLES.INSTRUCTOR]);
}

export async function requireStudent() {
  return requireRole([ROLES.STUDENT]);
}