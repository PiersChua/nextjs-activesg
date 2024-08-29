import { Box, Divider, Flex, Text } from "@chakra-ui/react";
const About = () => {
  return (
    <Box my={10} id="about">
      <Box>
        <Text
          mb="0.5em"
          fontWeight="semibold"
          sx={{ fontSize: "clamp(18px, 5vw, 64px)" }}
        >
          Who are we?
        </Text>
        <Flex direction="column" gap={10}>
          <Flex direction="column" gap={2}>
            <Text
              fontWeight="semibold"
              sx={{ fontSize: "clamp(14px, 3vw, 32px)" }}
              mb={2}
            >
              Join the FitSG Community
            </Text>
            <Divider borderColor="#000000" />
            <Text sx={{ fontSize: "clamp(10px, 2vw, 20px)" }}>
              FitSG is more than just a fitness platform; it's a vibrant
              community where Singaporeans of all fitness levels come together
              to move, sweat, and thrive. Whether you're a seasoned athlete or
              just starting your fitness journey, FitSG offers something for
              everyone.
            </Text>
          </Flex>
          <Flex direction="column" gap={2}>
            <Text
              fontWeight="semibold"
              sx={{ fontSize: "clamp(14px, 3vw, 32px)" }}
              mb={2}
            >
              Our mission
            </Text>
            <Divider borderColor="#000000" />
            <Text sx={{ fontSize: "clamp(10px, 2vw, 20px)" }}>
              At FitSG, we believe that fitness should be fun, accessible, and,
              most importantly, part of our everyday lives. That's why we've
              created a space where you can find everything you need to stay
              active, from workout tips and training programs to local events
              and challenges that will get your heart pumping.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
