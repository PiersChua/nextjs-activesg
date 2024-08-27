"use client";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: "Authentication Page",
  description: "Authentication Page",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
