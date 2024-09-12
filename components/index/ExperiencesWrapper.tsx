import { Box, Flex, Image, keyframes } from "@chakra-ui/react";
import React from "react";

const loopScroll = (direction: "left" | "right") => keyframes`
  from {
    transform: translate(${direction === "left" ? `0` : `calc(-50% - 1rem)`});
  }
  to {
    transform: translate(${
      direction === "left" ? `calc(-50% - 1rem)` : `0`
    }); // minus 1rem to account for gap
  }`;

interface WrapperProps {
  images: string[];
  direction: "left" | "right";
  scrollDuration: number;
}
const ExperiencesWrapper = ({
  images,
  direction,
  scrollDuration,
}: WrapperProps) => {
  return (
    <Box overflow="hidden" bg="inherit" position="relative">
      <Box
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        width="20px"
        bgGradient="linear(to-r, var(--beige), transparent)"
        zIndex="1"
      />
      <Box
        position="absolute"
        top="0"
        bottom="0"
        right="0"
        width="20px"
        bgGradient="linear(to-l, var(--beige), transparent)"
        zIndex="1"
      />
      <Flex
        bg="inherit"
        w="max-content"
        gap={8} // 2rem gap
        animation={`${loopScroll(
          direction
        )} ${scrollDuration}s linear infinite`}
      >
        {images.map((image, index) => (
          <Image
            objectFit="cover"
            rounded="xl"
            h="25vw"
            maxH="200px"
            key={index}
            src={image}
            aria-hidden={index >= images.length}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ExperiencesWrapper;
