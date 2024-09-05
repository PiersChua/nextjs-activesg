import { Text } from "@chakra-ui/react";
import React from "react";

interface HeaderProps {
  text: string;
}
const FormHeader = ({ text }: HeaderProps) => {
  return (
    <Text textAlign="center" textStyle="h1">
      {text}
    </Text>
  );
};

export default FormHeader;
