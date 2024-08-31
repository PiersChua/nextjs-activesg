import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/db";
import { compare } from "bcryptjs";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "DefaultCredentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = (credentials.email as string).toLowerCase();
        const password = credentials.password as string;
        const user = await prisma.user.findUnique({
          where: { email: email },
        });
        if (!user) {
          throw new Error("No user found");
        }
        const isMatched = await compare(password, user.password as string);
        if (!isMatched) {
          throw new Error("Wrong password");
        }
        // const userData = {
        //   firstName: user.firstName,

        // }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    // signIn: "/auth/signin",
    // signOut: "/auth/signout",
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: "/auth/new-user",
  },
  callbacks: {
    // async session({ session, token }) {
    //   if (token?.sub && token?.role) {
    //     session.user.id = token.sub;
    //     session.user.role = token.role;
    //   }
    //   return session;
    // },
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.role = user.role;
    //   }
    //   return token;
    // },
    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, id } = user;
          const existingUser = await prisma.user.findUnique({
            where: { email: email as string },
          });
          if (existingUser) {
            return true;
          }
          await prisma.user.create({
            data: {
              name: name as string,
              email: email as string,
              authProviderId: id as string,
              updatedAt: new Date(),
            },
          });
        } catch (error) {
          throw new Error("Error while creating account with google");
        }
      }
      if (account?.provider === "credentials") {
        return true;
      }
      return false;
    },
  },
});
