import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/index/Hero";
import About from "@/components/index/About";
import Activities from "@/components/index/Activities";
import { getSessionUser } from "@/utils/getSessionUser";
import Contact from "@/components/index/Contact";

export default async function Home() {
  const isLoggedIn = !!(await getSessionUser());
  return (
    <Box>
      <Hero isLoggedIn={isLoggedIn} />
      <About />
      <Activities />
      <Contact />
    </Box>
  );
}
