"use server";

import { authKey } from "@/constants/authKey";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setAccessToken = async (token: string, option?: any) => {
  (await cookies()).set(authKey, token);
  if (option && option.passwordChangeRequired) {
    redirect("/dashboard/change-password");
  }
  if (option && !option.passwordChangeRequired && option.redirect) {
    redirect(option.redirect);
  }
};

export default setAccessToken;
