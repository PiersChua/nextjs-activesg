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
        <Box>
          <Text textStyle="h2">{name}</Text>
          <Text textStyle="p2" color="var(--grey)">
            {location}
          </Text>
          <Text textStyle="p2">{desc}</Text>
        </Box>
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
