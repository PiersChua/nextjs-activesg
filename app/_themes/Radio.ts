import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const cream = definePartsStyle({
  control: {
    border: "1px solid",
    borderColor: "var(--black)",
    bg: "var(--white)",
    _checked: {
      bg: "var(--orange)",
      borderColor: "var(--black)",
      _hover: {
        bg: "var(--orange-1)",
        borderColor: "var(--black)",
      },
    },
    _hover: {
      bg: "var(--white-1)",
      borderColor: "var(--black)",
    },
  },
});
export const radioTheme = defineMultiStyleConfig({ variants: { cream } });
