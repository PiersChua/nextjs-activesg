"use client";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { LuShoppingBag } from "react-icons/lu";

const EmptyCart = () => {
  return (
    <Flex
      direction="column"
      py="5em"
      gap={5}
      alignItems="center"
      justifyContent="center"
    >
      <Icon color="var(--orange)" boxSize="100px" as={LuShoppingBag} />
      <Text color="var(--grey)" textAlign="center" textStyle="h2">
        Your cart is empty
      </Text>
      <Button
        as="a"
        href="/membership/GYM"
        color="#fff"
        bg="var(--orange)"
        _hover={{ bg: "var(--orange-1)" }}
      >
        Start shopping now
      </Button>
    </Flex>
  );
};

export default EmptyCart;
