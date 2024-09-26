import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import WrapperButton from "./FacilitiesWrapperButton";
import { getFacilities } from "@/app/action/facilities";
import { FacilityType, Sport } from "@prisma/client";

interface WrapperProps {
  facilityParam: FacilityType;
  sportParam: Sport | undefined;
}
const FacilitiesWrapper = async ({
  facilityParam,
  sportParam,
}: WrapperProps) => {
  const facilities = await getFacilities(facilityParam, sportParam);
  return (
    <Flex mb={10} direction="column" gap={5}>
      {facilities.map((item, index) => (
        <Box
          key={index}
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
              <Text textStyle="h2">{item.name}</Text>
              <Text textStyle="p2" color="var(--grey)">
                {item.location}
              </Text>
              <Text maxW="500px" noOfLines={1} textStyle="p2">
                {item.description}
              </Text>
              <Flex gap={3}>
                {item.sports.slice(0, 2).map((sport, idx) => (
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
                {item.sports.length > 2 && (
                  <Box
                    _hover={{ bg: "var(--white-1)" }}
                    userSelect="none"
                    color="var(--black)"
                    rounded="md"
                    bg="var(--white)"
                    p={1}
                  >
                    +{item.sports.length - 2} more
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
                Prices from $
                {(
                  Math.min(
                    ...item.facilitySlots.map((slot) => slot.priceInCents)
                  ) / 100
                ).toFixed(2)}
              </Text>
              <WrapperButton id={item.id} />
            </Flex>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default FacilitiesWrapper;
