import { Box, Button, Flex, Text } from "@chakra-ui/react";

interface WrapperProps {
  name: string;
  location: string;
  desc: string;
  sports: string[];
}
const FacilitiesWrapper = ({ name, location, desc, sports }: WrapperProps) => {
  return (
    <Box
      bg="var(--beige)"
      boxShadow="0 5px 20px rgba(0,0,0,0.2)"
      p={3}
      rounded="xl"
    >
      <Flex alignItems="flex-end" justifyContent="space-between">
        <Flex direction="column" gap={1}>
          <Text textStyle="h2">{name}</Text>
          <Text textStyle="p2" color="var(--grey)">
            {location}
          </Text>
          <Text textStyle="p2">{desc}</Text>
          <Flex gap={3}>
            {sports.slice(0, 3).map((sport, idx) => (
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
            {sports.length > 3 && (
              <Box
                _hover={{ bg: "var(--white-1)" }}
                userSelect="none"
                color="var(--black)"
                rounded="md"
                bg="var(--white)"
                p={1}
              >
                +{sports.length - 3} more
              </Box>
            )}
          </Flex>
        </Flex>
        <Flex gap={2} direction="column" alignItems="flex-end">
          <Text textStyle="p" fontWeight="bold">
            Prices from $20
          </Text>
          <Button variant="orangeWhite">Book now</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FacilitiesWrapper;
