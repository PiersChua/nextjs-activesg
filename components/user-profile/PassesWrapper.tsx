import { getPasses } from "@/app/action/passes";
import { formatDurationUnit } from "@/utils/formatDateTime";
import { Box, Button, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const PassesWrapper = async () => {
  const userPasses = await getPasses();
  return (
    <Flex mb={10} direction="column" gap={5}>
      {userPasses.map((item, index) => (
        <Box
          key={index}
          bg="var(--beige)"
          boxShadow="0 5px 20px rgba(0,0,0,0.2)"
          p={3}
          rounded="xl"
        >
          <Flex direction="row" justifyContent="space-between">
            <Flex direction="column" gap={1}>
              <Text textStyle="h3" flexWrap="wrap">
                {`${formatDurationUnit(item.passType.durationInDays)} ${
                  item.passType.durationInDays > 1
                    ? item.passType.isPeak
                      ? "Peak"
                      : "Non-peak"
                    : ""
                } ${item.passType.category} Pass`}
              </Text>
              <Text textStyle="p">
                Price paid:{" "}
                <Text as="span" color="var(--orange)" fontWeight="semibold">
                  $
                  {((item.passType.priceInCents * item.quantity) / 100).toFixed(
                    2
                  )}
                </Text>
              </Text>
              {item.isActive ? (
                <Box
                  p={1}
                  w="fit-content"
                  rounded="md"
                  bg="var(--success-bg)"
                  color="var(--success-text)"
                >
                  <Text textStyle="p2">
                    Status:{" "}
                    <Text as="span" fontWeight="semibold">
                      Active
                    </Text>
                  </Text>
                </Box>
              ) : (
                <Box
                  p={1}
                  w="fit-content"
                  rounded="md"
                  bg="var(--error-bg)"
                  color="var(--error-text)"
                >
                  <Text textStyle="p2">
                    Status:{" "}
                    <Text as="span" fontWeight="semibold">
                      Inactive
                    </Text>
                  </Text>
                </Box>
              )}
            </Flex>
            <Stack alignItems="flex-end" justifyContent="space-between">
              <Text whiteSpace="nowrap" textStyle="p" color="var(--grey)">
                × {item.quantity}
              </Text>
              <Button
                display={{ base: "none", md: "block" }}
                variant="orangeWhite"
              >
                View pass
              </Button>
            </Stack>
          </Flex>
          <Divider
            display={{ base: "block", md: "none" }}
            my={5}
            borderColor="var(--black)"
          />
          <Button display={{ base: "block", md: "none" }} variant="orangeWhite">
            View pass
          </Button>
        </Box>
      ))}
    </Flex>
  );
};

export default PassesWrapper;
