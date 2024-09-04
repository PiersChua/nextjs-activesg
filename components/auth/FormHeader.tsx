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
      fontSize={{ base: "40px", md: "60px" }}
    >
      {text}
    </Text>
  );
};

export default FormHeader;
