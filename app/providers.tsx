"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, StyleFunctionProps } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: { base: "40px", md: "60px" },
      fontWeight: "semibold",
    },
    h2: {
      fontSize: { base: "20px", md: "24px" },
      fontWeight: "semibold",
    },
    p: {
      fontSize: { base: "16px", md: "20px" },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: "#FAF0CA",
      },
    }),
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
