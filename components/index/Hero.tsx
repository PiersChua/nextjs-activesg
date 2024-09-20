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
        backgroundImage="url('/hero.webp')"
        backgroundPosition="center"
        backgroundSize="cover"
        opacity="0.9"
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-1"
        backgroundColor="rgba(0, 0, 0, 0.6)" // Dark overlay with transparency
      />

      <Box textStyle="h1" mb={2} color="white">
        <Text>Don&apos;t Say Bojio</Text>
        <Text>
          Come{" "}
          <Text as="span" color="var(--orange)">
            Exercise
          </Text>{" "}
          Lah!
        </Text>
      </Box>
      <Flex
        gap={2}
        alignItems="center"
        justifyContent="center"
        textStyle="p"
        color="white"
        flexWrap="wrap"
      >
        <Text>
          {isLoggedIn
            ? "Start your training today!"
            : "Sign up now to get a free trial, on us."}
        </Text>
        <Button
          as={"a"}
          href={isLoggedIn ? "/activities" : "/signup"}
          variant="yellowBlack"
        >
          Get Started
        </Button>
      </Flex>
    </Flex>
  );
};

export default Hero;
