import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const cream = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "var(--grey)",
    backgroundColor: "var(--cream)",
  },
  addon: {
    border: "1px solid",
    borderColor: "var(--grey)",
    backgroundColor: "var(--cream)",
  },
});

export const selectTheme = defineMultiStyleConfig({ variants: { cream } });
