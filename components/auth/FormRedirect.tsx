import { Text } from "@chakra-ui/react";
import React from "react";

interface RedirectProps {
  href: string;
  text: string;
  hrefText: string;
}
const FormRedirect = ({ href, text, hrefText }: RedirectProps) => {
  return (
    <Text textAlign="center">
      {text}{" "}
      <Text
        textDecoration="underline"
        _hover={{ color: "#F4D35E", transition: "color 0.3s" }}
        href={href}
        as="a"
      >
        {hrefText}
      </Text>{" "}
    </Text>
  );
};

export default FormRedirect;
