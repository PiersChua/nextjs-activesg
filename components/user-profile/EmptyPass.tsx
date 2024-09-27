"use client";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaRegFaceSadTear } from "react-icons/fa6";

const EmptyPass = () => {
  return (
    <Flex
      direction="column"
      py="5em"
      gap={5}
      alignItems="center"
      justifyContent="center"
    >
      <Icon color="var(--orange)" boxSize="100px" as={FaRegFaceSadTear} />
      <Text color="var(--grey)" textAlign="center" textStyle="h3">
        No passes found
      </Text>
    </Flex>
  );
};

export default EmptyPass;
