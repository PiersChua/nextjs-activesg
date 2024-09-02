import { NextRequest } from "next/server";
import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { auth } = NextAuth(authConfig);

const protectedRoutes = ["/passes"];
const publicRoutes = ["/login", "/signup", "/"];
const apiAuthRoutes = "/api/auth";

export default auth((req) => {
  // const path = req.nextUrl.pathname;
  // const isLoggedIn = !!req.auth; // retrieve the session
  // const isApiAuthRoute = path.startsWith(apiAuthRoutes);
  // const isPublicRoute = publicRoutes.includes(path);
  // const isProtectedRoute = protectedRoutes.includes(path);

  // // redirect users to login page when accessing protected routes if not logged in
  // if (!isLoggedIn && !isPublicRoute) {
  //   return Response.redirect(new URL("/login", req.nextUrl));
  // }
});

// middleware is invoked all on paths
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
