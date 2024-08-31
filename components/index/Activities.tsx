"use client";
import {
  Box,
  Divider,
  Flex,
  Text,
  IconButton,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
const Activities = () => {
  return (
    <Box pt="5em" id="activities">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Box
            fontWeight="semibold"
            sx={{ fontSize: "clamp(18px, 5vw, 64px)" }}
            mb="0.5em"
          >
            <Text>
              What we{" "}
              <Text as="span" color="#F95738">
                offer
              </Text>{" "}
            </Text>
          </Box>
          <Flex direction="column" gap="2em">
            {activityItems.map((item, idx) => (
              <Flex key={idx} direction="column" gap={2}>
                <Stack
                  _hover={{
                    "> .icon-button": {
                      transform: "translateX(10px)",
                      color: "#F95738",
                      bg: "inherit",
                    },
                    cursor: "pointer",
                    color: "#F95738",
                    transition: "0.3s",
                  }}
                  as="a"
                  href={item.href}
                  direction="row"
                  align="center"
                  spacing={0}
                >
                  <Text
                    fontWeight="semibold"
                    sx={{ fontSize: "clamp(14px, 3vw, 32px)" }}
                  >
                    {item.title}
                  </Text>
                  <IconButton
                    className="icon-button"
                    bg="inherit"
                    aria-label="Search"
                    as="span"
                    icon={<Icon as={FaArrowRightLong} />}
                  />
                </Stack>
                <Divider borderColor="#000000" />
                <Text sx={{ fontSize: "clamp(10px, 2vw, 20px)" }}>
                  {item.desc}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
        <Image
          src="/activities.svg"
          alt="activities"
          width={0}
          height={0}
          style={{ width: "auto", height: "clamp(200px, 40vw, 900px);" }}
        />
      </Flex>
    </Box>
  );
};

const activityItems = [
  {
    title: "FitPass",
    desc: "Unlock access to gyms and swimming pools across Singapore",
    href: "#",
  },
  {
    title: "PlaySpace",
    desc: "Reserve a spot at your favourite sports facilities",
    href: "#",
  },
  {
    title: "ProActive",
    desc: "Participate in a wide range of programs designed to keep you moving",
    href: "#",
  },
];

export default Activities;
