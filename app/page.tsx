import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/index/Hero";
import About from "@/components/index/About";
import Activities from "@/components/index/Activities";

export default function Home() {
  return (
    <Box>
      <Hero />
      <About />
      <Activities />
    </Box>
  );
}
