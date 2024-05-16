"use server";

// import ky from "ky";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export const recoveryHandlerAction = async (formData: FormData) => {
  const email = formData.get("email");

  console.log(email);
};
