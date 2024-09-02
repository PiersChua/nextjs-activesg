import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/db";
import authConfig from "./auth.config";
import { Role } from "@prisma/client";

type ExtendedUser = DefaultSession["user"] & {
  role: "ADMIN" | "USER";
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  pages: {
    signIn: "/login",
    // signIn: "/auth/signin",
    // signOut: "/auth/signout",
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: "/auth/new-user",
  },
  callbacks: {
    // token in session parameters is identical to the one in jwt
    async session({ session, token }) {
      // check if id exists in token and if user is logged in'
      console.log(session);
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as Role;
      }
      console.log(session);
      return session;
    },
    async jwt({ token }) {
      // token.sub contains the uuid of the logged in user
      if (!token.sub) return token;
      const existingUser = await prisma.user.findUnique({
        where: { id: token.sub },
      });
      if (!existingUser) return token;
      token.role = existingUser.role;
      return token;
    },
  },
});
