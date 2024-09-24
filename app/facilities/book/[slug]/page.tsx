import { getFacilities } from "@/app/action/facilities";
import { Container, Flex, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { FacilityType, Sport } from "@prisma/client";
import FacilitiesWrapper from "@/components/facilities/FacilitiesWrapper";
import BreadcrumbComponent from "@/components/Breadcrumb";

const FacilitiesTypePage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) => {
  if (
    (!Object.values(Sport).includes(searchParams.sport as Sport) &&
      searchParams.sport) ||
    !Object.values(FacilityType).includes(params.slug as FacilityType)
  ) {
    notFound();
  }
  const sportParam = searchParams.sport
    ? (searchParams.sport as Sport)
    : undefined;
  const facilities = await getFacilities(
    params.slug as FacilityType,
    sportParam
  );
  return (
    <Container maxW="1400px">
      <BreadcrumbComponent />
      <Flex mb={10} direction="column" gap={5}>
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
