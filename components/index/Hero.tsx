import { Box, Button, Flex, Text } from "@chakra-ui/react";

interface HeroProps {
  isLoggedIn: boolean;
}

const Hero = ({ isLoggedIn }: HeroProps) => {
  return (
    <Flex
      minH="90vh"
      textAlign="center"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-2"
        backgroundImage="url('/hero.jpg')"
        backgroundPosition="center"
        backgroundSize="cover"
        opacity="0.8"
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-1"
        backgroundColor="rgba(0, 0, 0, 0.4)" // Dark overlay with transparency
      />

      <Box
        fontWeight="semibold"
        fontSize={{ base: "40px", md: "60px" }}
        mb={2}
        color="white"
      >
        <Text>Don't Say Bojio</Text>
        <Text>
          Come{" "}
          <Text as="span" color="#F95738">
            Exercise
          </Text>{" "}
          Lah!
        </Text>
      </Box>
      <Flex
        gap={2}
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: "16px", md: "20px" }}
        color="white"
      >
        <Text>
          {isLoggedIn
            ? "Start your training today!"
            : "Sign up now to get a free trial, on us."}
        </Text>
        <Button
          as={"a"}
          color="#000000"
          bg="#F4D35E"
          href={isLoggedIn ? "/activities" : "/signup"}
          _hover={{
            bg: "#D9C287",
          }}
        >
          Get Started
        </Button>
      </Flex>
    </Flex>
  );
};

export default Hero;
