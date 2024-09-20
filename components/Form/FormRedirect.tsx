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
        _hover={{ color: "var(--yellow)" }}
        href={href}
        as="a"
      >
        {hrefText}
      </Text>{" "}
    </Text>
  );
};

export default FormRedirect;
