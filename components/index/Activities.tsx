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
    <Box my={10} id="activities">
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
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={2}>
              <Stack direction="row" align="center" spacing={0}>
                <Text
                  fontWeight="semibold"
                  sx={{ fontSize: "clamp(14px, 3vw, 32px)" }}
                >
                  Fitpass
                </Text>
                <IconButton
                  bg="inherit"
                  aria-label="Search"
                  as="a"
                  icon={<Icon as={FaArrowRightLong} />}
                />
              </Stack>

              <Divider borderColor="#000000" />
              <Text sx={{ fontSize: "clamp(10px, 2vw, 20px)" }}>
                Unlock access to gyms and swimming pools across Singapore
              </Text>
            </Flex>
            <Flex direction="column" gap={2}>
              <Stack direction="row" align="center" spacing={0}>
                <Text
                  fontWeight="semibold"
                  sx={{ fontSize: "clamp(14px, 3vw, 32px)" }}
                >
                  PlaySpace
                </Text>
                <IconButton
                  aria-label="Search"
                  as="a"
                  icon={<Icon as={FaArrowRightLong} />}
                />
              </Stack>
              <Divider borderColor="#000000" />
              <Text sx={{ fontSize: "clamp(10px, 2vw, 20px)" }}>
                Reserve a spot at your favourite sports facilities
              </Text>
            </Flex>
            <Flex direction="column" gap={2}>
              <Stack direction="row" align="center" spacing={0}>
                <Text
                  fontWeight="semibold"
                  sx={{ fontSize: "clamp(14px, 3vw, 32px)" }}
                >
                  ProActive
                </Text>
                <IconButton
                  aria-label="Search"
                  as="a"
                  icon={<Icon as={FaArrowRightLong} />}
                />
              </Stack>
              <Divider borderColor="#000000" />
              <Text sx={{ fontSize: "clamp(10px, 2vw, 20px)" }}>
                Participate in a wide range of programs designed to keep you
                moving
              </Text>
            </Flex>
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

export default Activities;
