"use client";
import {
  Box,
  Divider,
  Flex,
  Text,
  IconButton,
  Icon,
  Stack,
  Container,
} from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
const Activities = () => {
  return (
    <Box bg="var(--beige-shade-1)" py="5em" id="activities">
      <Container maxW="1400px">
        <Box>
          <Box textStyle="h1" mb="0.5em">
            <Text>
              What we{" "}
              <Text as="span" color="var(--orange)">
                offer
              </Text>{" "}
            </Text>
          </Box>
          <Flex direction="column" gap="2em">
            {activityItems.map((item, idx) => (
              <Flex key={idx} direction="column" gap={2}>
                <Stack
                  role="group"
                  _hover={{
                    color: "var(--orange)",
                  }}
                  as="a"
                  href={item.href}
                  direction="row"
                  align="center"
                  spacing={2}
                  transition={"all .3s"}
                >
                  <Text textStyle="h2">{item.title}</Text>
                  <Icon
                    transition={"transform .3s"}
                    _groupHover={{
                      transform: "translateX(10px)",
                    }}
                    as={FaArrowRightLong}
                  />
                </Stack>
                <Divider borderColor="#000000" />
                <Text textStyle="p">{item.desc}</Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

const activityItems = [
  {
    title: "FitPass",
    desc: "Unlock access to gyms and swimming pools across Singapore",
    href: "/gym-passes",
  },
  {
    title: "PlaySpace",
    desc: "Reserve a spot at your favourite sports facilities",
    href: "/facilities",
  },
  {
    title: "ProActive",
    desc: "Participate in a wide range of programs designed to keep you moving",
    href: "/programmes",
  },
];

export default Activities;
