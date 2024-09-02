"use server";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { signIn, signOut } from "@/auth";
import { AuthError, CredentialsSignin } from "next-auth";
import * as z from "zod";
import { LoginSchema, SignUpSchema } from "@/schemas";

const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const formData = validatedFields.data;
  const name = capitalizeFirstLetter(formData.name);
  const age = formData.age;
  const email = formData.email.toLowerCase();
  const password = formData.password;
  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });
  if (existingUser) {
    return { error: "User already exists" };
  }
  const hashedPassword = await hash(password, 10);
  await prisma.user.create({
    data: {
      name: name,
      age: age,
      email: email,
      password: hashedPassword,
      updatedAt: new Date(),
    },
  });
  redirect("/login");
};

const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const formData = validatedFields.data;
  const email = formData.email.toLowerCase();
  const password = formData.password;
  try {
    await signIn("credentials", {
      redirectTo: "/",
      email,
      password,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default: {
          return { error: "Something went wrong" };
        }
      }
    }
    throw error;
  }
};

const loginWithGoogle = async () => {
  await signIn("google");
};

const logout = async () => {
  await signOut();
  redirect("/");
};
export { signUp, login, loginWithGoogle, logout };
