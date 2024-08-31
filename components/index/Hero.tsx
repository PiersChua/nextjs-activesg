import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const Hero = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Box
            fontWeight="semibold"
            sx={{ fontSize: "clamp(18px, 5vw, 64px)" }}
            mb={2}
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
          <Box sx={{ fontSize: "clamp(10px, 3vw, 20px)" }}>
            <Text mb={2}>Sign up now to get a free trial, on us.</Text>
            <Button
              as={"a"}
              color="#000000"
              bg="#F4D35E"
              href={"/signup"}
              _hover={{
                bg: "#D9C287",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
        <Image
          src="/hero.svg"
          alt="hero"
          width={0}
          height={0}
          style={{ width: "auto", height: "clamp(200px, 40vw, 900px)" }}
        />
      </Flex>
    </Box>
  );
};

export default Hero;
