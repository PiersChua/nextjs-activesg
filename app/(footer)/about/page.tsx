import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
const AboutPage = () => {
  return (
    <Box py="5em">
      <Container maxW="1400px">
        <Text mb="0.5em" textStyle="h1">
          Who are we?
        </Text>
        <Flex direction="column" gap="2em">
          {aboutItems.map((item, idx) => (
            <Flex key={idx} direction="column" gap={2}>
              <Text textStyle="h3" mb={2}>
                {item.title}
              </Text>
              <Divider borderColor="var(--black)" />
              <Text textStyle="p">{item.desc}</Text>
            </Flex>
          ))}
        </Flex>
      </Container>
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

export default AboutPage;
