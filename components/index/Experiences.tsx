"use client";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import ExperiencesWrapper from "@/components/index/ExperiencesWrapper";

const scrollDuration = 45;
const Experiences = () => {
  const doubledImages1 = [...images1, ...images1];
  const doubledImages2 = [...images2, ...images2];
  return (
    <Box bg="var(--beige)" py="5em">
      <Container maxW="1400px">
        <Text textStyle="h1" mb="0.5em">
          Shared{" "}
          <Text as="span" color="var(--orange)">
            Experiences
          </Text>
        </Text>
        <Flex direction="column" gap={10}>
          <ExperiencesWrapper
            images={doubledImages1}
            direction="left"
            scrollDuration={scrollDuration}
          />
          <ExperiencesWrapper
            images={doubledImages2}
            direction="right"
            scrollDuration={scrollDuration}
          />
        </Flex>
      </Container>
    </Box>
  );
};

const images1 = [
  "/exp_1.webp",
  "/exp_2.webp",
  "/exp_3.webp",
  "/exp_4.webp",
  "/exp_5.webp",
  "/exp_6.webp",
  "/exp_7.webp",
];

const images2 = [
  "/exp_8.webp",
  "/exp_9.webp",
  "/exp_10.webp",
  "/exp_11.webp",
  "/exp_12.webp",
  "/exp_13.webp",
  "/exp_14.webp",
];

export default Experiences;
