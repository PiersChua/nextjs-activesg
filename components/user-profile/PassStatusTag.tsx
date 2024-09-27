"use client";
import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
interface TagProps {
  isActive: boolean;
}
const PassStatusTag = ({ isActive }: TagProps) => {
  return isActive ? (
    <Box
      p={2}
      w="fit-content"
      rounded="md"
      bg="var(--success-bg)"
      color="var(--success-text)"
    >
      <Stack alignItems="center" direction="row">
        <Icon as={IoMdCheckmarkCircleOutline} />
        <Text textStyle="p2">
          Status:{" "}
          <Text as="span" fontWeight="semibold">
            Active
          </Text>
        </Text>
      </Stack>
    </Box>
  ) : (
    <Box
      p={2}
      w="fit-content"
      rounded="md"
      bg="var(--error-bg)"
      color="var(--error-text)"
    >
      <Stack alignItems="center" direction="row">
        <Icon as={FaExclamationTriangle} />
        <Text textStyle="p2">
          Status:{" "}
          <Text as="span" fontWeight="semibold">
            Inactive
          </Text>
        </Text>
      </Stack>
    </Box>
  );
};

export default PassStatusTag;
