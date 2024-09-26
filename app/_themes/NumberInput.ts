import { numberInputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(numberInputAnatomy.keys);

const cream = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "var(--grey)",
    backgroundColor: "var(--cream)",
  },
  stepper: {
    border: "none",
    borderColor: "var(--grey)",
    backgroundColor: "var(--cream)",
  },
});

export const numberInputTheme = defineMultiStyleConfig({ variants: { cream } });
