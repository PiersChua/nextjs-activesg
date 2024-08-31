import { Box, Divider, Flex, Text } from "@chakra-ui/react";
const About = () => {
  return (
    <Box pt="5em" id="about">
      <Box>
        <Text
          mb="0.5em"
          fontWeight="semibold"
          sx={{ fontSize: "clamp(18px, 5vw, 64px)" }}
        >
          Who are we?
        </Text>
        <Flex direction="column" gap="2em">
          {aboutItems.map((item, idx) => (
            <Flex key={idx} direction="column" gap={2}>
              <Text
                fontWeight="semibold"
                sx={{ fontSize: "clamp(14px, 3vw, 32px)" }}
                mb={2}
              >
                {item.title}
              </Text>
              <Divider borderColor="#000000" />
              <Text sx={{ fontSize: "clamp(10px, 2vw, 20px)" }}>
                {item.desc}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
const aboutItems = [
  {
    title: "Join the FitSG Community",
    desc: "FitSG is a vibrant community where Singaporeans of all fitness levels come together to move, sweat, and thrive. Whether you're a seasoned athlete or just starting your fitness journey, FitSG offers something for everyone.",
  },
  {
    title: "Our mission",
    desc: "At FitSG, we believe that fitness should be fun, accessible, and, most importantly, part of our everyday lives. That's why we've created a space where you can find everything you need to stay active, from workout tips and training programs to local events and challenges that will get your heart pumping.",
  },
];

export default About;
