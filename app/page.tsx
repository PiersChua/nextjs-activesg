import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/index/Hero";
import Activities from "@/components/index/Activities";
import { getSessionUser } from "@/utils/getSessionUser";
import Experiences from "@/components/index/Experiences";

export default async function Home() {
  const isLoggedIn = !!(await getSessionUser());
  return (
    <Box>
      <Hero isLoggedIn={isLoggedIn} />
      <Activities />
      <Experiences />
    </Box>
  );
}
