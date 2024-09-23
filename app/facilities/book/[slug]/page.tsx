import { getFacilities } from "@/app/action/facilities";
import { Container, Flex, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { FacilityType } from "@prisma/client";
import FacilitiesWrapper from "@/components/facilities/FacilitiesWrapper";

const FacilitiesTypePage = async ({ params }: { params: { slug: string } }) => {
  if (!Object.values(FacilityType).includes(params.slug as FacilityType)) {
    console.log(params.slug);
    notFound();
  }
  const facilities = await getFacilities(params.slug as FacilityType);
  return (
    <Container maxW="1400px">
      <Flex py={10} direction="column" gap={5}>
        {facilities.map((item, index) => (
          <FacilitiesWrapper
            key={index}
            id={item.id}
            name={item.name}
            location={item.location}
            sports={item.sports}
            desc={item.description}
            minPrice={Math.min(
              ...item.facilitySlots.map((slot) => slot.priceInCents)
            )}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default FacilitiesTypePage;
