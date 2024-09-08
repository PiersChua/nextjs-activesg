"use client";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const loopScroll = keyframes`
  from {
    transform: translate(0);
  }
  to {
    transform: translate(${`calc(-50% - 1rem)`});
  }`;
const Experiences = () => {
  const doubledImages = [...images, ...images];
  return (
    <Box bg="var(--beige-shade-1)" py="5em">
      <Container maxW="1400px">
        <Text textStyle="h1">Shared Experiences</Text>
        <Box overflow="hidden" bg="inherit">
          <Flex
            bg="inherit"
            w="max-content"
            gap={8} // 2rem gap
            animation={`${loopScroll} 15s linear infinite`}
          >
            {doubledImages.map((image, index) => (
              <Image
                objectFit="cover"
                rounded="xl"
                h="200px"
                key={index}
                src={image}
                aria-hidden={index >= images.length}
              />
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

const images = [
  "/exp_1.webp",
  "/exp_2.webp",
  "/exp_3.webp",
  "/exp_4.webp",
  "/exp_5.webp",
  "/exp_6.webp",
  "/exp_7.webp",
];

export default Experiences;
