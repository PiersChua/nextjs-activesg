"use client";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import BenefitsCard, {
  BenefitsCardProps,
} from "@/components/index/BenefitsCard";

const Benefits = () => {
  return (
    <Box bg="var(--beige-1)" py="5em">
      <Container maxW="1400px">
        <Text textStyle="h1" mb="0.5em">
          Why choose{" "}
          <Text as="span" color="var(--orange)">
            us
          </Text>
        </Text>
        <SimpleGrid
          textAlign="center"
          spacing="40px"
          columns={{ base: 1, md: 2 }}
        >
          {benefits.map((item, index) => (
            <BenefitsCard key={index} {...item} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const benefits: BenefitsCardProps[] = [
  {
    title: "State-of-the-Art Equipment",
    icon: "Equipment",
    desc: "Experience top-tier fitness equipment designed for optimal performance and results.",
  },
  {
    title: "Expert Trainers",
    icon: "Trainer",
    desc: "Train with certified professionals who guide you every step of the way.",
  },
  {
    title: "Community Support",
    icon: "Community",
    desc: "Join a supportive fitness community that motivates and inspires you.",
  },
  {
    title: "Flexible Classes",
    icon: "Classes",
    desc: "Enjoy a wide range of classes that fit your schedule and goals.",
  },
];

export default Benefits;
