import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import WrapperButton from "./WrapperButton";

interface WrapperProps {
  id: string;
  name: string;
  location: string;
  desc: string;
  sports: string[];
  minPrice: number;
}
const FacilitiesWrapper = ({
  id,
  name,
  location,
  desc,
  sports,
  minPrice,
}: WrapperProps) => {
  return (
    <Box
      bg="var(--beige)"
      boxShadow="0 5px 20px rgba(0,0,0,0.2)"
      p={3}
      rounded="xl"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "flex-start", md: "flex-end" }}
        justifyContent="space-between"
      >
        <Flex direction="column" gap={1}>
          <Text textStyle="h2">{name}</Text>
          <Text textStyle="p2" color="var(--grey)">
            {location}
          </Text>
          <Text maxW="500px" noOfLines={1} textStyle="p2">
            {desc}
          </Text>
          <Flex gap={3}>
            {sports.slice(0, 2).map((sport, idx) => (
              <Box
                _hover={{ bg: "var(--orange-1)" }}
                userSelect="none"
                color="var(--white)"
                rounded="md"
                bg="var(--orange)"
                p={1}
                key={idx}
              >
                {sport.replace("_", " ")}
              </Box>
            ))}
            {sports.length > 2 && (
              <Box
                _hover={{ bg: "var(--white-1)" }}
                userSelect="none"
                color="var(--black)"
                rounded="md"
                bg="var(--white)"
                p={1}
              >
                +{sports.length - 2} more
              </Box>
            )}
          </Flex>
        </Flex>
        <Divider
          display={{ base: "block", md: "none" }}
          my={5}
          borderColor="var(--black)"
        />
        <Flex
          gap={2}
          direction="column"
          alignItems={{ base: "flex-start", md: "flex-end" }}
        >
          <Text textStyle="p" fontWeight="bold">
            Prices from ${(minPrice / 100).toFixed(2)}
          </Text>
          <WrapperButton id={id} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default FacilitiesWrapper;
