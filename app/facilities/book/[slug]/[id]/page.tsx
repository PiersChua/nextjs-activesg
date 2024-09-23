import { getFacility } from "@/app/action/facilities";
import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { daysOfWeek, getDayOfWeek } from "@/utils/getDayOfWeek";
import { Switch } from "@chakra-ui/react";

const FacilityPage = async ({ params }: { params: { id: string } }) => {
  const facility = await getFacility(params.id);
  if (!facility) return notFound();
  const openingDaysOfWeek = Array.from(
    facility.facilityHours.map((item) => item.dayOfWeek)
  );
  const findFacility = (dayOfWeek: number) => {
    const facilityHours = facility.facilityHours.find(
      (item) => item.dayOfWeek === dayOfWeek
    );
    return facilityHours;
  };
  const sortedFacilitySlots = facility.facilitySlots.sort(
    (a, b) => a.dayOfWeek - b.dayOfWeek
  );

  return (
    <Container maxW="1400px">
      <Box>
        <Text textStyle="h2">{facility.name}</Text>
        <Text textStyle="h3">Operating Hours</Text>
        <Flex direction="column" gap={3}>
          {daysOfWeek.map((day, index) => (
            <SimpleGrid columns={{ base: 2, md: 3 }}>
              <Text textStyle="p">{day}</Text>
              {openingDaysOfWeek.includes(index) ? (
                <>
                  <Stack direction="row" alignItems="center">
                    <Switch isReadOnly isChecked={true} />
                    <Text textStyle="p">Open</Text>
                  </Stack>
                  <Stack direction="row">
                    <Text textStyle="p">
                      {findFacility(index)!
                        .openingTime.toISOString()
                        .substring(11, 16)}{" "}
                      -
                    </Text>
                    <Text textStyle="p">
                      {findFacility(index)!
                        .closingTime.toISOString()
                        .substring(11, 16)}
                    </Text>
                  </Stack>
                </>
              ) : (
                <>
                  <Stack direction="row" alignItems="center">
                    <Switch isReadOnly isChecked={false} />
                    <Text textStyle="p">Closed</Text>
                  </Stack>
                </>
              )}
            </SimpleGrid>
          ))}
        </Flex>
        <Box>
          <Text textStyle="h3">Pricing</Text>
          {sortedFacilitySlots.map((item, index) => (
            <Text textStyle="p" key={index}>
              {getDayOfWeek(item.dayOfWeek)}
            </Text>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default FacilityPage;
