"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, StyleFunctionProps } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import { inputTheme } from "@/app/_themes/Input";
import { selectTheme } from "@/app/_themes/Select";
import { buttonTheme } from "@/app/_themes/Button";
import { numberInputTheme } from "@/app//_themes/NumberInput";

/* Theme */
const theme = extendTheme({
  components: {
    Input: inputTheme,
    Select: selectTheme,
    Button: buttonTheme,
    NumberInput: numberInputTheme,
  },
  textStyles: {
    h1: {
      fontSize: { base: "44px", md: "60px" },
      fontWeight: "semibold",
    },
    h2: {
      fontSize: { base: "32px", md: "36px" },
      fontWeight: "semibold",
    },
    h3: {
      fontSize: { base: "24px", md: "28px" },
      fontWeight: "semibold",
    },
    p: {
      fontSize: { base: "16px", md: "20px" },
      fontWeight: "normal",
    },
    p2: {
      fontSize: { base: "14px", md: "18px" },
      fontWeight: "normal",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: "#FAF0CA",
        color: "#000000",
      },
    }),
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    orangey: {
      500: "#ff9c66", // Primary shade
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
