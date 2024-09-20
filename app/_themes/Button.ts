import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const orangeWhite = defineStyle(() => {
  return {
    color: "#ffffff",
    backgroundColor: "var(--orange)",
    _hover: {
      backgroundColor: "var(--orange-1)",
    },
  };
});

const outlineOrange = defineStyle(() => {
  return {
    color: "var(--orange)",
    backgroundColor: "#ffffff",
    _hover: {
      backgroundColor: "var(--white-1)",
    },
    border: "1px solid",
    borderColor: "var(--orange)",
  };
});

const yellowBlack = defineStyle(() => {
  return {
    color: "#000000",
    backgroundColor: "var(--yellow)",
    _hover: { backgroundColor: "var(--yellow-1)" },
  };
});

export const buttonTheme = defineStyleConfig({
  variants: { orangeWhite, outlineOrange, yellowBlack },
});
