import { auth } from "@/auth";

const getSessionUser = async () => {
  const session = await auth();
  return session?.user;
};

export { getSessionUser };
