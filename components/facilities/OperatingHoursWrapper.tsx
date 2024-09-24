import React from "react";
import { Box, Flex, SimpleGrid, Stack, Switch, Text } from "@chakra-ui/react";
import { FacilityHours } from "@prisma/client";
import { getDayOfWeek } from "@/utils/getDayOfWeek";
import { get12HourTime } from "@/utils/get12HourTime";

interface WrapperProps {
  facilityHours: FacilityHours[];
}
const OperatingHoursWrapper = ({ facilityHours }: WrapperProps) => {
  return (
    <Box
      mb={5}
      flex="2"
      bg="var(--beige)"
      rounded="xl"
      p={3}
      boxShadow="0 5px 20px rgba(0,0,0,0.2)"
    >
      <Text mb={3} textStyle="h3">
        Operating Hours
      </Text>
      <Flex direction="column" gap={3}>
        {facilityHours.map((item, index) => (
          <SimpleGrid
            alignItems="center"
            key={index}
            columns={{ base: 2, md: 3 }}
          >
            <Text textStyle="p">{getDayOfWeek(item.dayOfWeek)}</Text>
            {item.openingTime && item.closingTime ? (
              <>
                <Stack direction="row" alignItems="center">
                  <Switch colorScheme="red" isReadOnly isChecked={true} />
                  <Text textStyle="p">Open</Text>
                </Stack>
                <Stack direction="row">
                  <Text textStyle="p">
                    {get12HourTime(
                      item.openingTime.toISOString().substring(11, 16)
                    )}{" "}
                    -
                  </Text>
                  <Text textStyle="p">
                    {get12HourTime(
                      item.closingTime.toISOString().substring(11, 16)
                    )}
                  </Text>
                </Stack>
              </>
            ) : (
              <>
                <Stack direction="row" alignItems="center">
                  <Switch colorScheme="red" isReadOnly isChecked={false} />
                  <Text textStyle="p">Closed</Text>
                </Stack>
                <Text alignSelf="center" textStyle="p">
                  -
                </Text>
              </>
            )}
          </SimpleGrid>
        ))}
      </Flex>
    </Box>
  );
};

export default OperatingHoursWrapper;
