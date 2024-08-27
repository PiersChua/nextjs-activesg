import { NextRequest } from "next/server";
const protectedRoutes = ["/passes"];
const publicRoutes = ["/login", "/signup"];
const middleware = async (request: NextRequest) => {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
};
export default middleware;
