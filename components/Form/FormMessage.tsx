import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";
import React from "react";

interface MessageProps {
  children: React.ReactNode;
}
const FormMessage = ({ children }: MessageProps) => {
  return (
    <Box w="full" bg="#FFCDD2" h={10} borderRadius="5px">
      <Stack
        ml={3}
        color="#B71C1C"
        h="full"
        alignItems="center"
        direction="row"
      >
        <Icon as={FaExclamationTriangle} />
        <Text>{children}</Text>
      </Stack>
    </Box>
  );
};

export default FormMessage;
