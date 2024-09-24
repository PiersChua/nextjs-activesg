import { getDayOfWeek } from "@/utils/getDayOfWeek";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FacilitySlots } from "@prisma/client";
import React from "react";
interface WrapperProps {
  facilitySlots: FacilitySlots[];
}

const PricingWrapper = ({ facilitySlots }: WrapperProps) => {
  return (
    <Box
      flex="1"
      bg="var(--beige)"
      rounded="xl"
      p={3}
      mb={5}
      boxShadow="0 5px 20px rgba(0,0,0,0.2)"
    >
      <Text mb={3} textStyle="h3">
        Pricing
      </Text>
      <Stack>
        <Stack
          justifyContent="space-between"
          direction="row"
          borderBottom="1px solid var(--black)"
        >
          <Text textStyle="p">DAYS</Text>
          <Text textStyle="p">PRICE</Text>
        </Stack>
        {facilitySlots.map((item, index) => (
          <Stack key={index} justifyContent="space-between" direction="row">
            <Text textStyle="p">
              {getDayOfWeek(item.dayOfWeek).slice(0, 3)}
            </Text>
            <Text fontWeight="semibold" textStyle="p">
              ${(item.priceInCents / 100).toFixed(2)}/{item.durationInHours} hr
            </Text>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default PricingWrapper;
