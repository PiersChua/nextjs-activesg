import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import { Container } from "@chakra-ui/react";
import Hero from "@/components/index/Hero";
import About from "@/components/index/About";
import Activities from "@/components/index/Activities";

export default function Home() {
  return (
    <Container maxW="1400px">
      <Navbar />
      <Hero />
      <About />
      <Activities />
    </Container>
  );
}
