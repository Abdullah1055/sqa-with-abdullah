import { cache } from "react";

import { createClient } from "@/lib/supabase/server";

export const getSession = cache(async () => {
  const supabase = await createClient();

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw error;
  }

  return session;
});

export const getUser = cache(async () => {
  const session = await getSession();

  return session?.user ?? null;
});

export const requireUser = cache(async () => {
  const user = await getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
});