import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const orangeWhite = defineStyle(() => {
  return {
    color: "var(--white)",
    backgroundColor: "var(--orange)",
    _hover: {
      backgroundColor: "var(--orange-1)",
    },
  };
});

const outlineOrange = defineStyle(() => {
  return {
    color: "var(--orange)",
    backgroundColor: "var(--white)",
    _hover: {
      backgroundColor: "var(--white-1)",
    },
    border: "1px solid",
    borderColor: "var(--orange)",
  };
});

const redWhite = defineStyle(() => {
  return {
    color: "var(--white)",
    backgroundColor: "var(--red)",
    _hover: {
      backgroundColor: "var(--red-1)",
    },
  };
});

const blueWhite = defineStyle(() => {
  return {
    color: "var(--white)",
    backgroundColor: "var(--blue)",
    _hover: {
      backgroundColor: "var(--blue-1)",
    },
  };
});

const yellowBlack = defineStyle(() => {
  return {
    color: "var(--black)",
    backgroundColor: "var(--yellow)",
    _hover: { backgroundColor: "var(--yellow-1)" },
  };
});

export const buttonTheme = defineStyleConfig({
  variants: { orangeWhite, redWhite, blueWhite, outlineOrange, yellowBlack },
});
