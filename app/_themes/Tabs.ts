import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const cream = definePartsStyle({
  tab: {
    border: "1px solid",
    borderColor: "transparent",
    borderBottom: "none",
    bg: "var(--beige-1)",
    borderTopRadius: "lg",
    _selected: {
      color: "var(--orange)",
      borderColor: "var(--grey)",
      bg: "transparent",
      borderBottomColor: "var(--orange)",
    },
  },
  tablist: {
    borderBottom: "1px solid",
    borderColor: "var(--grey)",
  },
});

export const tabsTheme = defineMultiStyleConfig({
  variants: { cream },
});
