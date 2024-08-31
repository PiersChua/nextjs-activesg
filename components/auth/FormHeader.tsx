import { Text } from "@chakra-ui/react";
import React from "react";

interface HeaderProps {
  text: string;
}
const FormHeader = ({ text }: HeaderProps) => {
  return (
    <Text
      textAlign="center"
      fontWeight="semibold"
      sx={{ fontSize: "clamp(18px, 5vw, 64px)" }}
    >
      {text}
    </Text>
  );
};

export default FormHeader;
