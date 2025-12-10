"use server";

import { authKey } from "@/components/constants/authKey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const setAccessToken = async (token: string, options?: any) => {
  const cookieStore = await cookies(); // ✅ Fix
  cookieStore.set(authKey, token); // Now works

  if (options?.role === "user") {
    redirect("/");
  }

  const lowercaseRole = options?.role?.toLowerCase();

  if (options?.needPasswordChanged) {
    redirect(`/dashboard/${lowercaseRole}`);
  }

  if (!options?.needPasswordChanged && options?.redirect) {
    redirect(options.redirect);
  }
};

export default setAccessToken;
