import { getFacility } from "@/app/action/facilities";
import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import BreadcrumbComponent from "@/components/Breadcrumb";
import BookFacilitiesForm from "@/components/Form/BookFacilitiesForm";
import OperatingHoursWrapper from "@/components/facilities/OperatingHoursWrapper";
import PricingWrapper from "@/components/facilities/PricingWrapper";

const FacilityPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const facility = await getFacility(searchParams.id);
  if (!facility) notFound();

  const sortedFacilityHours = facility.facilityHours.sort(
    (a, b) => a.dayOfWeek - b.dayOfWeek
  );
  const sortedFacilitySlots = facility.facilitySlots.sort(
    (a, b) => a.dayOfWeek - b.dayOfWeek
  );

  return (
    <Container maxW="1400px">
      <BreadcrumbComponent />
      <Box>
        <Text mb={3} textStyle="h2">
          {facility.name}
        </Text>
        <Stack direction={{ base: "column", md: "row" }}>
          <OperatingHoursWrapper facilityHours={sortedFacilityHours} />
          <PricingWrapper facilitySlots={sortedFacilitySlots} />
        </Stack>
        <BookFacilitiesForm />
      </Box>
    </Container>
  );
};

export default FacilityPage;
