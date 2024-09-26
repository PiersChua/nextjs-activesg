"use client";
import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";
import {
  IoIosInformationCircleOutline,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";
import React from "react";

interface MessageProps {
  children: React.ReactNode;
  type: "Info" | "Error" | "Success";
}
const FormMessage = ({ children, type }: MessageProps) => {
  const { icon, bg, color } = getMessageStyles(type);
  return (
    <Box w="full" bg={bg} h={10} borderRadius="5px">
      <Stack ml={3} color={color} h="full" alignItems="center" direction="row">
        <Icon as={icon} />
        <Text>{children}</Text>
      </Stack>
    </Box>
  );
};

const getMessageStyles = (type: "Info" | "Error" | "Success") => {
  let icon;
  let bg;
  let color;
  switch (type) {
    case "Info":
      icon = IoIosInformationCircleOutline;
      bg = "var(--info-bg)";
      color = "var(--info-text)";
      break;
    case "Error":
      icon = FaExclamationTriangle;
      bg = "var(--error-bg)";
      color = "var(--error-text)";
      break;
    case "Success":
      icon = IoMdCheckmarkCircleOutline;
      bg = "var(--success-bg)";
      color = "var(--success-text)";
      break;
  }
  return { icon, bg, color };
};

export default FormMessage;
